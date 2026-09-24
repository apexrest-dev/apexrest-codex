// Authored search vocabulary and purpose summaries; not copied Oracle help text.
export const componentLabels = {
  standard: ['стандартний регіон звичайний контейнер', 'Organize related content under a region heading.'],
  alert: [
    'повідомлення сповіщення попередження підтвердження',
    'Present a short status or action message with the appropriate accessible label.',
  ],
  hero: [
    'великий заголовок головний блок',
    'Introduce a page or section with a prominent heading and supporting content.',
  ],
  'buttons-container': [
    'контейнер кнопок панель команд',
    'Group related page commands and choose their declarative alignment.',
  ],
  carousel: ['карусель слайди', 'Present a sequence of child regions with navigation between slides.'],
  collapsible: ['згортаний регіон розгортання', 'Let users expand or collapse a section of related content.'],
  'title-bar': [
    'рядок заголовка заголовок сторінки',
    'Display page identity and contextual navigation in the title area.',
  ],
  'wizard-container': [
    'майстер кроки покрокова форма',
    'Group the content for a step in a multi-step interaction.',
  ],
  'content-block': [
    'блок вмісту текстовий блок',
    'Present explanatory or structured content with a declarative heading style.',
  ],
  'inline-dialog': [
    'вбудований діалог модальне вікно',
    'Display a same-page dialog; pair its opening command with the dialog region.',
  ],
  'inline-popup': ['вбудоване спливне вікно', 'Display contextual content in a same-page popup.'],
  'inline-drawer': ['вбудована висувна панель', 'Show supporting content in a same-page drawer.'],
  'tabs-container': [
    'вкладки контейнер вкладок',
    'Arrange eligible child regions as tabs while retaining their own conditions and authorization.',
  ],
  'static-content': [
    'статичний вміст текст html',
    'Render trusted static content; escape values when adapting dynamic substitutions.',
  ],
  'classic-report': [
    'класичний звіт табличний звіт',
    'Render query rows through a selected report template and explicit column metadata.',
  ],
  'interactive-report': [
    'інтерактивний звіт інтерактивний репорт фільтри експорт',
    'Let users explore a query through report filters, sorting and supported report actions.',
  ],
  'interactive-grid': [
    'інтерактивна таблиця інтерактивний грід таблична частина редагування',
    'Present a grid of keyed rows; editing additionally needs a declared persistence contract.',
  ],
  cards: ['картки регіон карток', 'Map query columns to native card title, body, media and actions.'],
  'legacy-cards': [
    'картки шаблон класичного звіту',
    'Use a card-shaped classic report template with its own required column aliases.',
  ],
  avatar: [
    'аватар зображення ініціали піктограма',
    'Represent a person or entity with an image, icon or initials.',
  ],
  badge: ['значок бейдж індикатор стану лічильник', 'Show a compact label, value or status indication.'],
  comments: [
    'коментарі обговорення повідомлення чат',
    'Present attributed comments; select the classic-report or template-component host explicitly.',
  ],
  'content-row': [
    'рядок вмісту інформаційний рядок',
    'Present a compact row of primary content and supporting details.',
  ],
  'media-list': [
    'медіасписок медіа список зображення',
    'Present a list with primary text and media; a shared List and a template component use different sources.',
  ],
  timeline: ['хронологія часова шкала події', 'Present dated events with explicit ordering and attribution.'],
  'metric-card': [
    'картка показника показник метрика kpi',
    'Present a metric with an optional title, supporting text, avatar and badge.',
  ],
  'flexbox-container': [
    'гнучкий контейнер flexbox компонування рядок колонка',
    'Arrange compatible child content with declarative flex direction, wrapping and alignment.',
  ],
  checkbox: [
    'прапорець позначка так ні',
    'Capture a boolean-like choice using the component return-value contract.',
  ],
  'checkbox-group': [
    'група прапорців множинний вибір',
    'Select multiple values from a declared list of values.',
  ],
  'color-picker': ['вибір кольору палітра', 'Capture a color using the supported color-value format.'],
  combobox: ['комбінований список комбобокс', 'Combine input with suggestions from a declared source.'],
  hidden: [
    'приховане поле',
    'Keep a page value without a visible input; hiding it does not provide authorization.',
  ],
  'date-picker': [
    'вибір дати календар поле дати',
    'Capture dates with a declared format and validation rules.',
  ],
  'display-map': ['відображення карти поле мапи', 'Display a location using the item location contract.'],
  'display-only': ['лише відображення поле перегляду', 'Display a value without a user-editable input.'],
  'file-upload': [
    'завантаження файлу вкладення',
    'Capture a file; define storage, processing and permitted content in the target application.',
  ],
  'image-upload': [
    'завантаження зображення фото',
    'Capture an image with explicit target storage and processing rules.',
  ],
  'list-manager': [
    'керування списком значень',
    'Maintain a collection of values using the item serialization contract.',
  ],
  'markdown-editor': [
    'редактор markdown тексту',
    'Edit Markdown content with appropriate output rendering and escaping.',
  ],
  'number-field': [
    'числове поле число сума кількість',
    'Capture a number using declared bounds and formatting.',
  ],
  password: [
    'пароль поле пароля',
    'Capture a masked value; storage and authentication remain application responsibilities.',
  ],
  'percent-graph': [
    'відсоток шкала прогресу',
    'Display a numeric percentage using the component value range.',
  ],
  'popup-lov': [
    'спливний список значень пошук довідник lov',
    'Select a return value while displaying a label from the declared LOV.',
  ],
  'qr-code': ['qr код штрихкод', 'Render a QR representation of a supplied value.'],
  'radio-group': ['група перемикачів один вибір', 'Select one value from a small declared list.'],
  'select-list': ['випадний список один вибір', 'Select a return value from a declared list of values.'],
  'select-many': [
    'множинний вибір багато значень',
    'Select several values while preserving the component serialization contract.',
  ],
  'select-one': ['одиночний вибір одне значення', 'Select a single value from the supported option source.'],
  shuttle: ['перенесення вибору подвійний список', 'Move values between available and selected collections.'],
  'star-rating': ['рейтинг зірки оцінка', 'Capture or display a rating with declared scale and labels.'],
  switch: [
    'перемикач увімкнення вимкнення',
    'Capture a binary choice with explicit on and off return values.',
  ],
  textarea: [
    'багаторядкове поле текст область тексту',
    'Capture plain multi-line text with an explicit length bound.',
  ],
  'text-field': [
    'текстове поле рядок введення',
    'Capture a text value with an appropriate label and validation.',
  ],
  'text-field-with-autocomplete': [
    'текстове поле автодоповнення підказки',
    'Suggest values while typing from a declared, authorized source.',
  ],
  'links-list': ['список посилань навігація', 'Render shared list entries as navigation links.'],
  'badge-list': ['список значків лічильників', 'Render shared list entries with a compact value or count.'],
  'badges-list': ['список значків лічильників', 'Render shared list entries with a compact value or count.'],
  'menu-bar': ['рядок меню панель меню', 'Render hierarchical commands using a supported menu template.'],
  'menu-popup': ['спливне меню контекстне меню', 'Expose contextual list entries through a popup menu.'],
  'contextual-info': [
    'контекстна інформація',
    'Present short supporting facts through the selected list template.',
  ],
  'navigation-bar': [
    'навігаційна панель меню користувача',
    'Present application-level navigation entries in the navigation bar.',
  ],
  'side-navigation-menu': [
    'бічне меню дерево навігації',
    'Present application navigation using a side tree.',
  ],
  'navigation-menu': ['меню навігації', 'Present shared application navigation entries.'],
  'top-navigation-menu': ['верхнє меню навігації', 'Present application navigation at the top of the page.'],
  'navigation-tabs': ['навігаційні вкладки', 'Present application destinations as navigation tabs.'],
  'left-side-column': ['ліва бічна колонка', 'Reserve a left-side area for supporting page content.'],
  'right-side-column': ['права бічна колонка', 'Reserve a right-side area for supporting page content.'],
  'left-and-right-side-columns': [
    'ліва права бічні колонки',
    'Provide both side areas for a page with supporting content.',
  ],
  marquee: ['головний блок сторінки деталі marquee', 'Combine a prominent page heading with detail content.'],
  'minimal-no-navigation': [
    'мінімальна сторінка без навігації',
    'Use a minimal page layout where application navigation is not required.',
  ],
  login: [
    'сторінка входу авторизація',
    'Lay out a sign-in page; preserve the application authentication scheme.',
  ],
  'modal-dialog': ['модальна сторінка діалог', 'Present a separate application page as a modal dialog.'],
  'wizard-modal-dialog': ['модальний майстер покроковий діалог', 'Present a wizard step in a modal page.'],
  drawer: ['сторінка висувна панель', 'Present a separate application page in a drawer layout.'],
  text: ['текстова кнопка команда', 'Provide a labeled command with a real target or event consumer.'],
  icon: ['кнопка піктограма іконка', 'Provide an icon command with an accessible name and a real action.'],
  'text-with-icon': ['кнопка текст піктограма', 'Combine a visible command label with an icon.'],
  'region-display-selector': [
    'перемикач регіонів вкладки вибір регіону',
    'Switch or scroll between explicitly selected regions without changing their authorization.',
  ],
  'smart-filters': [
    'розумні фільтри пошук',
    'Filter a supported results region while preserving its source scope.',
  ],
  'faceted-search': [
    'фасетний пошук відбори фільтри',
    'Refine a supported results region using declared facets.',
  ],
  search: ['пошук пошуковий регіон результати', 'Display results from declared search configurations.'],
  calendar: ['календар події розклад', 'Map event titles and dates to a calendar region.'],
  tree: ['дерево ієрархія', 'Render hierarchical rows using explicit node and parent keys.'],
  chart: ['діаграма графік серії осі', 'Map data to a chart with the required series and axes.'],
  map: ['карта мапа географія шари', 'Map authorized location data to declared layers.'],
  breadcrumb: ['навігаційний ланцюжок шлях сторінки', 'Show a hierarchy of page destinations.'],
  'list-view': [
    'мобільний список list view',
    'Render rows through the List View component; retain its own source contract.',
  ],
  'reflow-report': ['адаптивний звіт reflow', 'Render a report whose layout reflows on narrow screens.'],
  'column-toggle-report': [
    'звіт перемикання колонок',
    'Let users choose visible columns through the report component.',
  ],
  'value-attribute-pairs': [
    'пари атрибут значення реквізити',
    'Display labeled attribute values through a classic report template.',
  ],
  'dynamic-content': [
    'динамічний вміст plsql',
    'Generate region content through the supported server-side source contract.',
  ],
  'help-text': ['довідка підказки текст допомоги', 'Present contextual help for page content or input.'],
};

