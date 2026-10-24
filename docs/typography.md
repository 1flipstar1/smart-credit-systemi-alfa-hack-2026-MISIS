# Типографика фронтенда

Источник правил: [Core Components — Типографика](https://core-ds.github.io/core-components/master/?path=/docs/guidelines-typography--docs).
API и шкала проверены по установленной версии Core Components 50.37.0.

- Заголовки: официальные стили Styrene UI и системные варианты `Typography.Title font="system"` (в блоке оформления по банковскому референсу). Для Styrene UI обязателен `font-feature-settings: 'ss01'`. Основной текст и контролы: официальный `--font-family-system`.
- React: настоящие `Typography.Title` и `Typography.Text`, без переопределения внутренних классов.
- HTML-прототип: официальные `headline_*`, `headline-mobile_*`, `paragraph_*`, `action_*`, `accent_*` из `@alfalab/core-components-vars/typography.css`. Сборка раскрывает миксины напрямую из установленного пакета, включая стили динамических шаблонов.
- Styrene UI 400/500/700 взят с официального CDN по адресам из руководства (`https://alfabank.servicecdn.ru/media/fonts/styrene-ui/styrene-ui_{regular,medium,bold}.woff2`). Файлы в `src/fonts`, подключение в `src/fonts.css`; сборка встраивает WOFF2 в обе страницы. Сеть для шрифтов не требуется.
- Сглаживание: `-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale`.
- Не задавать отдельные `font-size` и `line-height` в прикладных стилях: брать полный официальный стиль. Для плавающих подписей старых HTML-полей используется `paragraph_secondary_medium`, без уменьшения текста через `scale()`.

Редактировать `src/app.tsx`, `src/layout.css`, `src/credit-sections.tsx`, `src/credit-sections.css`, `src/prototype.html`. Прототип в `output/prototype/alfa-credit-cabinet.html` генерируется через `npm run build`; миксины в исходном HTML раскрываются только при сборке. Заявка под шагами использует настоящие `Input`, `Button` и `Typography`, включая подписи и ошибки. Галерея иллюстраций генерируется той же сборкой через `scripts/illustration-gallery.mjs` с официальными миксинами и встроенными шрифтами.

Проверки: `npm run check`, `npm run build`, `npm run verify`. `scripts/typography-audit.mjs` берёт все профили из установленного `@alfalab/core-components-vars/typography.css`, вычисляет их браузерные значения и сопоставляет с каждым текстовым элементом, значениями полей, select, textarea и плейсхолдерами. Проверяются гарнитура, кегль, интерлиньяж, допустимый вес, `ss01`, сглаживание и использование заголовочных стилей в h1–h6. Для плейсхолдеров Chromium сообщает `line-height: normal`, поэтому проверка использует высоту строки их поля; остальные свойства берутся у самого псевдоэлемента. Отдельно проверяются три встроенных начертания без сети, отсутствие произвольных кеглей в исходниках, переполнений и ошибок JavaScript.

Проверка проходит все экраны клиента и банка, варианты решений, вкладки документов и решений, раскрытые FAQ, состояния загрузки, ручной проверки, ошибки заявки и кода подписи, договоры, модальные окна и уведомления. Информационный пример и галерея иллюстраций тоже включены. Все сценарии проверяются на ширинах 1440, 720 и 390. Подробный отчёт с количеством текстовых элементов и найденными профилями — `output/bank-ui-study/verification-core-components.json`; превью — `output/prototype/typography-*.png`, `how-to-*.png`, `credit-lead-*.png`, `credit-kinds-*.png` и `output/bank-ui-study/*-components.png`.

Исторические HTML-атласы, исследования и промогалереи не являются экранами приложения; архивный `build_study.py` не используется.
