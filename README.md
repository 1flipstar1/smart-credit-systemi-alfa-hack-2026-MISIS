# Альфа-Бизнес · информационный блок

В странице остался только информационный блок об официальной Alfa Core Components со ссылкой на документацию. Пять набросков и их превью удалены.

Откройте `output/bank-ui-study/alfa-credit-concepts.html` напрямую в браузере.

```sh
npm ci
npm run check
npm run build
npm run verify
npm run dev
```

Локальный просмотр: http://127.0.0.1:4173 — кредитный кабинет со встроенными иллюстрациями. Информационный блок доступен по `/alfa-credit-concepts.html`. Проверка использует Chrome в C:/Program Files/Google/Chrome/Application/chrome.exe.

Исходники — src/app.tsx, композиция — src/layout.css. Сборка создаёт один автономный HTML. Проверка контролирует информационный блок, ссылку на документацию, адаптивность и ошибки браузера, обновляет gallery-core-components.png, information-mobile.png и verification-core-components.json.

Правила дизайн-системы — AGENTS.md. Каталог API — docs/core-components/COMPONENTS.md, параметры — docs/core-components/api. npm run ds:catalog обновляет справочник.

Исторические исследования и исходные референсы сохранены. Архивный build_study.py запускать не следует.

Кредитный прототип: `output/prototype/alfa-credit-cabinet.html`. Его исходник — `src/prototype.html`; он также генерируется через `npm run build`. Правила типографики, источники шрифтов и браузерные проверки описаны в [docs/typography.md](docs/typography.md).

Иллюстрации кабинета перегенерированы встроенным image_gen по промоматериалам и интерфейсам из `Библиотека ui/`. Рабочие WebP и карта соответствий — `src/assets/illustrations/`; исходные PNG с прозрачностью и точные промпты — `output/illustrations/originals/` и `output/illustrations/generation.json`. Для повторной конвертации и обновления галереи: `node scripts/prepare-credit-assets.mjs`, затем `npm run build` и `npm run verify`. Галерея — `output/illustrations/index.html`.