// Explicit family membership prevents an identically named future host from inheriting
// a purpose written for a different APEX implementation.
const familyMembers = {
  buttons: 'icon text text-with-icon',
  items:
    'checkbox checkbox-group color-picker combobox date-picker display-map display-only file-upload hidden image-upload list-manager markdown-editor number-field password percent-graph popup-lov qr-code radio-group select-list select-many select-one shuttle star-rating switch text-field text-field-with-autocomplete textarea',
  lists:
    'badges-list cards links-list media-list menu-bar menu-popup navigation-tabs side-navigation-menu tabs top-navigation-menu wizard-progress',
  pages:
    'drawer left-and-right-side-columns left-side-column login marquee minimal-no-navigation modal-dialog right-side-column standard wizard-modal-dialog',
  regions:
    'alert blank-with-attributes blank-with-attributes-no-grid buttons-container calendar cards cards-container carousel chart collapsible content-block dynamic-content faceted-search form hero image inline-dialog inline-drawer inline-popup interactive-report list-view login map no-template region-display-selector search search-results-container smart-filters standard static-content tabs-container title-bar tree wizard-container',
  reports:
    'classic-report column-toggle-report comments content-row contextual-info interactive-grid interactive-report legacy-cards media-list reflow-report standard timeline value-attribute-pairs-column value-attribute-pairs-row',
  'template-components':
    'actions avatar badge button comments content-row flexbox-container media-list metric-card timeline',
};

