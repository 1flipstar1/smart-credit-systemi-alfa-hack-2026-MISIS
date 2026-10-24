# Типографика фронтенда

Источник правил: [Core Components — Типографика](https://core-ds.github.io/core-components/master/?path=/docs/guidelines-typography--docs).
API и шкала проверены по установленной версии Core Components 50.37.0.

- Заголовки: Styrene UI, `font-feature-settings: 'ss01'`. Основной текст и контролы: официальный `--font-family-system`.
- React: настоящие `Typography.Title` и `Typography.Text`, без переопределения внутренних классов.
- HTML-прототип: официальные `headline_*`, `headline-mobile_*`, `paragraph_*`, `action_*`, `accent_*` из `@alfalab/core-components-vars/typography.css`. Сборка раскрывает миксины напрямую из установленного пакета, включая стили динамических шаблонов.
- Styrene UI 400/500/700 взят с официального CDN по адресам из руководства (`https://alfabank.servicecdn.ru/media/fonts/styrene-ui/styrene-ui_{regular,medium,bold}.woff2`). Файлы в `src/fonts`, подключение в `src/fonts.css`; сборка встраивает WOFF2 в обе страницы. Сеть для шрифтов не требуется.
- Сглаживание: `-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale`.

Редактировать `src/app.tsx`, `src/layout.css`, `src/prototype.html`. Прототип в `output/prototype/alfa-credit-cabinet.html` теперь генерируется через `npm run build`; миксины в исходном HTML раскрываются только при сборке.

Проверки: `npm run check`, `npm run build`, `npm run verify`. Браузерная проверка контролирует загрузку трёх начертаний без сети, вычисленные размеры и интерлиньяж, `ss01`, отсутствие Onest, переполнений и ошибок JavaScript. Проверяются экраны клиента и банка, результаты решений, подписание и выдача на ширинах 1440, 720, 390. Превью обновляются в `output/prototype/typography-*.png` и `output/bank-ui-study/*-components.png`.

Исторические HTML-атласы, исследования и промогалереи не являются экранами приложения; архивный `build_study.py` не используется.
