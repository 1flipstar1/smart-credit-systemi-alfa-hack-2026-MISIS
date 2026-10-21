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

Локальный просмотр: http://127.0.0.1:4173. Проверка использует Chrome в C:/Program Files/Google/Chrome/Application/chrome.exe.

Исходники — src/app.tsx, композиция — src/layout.css. Сборка создаёт один автономный HTML. Проверка контролирует информационный блок, ссылку на документацию, адаптивность и ошибки браузера, обновляет gallery-core-components.png, information-mobile.png и verification-core-components.json.

Правила дизайн-системы — AGENTS.md. Каталог API — docs/core-components/COMPONENTS.md, параметры — docs/core-components/api. npm run ds:catalog обновляет справочник.

Исторические исследования и исходные референсы сохранены. Архивный build_study.py запускать не следует.