export const componentLabelsById = Object.fromEntries(
  Object.entries(familyMembers).flatMap(([family, members]) =>
    members.split(' ').map((member) => [`component:${family}/${member}`, componentLabels[member]]),
  ),
);

Object.assign(componentLabelsById, {
  'component:lists/cards': [
    'картки списку шаблон списку карток навігаційні картки',
    'Render shared List entries as cards using list labels, destinations and user-defined attributes.',
  ],
  'component:lists/media-list': [
    'медіасписок список із зображеннями шаблон списку медіа',
    'Render shared List entries with media, descriptive attributes and navigation targets.',
  ],
  'component:lists/tabs': [
    'вкладки списку список вкладок навігаційні посилання',
    'Render shared List entries as tabs with a current-entry state and explicit destinations.',
  ],
  'component:lists/wizard-progress': [
    'прогрес майстра кроки майстра індикатор етапів',
    'Render shared List entries as ordered wizard steps and identify the current step.',
  ],
  'component:pages/standard': [
    'стандартна сторінка шаблон сторінки навігація області сторінки',
    'Lay out a complete application page with navigation, header and declarative content slots.',
  ],
  'component:regions/blank-with-attributes': [
    'порожній регіон з атрибутами мінімальна обгортка',
    'Wrap region content with configurable attributes while leaving visual structure to its contents.',
  ],
  'component:regions/blank-with-attributes-no-grid': [
    'порожній регіон з атрибутами без сітки без гріда',
    'Provide a minimal region wrapper without the template grid so its content can control its own layout.',
  ],
  'component:regions/cards-container': [
    'контейнер карток обгортка карток шаблон регіону карток',
    'Provide the region shell for card content; the native Cards component supplies the query and card mappings.',
  ],
  'component:regions/form': [
    'форма реквізити картка запису редагування збереження видалення',
    'Bind page items to a form source and initialize a record; saving requires a declared table or API contract and processing.',
  ],
  'component:regions/image': [
    'зображення регіон зображення фото ілюстрація',
    'Display an image through the Image region template with an explicit source and accessible description.',
  ],
  'component:regions/interactive-report': [
    'обгортка інтерактивного звіту шаблон регіону звіту контейнер репорту',
    'Provide the region shell used by interactive reports and grids; the enclosed component defines columns, data and report actions.',
  ],
  'component:regions/login': [
    'регіон входу контейнер форми входу поля автентифікації',
    'Arrange sign-in fields and commands within a Login region; the application authentication scheme performs sign-in.',
  ],
  'component:regions/no-template': [
    'регіон без шаблону без обгортки чистий вміст',
    'Render region content without a selected region template; its source must supply the required presentation.',
  ],
  'component:regions/search-results-container': [
    'контейнер результатів пошуку обгортка пошукового регіону',
    'Provide the region layout and slots for search controls and results supplied by the Search component.',
  ],
  'component:reports/comments': [
    'коментарі класичний звіт шаблон коментарів автор дата повідомлення',
    'Render comment rows through a Classic Report template using the template-specific author, date and text aliases.',
  ],
  'component:reports/content-row': [
    'рядок вмісту класичний звіт інформаційний рядок реквізити',
    'Render query rows through the Content Row Classic Report template and its required column aliases.',
  ],
  'component:reports/contextual-info': [
    'контекстна інформація класичний звіт короткі реквізити',
    'Render compact contextual facts through the Contextual Info Classic Report template and its column mappings.',
  ],
  'component:reports/media-list': [
    'медіасписок класичний звіт шаблон звіту із зображеннями',
    'Render query rows through the Media List Classic Report template using its required text and media aliases.',
  ],
  'component:reports/standard': [
    'стандартний класичний звіт табличний шаблон звіту колонки',
    'Render Classic Report rows as a standard table with declared headings and column metadata.',
  ],
  'component:reports/timeline': [
    'хронологія класичний звіт часова шкала події',
    'Render ordered event rows through the Timeline Classic Report template and its date, label and content aliases.',
  ],
  'component:reports/value-attribute-pairs-column': [
    'пари атрибут значення колонка вертикальні реквізити',
    'Display Classic Report attributes and values with the column-oriented Value Attribute Pairs template.',
  ],
  'component:reports/value-attribute-pairs-row': [
    'пари атрибут значення рядок горизонтальні реквізити',
    'Display Classic Report attributes and values with the row-oriented Value Attribute Pairs template.',
  ],
  'component:template-components/actions': [
    'дії шаблонного компонента команди меню дій посилання',
    'Render action controls in a supported template-component placement with explicit labels and executable targets.',
  ],
  'component:template-components/button': [
    'кнопка шаблонного компонента метадані кнопки непідтримане розміщення',
    'Describe the UT Button template-component metadata; this source snapshot declares no supported placement.',
  ],
  'component:template-components/comments': [
    'коментарі шаблонний компонент обговорення чат автор повідомлення',
    'Map comment data to the UT Comments template component as a report, partial region or report-column partial.',
  ],
  'component:template-components/content-row': [
    'рядок вмісту шаблонний компонент компактні деталі',
    'Map primary text and supporting details to the UT Content Row template component and its supported actions.',
  ],
  'component:template-components/media-list': [
    'медіасписок шаблонний компонент текст зображення дії',
    'Map query data or partial values to the UT Media List template component with its own media and action settings.',
  ],
  'component:template-components/timeline': [
    'хронологія шаблонний компонент часова шкала події',
    'Map dated events to the UT Timeline template component with explicit date, author and content settings.',
  ],
});

export const labelsFor = (id) => componentLabelsById[id] ?? [];
