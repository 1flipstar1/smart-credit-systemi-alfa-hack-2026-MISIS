# Умный кредитный кабинет — backend starter

Учебный стартовый backend для прототипа кредитного кабинета. Стек: FastAPI, PostgreSQL, SQLAlchemy 2, Alembic, scikit-learn/joblib, MinIO (S3 API), отдельный worker для обработки документов.

> Это каркас для разработки и демонстрации, не готовая банковская система. Скоринговая модель и ML распознавания документов подключаются отдельно. Решения в коде не являются финансовой рекомендацией или реальной банковской политикой.

## Возможности каркаса

- создание и просмотр заявок;
- история событий и статусов;
- сохранение скорингового прогноза и версии модели;
- интерфейсы классификации и извлечения данных из документов;
- загрузка документов через API, запись файла в локальное хранилище по умолчанию;
- запуск обработки документов отдельным worker-процессом;
- административная очередь и фиксация решения сотрудника;
- PostgreSQL, Docker Compose, тесты и OpenAPI на `/docs`.

## Быстрый запуск

Требуется Docker Desktop / Docker Engine с Compose.

```bash
docker compose up --build
```

API: http://localhost:8000  
Swagger: http://localhost:8000/docs  
Health: http://localhost:8000/api/health

Для локального запуска без Docker:

```bash
python -m venv .venv
# Windows PowerShell:
.venv\Scripts\Activate.ps1
# Linux/macOS:
# source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Для локального запуска по умолчанию используется SQLite. Для PostgreSQL задайте `DATABASE_URL`.

## Основные маршруты

- `GET /api/health`
- `GET /api/products`
- `POST /api/applications`
- `GET /api/applications/{application_id}`
- `POST /api/applications/{application_id}/submit`
- `GET /api/applications/{application_id}/events`
- `POST /api/applications/{application_id}/documents` (multipart field `file`)
- `GET /api/documents/{document_id}`
- `GET /api/documents/{document_id}/extraction`
- `GET /api/admin/applications`
- `POST /api/admin/applications/{application_id}/decision`
- `GET /api/admin/analytics`

## ML: что нужно подключить

### Скоринг

Положите обученный sklearn-совместимый estimator или `Pipeline` в `ml_models/scoring/model.joblib`. Укажите целевую переменную, признаки и порядок признаков в `app/ml/scoring/features.py`. Модель должна быть обучена на тех же преобразованиях, что используются при инференсе. Если файла модели нет, endpoint скоринга вернёт понятную ошибку `503`, а не подменит ML случайным правилом.

Тестовый маршрут: `POST /api/applications/{application_id}/score`. Входные финансовые признаки заявки подаются в `CreditPredictor`; прогноз сохраняется с версией модели. Сам по себе численный прогноз не равен решению об одобрении: правила кредитной политики должны быть согласованы отдельно с целевой переменной и бизнес-требованиями.

### Распознавание документов

Файлы сохраняются в `data/uploads/`, в БД хранится метаинформация. При загрузке создаётся задача в `document_jobs`; worker выбирает ожидающие задачи. Сейчас `classifier.py` и `extractor.py` содержат безопасные заглушки, которые помечают задачу как требующую ручной проверки. Это намеренно: реальные ML-модели/OCR не предоставлены.

Запустить worker локально:

```bash
python -m app.workers.document_worker
```

Worker использует ту же БД, что и API. Для настоящего OCR/ML замените реализации `classify_document()` и `extract_fields()` и добавьте ограничения по форматам, размеру и времени обработки.

## Структура

```text
app/
  api/              HTTP endpoints
  core/             settings
  db/               engine, ORM models, initialization
  ml/scoring/       feature preparation and regression inference
  ml/documents/     classification, extraction, validation pipeline
  services/         application workflow, policy, storage
  workers/          document processing worker
ml_models/          local model artifacts (not included)
tests/              API smoke tests
alembic/            migration configuration
```

## Важные ограничения перед реальным использованием

1. Добавить полноценную аутентификацию и RBAC (клиент/сотрудник/администратор); сейчас admin endpoints помечены как демонстрационные и не защищены.
2. Добавить антивирусную проверку файлов, лимиты, контроль MIME и безопасную выдачу файлов.
3. Добавить Alembic migrations, мониторинг, резервное копирование и управление секретами.
4. Определить целевую переменную регрессии, метрики и пороги по валидированным данным; проверить смещения и объяснимость модели.
5. Проверять извлечённые поля и отправлять низкую уверенность/противоречия на ручную проверку.
6. Не хранить реальные персональные/финансовые данные в тестовой среде.

## Модель данных

Сущности: `Application`, `ApplicationEvent`, `Document`, `DocumentJob`, `DocumentExtraction`, `ScoringPrediction`, `CreditDecision`, `CreditProduct`.

В этой версии таблицы создаются автоматически при старте для удобства прототипирования. Для командной и production-разработки используйте Alembic revisions.
