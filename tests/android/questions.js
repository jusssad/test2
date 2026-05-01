const QUESTIONS = [
  {
    id: 1,
    topic: "Android Resources",
    score: 1,
    question: [
      `Папка res в Android-проекте содержит:`
    ],
    options: [
      "Исходный код Java",
      "Ресурсы приложения",
      "Скомпилированные классы",
      "Базы данных"
    ],
    correct: 1,
    explanation: "Папка res содержит ресурсы: layout, drawable, values и др."
  },
  {
    id: 2,
    topic: "UI",
    score: 1,
    question: [
      `Какой компонент используется для ввода текстовой информации?`
    ],
    options: [
      "AbsoluteLayout",
      "EditText",
      "WebView",
      "Button"
    ],
    correct: 1,
    explanation: "EditText предназначен для ввода текста пользователем."
  },
  {
    id: 3,
    topic: "Async",
    score: 1,
    question: [
      `private class JSONWeatherTask extends AsyncTask<String, Void, Weather> — это:`
    ],
    options: [
      "Создание JSON-объекта",
      "Вызов уведомления",
      "Асинхронный поток",
      "Остановка активности"
    ],
    correct: 2,
    explanation: "AsyncTask используется для выполнения задач в фоновом потоке."
  },
  {
    id: 4,
    topic: "UI",
    score: 1,
    question: [
      `Какой компонент представляет собой открытый список элементов?`
    ],
    options: [
      "Spinner",
      "Image",
      "ListView",
      "EditText"
    ],
    correct: 2,
    explanation: "ListView отображает список элементов."
  },
  {
    id: 5,
    topic: "CalendarView",
    score: 1,
    question: [
      `Какой метод CalendarView отслеживает выбор даты?`
    ],
    options: [
      "setWeekNumberColor()",
      "setOnDateChangeListener()",
      "setMinDate()",
      "setMaxDate()"
    ],
    correct: 1,
    explanation: "Listener реагирует на изменение выбранной даты."
  },
  {
    id: 6,
    topic: "JSoup",
    score: 1,
    question: [
      `Document doc = Jsoup.connect(...).get(); выполняет:`
    ],
    options: [
      "Чтение заголовка страницы",
      "Создание HTML-документа",
      "Запрос к БД",
      "Добавление строки"
    ],
    correct: 1,
    explanation: "Метод получает HTML и формирует Document."
  },
  {
    id: 7,
    topic: "JVM",
    score: 1,
    question: [
      `Как работает JVM?`
    ],
    options: [
      "Компилирует Java",
      "Интерпретирует классы",
      "Интерпретирует и исполняет байт-код",
      "Создает библиотеки"
    ],
    correct: 2,
    explanation: "JVM исполняет байт-код .class файлов."
  },
  {
    id: 8,
    topic: "JSoup",
    score: 1,
    question: [
      `Какой метод создает подключение к URL в Jsoup?`
    ],
    options: [
      "parse()",
      "clean()",
      "connect()",
      "open()"
    ],
    correct: 2,
    explanation: "Jsoup.connect() возвращает Connection."
  },
  {
    id: 9,
    topic: "Android Widgets",
    score: 1,
    question: [
      `Что такое виджеты приложений?`
    ],
    options: [
      "Фоновые активности",
      "Мини-приложения при загрузке",
      "Небольшие UI-компоненты",
      "Все приложения"
    ],
    correct: 2,
    explanation: "Widget — это встроенное представление."
  },
  {
    id: 10,
    topic: "SQLite",
    score: 1,
    question: [
      `Класс для управления БД и версиями:`
    ],
    options: [
      "SQLiteDatabase",
      "SQLiteOpenHelper",
      "SQLiteManager",
      "DBHelper"
    ],
    correct: 1,
    explanation: "SQLiteOpenHelper управляет созданием и обновлением БД."
  },
  {
    id: 11,
    topic: "Layout",
    score: 1,
    question: [
      `Какой атрибут задает высоту?`
    ],
    options: [
      "layout_width",
      "layout_height",
      "gravity",
      "text"
    ],
    correct: 1,
    explanation: "layout_height определяет высоту элемента."
  },
  {
    id: 12,
    topic: "UI Thread",
    score: 1,
    question: [
      `imageView.post(...) используется для:`
    ],
    options: [
      "Отключения UI",
      "Работы без синхронизации",
      "Обновления UI-потока",
      "Удаления данных"
    ],
    correct: 2,
    explanation: "post выполняет код в UI-потоке."
  },
  {
    id: 13,
    topic: "Widgets",
    score: 1,
    question: [
      `Какое свойство задает минимальный размер виджета?`
    ],
    options: [
      "android:text",
      "android:minHeight",
      "android:updatePeriodMillis",
      "android:resizeMode"
    ],
    correct: 1,
    explanation: "minHeight задает минимальную высоту."
  },
  {
    id: 14,
    topic: "Operators",
    score: 1,
    question: [
      `Что означает оператор != ?`
    ],
    options: [
      "Равно",
      "Не равно",
      "Присваивание",
      "Ошибка"
    ],
    correct: 1,
    explanation: "!= означает 'не равно'."
  },
  {
    id: 15,
    topic: "Layouts",
    score: 1,
    question: [
      `Какой layout позиционирует элементы относительно друг друга?`
    ],
    options: [
      "LinearLayout",
      "FrameLayout",
      "RelativeLayout",
      "TableLayout"
    ],
    correct: 2,
    explanation: "RelativeLayout размещает элементы относительно других."
  },
  {
    id: 16,
    topic: "Security",
    score: 1,
    question: [
      `Для чего нужна подпись приложения?`
    ],
    options: [
      "Изменение дизайна",
      "Оптимизация",
      "Идентификация разработчика",
      "Смена имени"
    ],
    correct: 2,
    explanation: "Подпись подтверждает автора приложения."
  },
  {
    id: 17,
    topic: "Layouts",
    score: 1,
    question: [
      `Layout с размещением элементов в строку/столбец:`
    ],
    options: [
      "FrameLayout",
      "LinearLayout",
      "RelativeLayout",
      "TableLayout"
    ],
    correct: 1,
    explanation: "LinearLayout выстраивает элементы линейно."
  },
  {
    id: 18,
    topic: "Calendar",
    score: 1,
    question: [
      `Метод установки даты:`
    ],
    options: [
      "getDate()",
      "setDate()",
      "getMinDate()",
      "setMaxDate()"
    ],
    correct: 1,
    explanation: "setDate задает дату."
  },
  {
    id: 19,
    topic: "SQLite",
    score: 1,
    question: [
      `DROP TABLE IF EXISTS выполняет:`
    ],
    options: [
      "Создание таблицы",
      "Удаление таблицы",
      "Поиск таблицы",
      "Создание БД"
    ],
    correct: 1,
    explanation: "Удаляет таблицу, если она существует."
  },
  {
    id: 20,
    topic: "UI",
    score: 1,
    question: [
      `Toast.makeText(...) делает:`
    ],
    options: [
      "Выход",
      "Показ уведомления",
      "Запуск Activity",
      "Остановка Activity"
    ],
    correct: 1,
    explanation: "Toast показывает короткое сообщение."
  },

   {
    id: 21,
    topic: "C# / Arrays",
    score: 1,
    question: [
      `Какое действие выполняет метод Array.Sort?`
    ],
    options: [
      "Сортирует массив",
      "Удаляет массив",
      "Создает массив",
      "Копирует массив"
    ],
    correct: 0,
    explanation: "Array.Sort() выполняет сортировку элементов массива."
  },
  {
    id: 22,
    topic: "Layout",
    score: 1,
    question: [
      `Какой атрибут отвечает за ширину компонента?`
    ],
    options: [
      "layout_width",
      "layout_height",
      "gravity",
      "text"
    ],
    correct: 0,
    explanation: "layout_width задает ширину элемента."
  },
  {
    id: 23,
    topic: "JSoup",
    score: 1,
    question: [
      `Для чего используется библиотека JSoup?`
    ],
    options: [
      "Работа с БД",
      "Парсинг HTML",
      "Работа с JSON",
      "Создание UI"
    ],
    correct: 1,
    explanation: "JSoup используется для парсинга HTML-страниц."
  },
  {
    id: 24,
    topic: "WebView",
    score: 1,
    question: [
      `Какой метод загружает веб-страницу в WebView?`
    ],
    options: [
      "setText()",
      "loadUrl()",
      "reloadPage()",
      "open()"
    ],
    correct: 1,
    explanation: "loadUrl() загружает страницу по URL."
  },
  {
    id: 25,
    topic: "Java",
    score: 1,
    question: [
      `Для чего используется класс Math?`
    ],
    options: [
      "Работа с файлами",
      "Математические операции",
      "Сетевые запросы",
      "Работа с UI"
    ],
    correct: 1,
    explanation: "Math предоставляет методы для математических вычислений."
  },
  {
    id: 26,
    topic: "UI",
    score: 1,
    question: [
      `Какой компонент отображает HTML в Android?`
    ],
    options: [
      "TextView",
      "WebView",
      "EditText",
      "Button"
    ],
    correct: 1,
    explanation: "WebView используется для отображения веб-контента."
  },
  {
    id: 27,
    topic: "JDK",
    score: 1,
    question: [
      `Что включает JDK?`
    ],
    options: [
      "Только JVM",
      "Компилятор и библиотеки",
      "Только библиотеки",
      "Только компилятор"
    ],
    correct: 1,
    explanation: "JDK содержит javac и стандартные библиотеки."
  },
  {
    id: 28,
    topic: "Intent",
    score: 1,
    question: [
      `Какой метод извлекает Intent?`
    ],
    options: [
      "getIntent()",
      "setIntent()",
      "addIntent()",
      "removeIntent()"
    ],
    correct: 0,
    explanation: "getIntent() возвращает Intent текущей активности."
  },
  {
    id: 29,
    topic: "UI",
    score: 1,
    question: [
      `Компонент календаря в Android:`
    ],
    options: [
      "Button",
      "TextView",
      "CalendarView",
      "EditText"
    ],
    correct: 2,
    explanation: "CalendarView отображает календарь."
  },
  {
    id: 30,
    topic: "Operators",
    score: 1,
    question: [
      `Какой оператор возвращает остаток от деления?`
    ],
    options: [
      "%",
      "/",
      "*",
      "-"
    ],
    correct: 0,
    explanation: "% — оператор остатка."
  },
  {
    id: 31,
    topic: "Context",
    score: 1,
    question: [
      `Как получить Context приложения?`
    ],
    options: [
      "getIntent()",
      "getApplicationContext()",
      "getBase()",
      "getContext()"
    ],
    correct: 1,
    explanation: "getApplicationContext() возвращает контекст приложения."
  },
  {
    id: 32,
    topic: "Layouts",
    score: 1,
    question: [
      `Табличная верстка в Android:`
    ],
    options: [
      "LinearLayout",
      "RelativeLayout",
      "TableLayout",
      "FrameLayout"
    ],
    correct: 2,
    explanation: "TableLayout реализует табличную структуру."
  },
  {
    id: 33,
    topic: "Java",
    score: 1,
    question: [
      `Как преобразовать строку в int?`
    ],
    options: [
      "Integer.parseInt()",
      "String.toInt()",
      "parse()",
      "toInteger()"
    ],
    correct: 0,
    explanation: "Integer.parseInt() преобразует строку в int."
  },
  {
    id: 34,
    topic: "Layout",
    score: 1,
    question: [
      `Какое значение означает, что размер зависит от содержимого?`
    ],
    options: [
      "match_parent",
      "fill_parent",
      "wrap_content",
      "auto"
    ],
    correct: 2,
    explanation: "wrap_content подстраивается под содержимое."
  },
  {
    id: 35,
    topic: "UI",
    score: 1,
    question: [
      `Какой компонент отображает текст?`
    ],
    options: [
      "TextView",
      "EditText",
      "Button",
      "WebView"
    ],
    correct: 0,
    explanation: "TextView используется для вывода текста."
  },
  {
    id: 36,
    topic: "Java",
    score: 1,
    question: [
      `Double.valueOf(editText.getText().toString()) делает:`
    ],
    options: [
      "Преобразует текст в число double",
      "Создает строку",
      "Удаляет значение",
      "Копирует значение"
    ],
    correct: 0,
    explanation: "Метод преобразует строку в double."
  },
  {
    id: 37,
    topic: "Resources",
    score: 1,
    question: [
      `Где находятся layout-файлы?`
    ],
    options: [
      "/res/layout",
      "/res/drawable",
      "/res/values",
      "/src"
    ],
    correct: 0,
    explanation: "XML разметка хранится в /res/layout."
  },
  {
    id: 38,
    topic: "Java",
    score: 1,
    question: [
      `Метод toString() используется для:`
    ],
    options: [
      "Преобразования в строку",
      "Сравнения строк",
      "Удаления строки",
      "Копирования строки"
    ],
    correct: 0,
    explanation: "toString возвращает строковое представление объекта."
  },
  {
    id: 39,
    topic: "Database",
    score: 1,
    question: [
      `Какая БД используется в Android?`
    ],
    options: [
      "Oracle",
      "SQLite",
      "MySQL",
      "PostgreSQL"
    ],
    correct: 1,
    explanation: "Android использует встроенную SQLite."
  },
  {
    id: 40,
    topic: "AVD",
    score: 1,
    question: [
      `AVD расшифровывается как:`
    ],
    options: [
      "Android Virtual Device",
      "Application Virtual Device",
      "Active Virtual Device",
      "Android Visual Device"
    ],
    correct: 0,
    explanation: "AVD — это эмулятор Android-устройства."
  },

  {
    id: 41,
    topic: "UI",
    score: 1,
    question: [
      `Какой компонент используется для построения списка?`
    ],
    options: [
      "ListView",
      "TextView",
      "EditText",
      "CalendarView"
    ],
    correct: 0,
    explanation: "ListView используется для отображения списков."
  },
  {
    id: 42,
    topic: "Java",
    score: 1,
    question: [
      `Что такое package в Java?`
    ],
    options: [
      "Файл",
      "Класс",
      "Объединение классов",
      "Метод"
    ],
    correct: 2,
    explanation: "Package — это пространство имен для группировки классов."
  },
  {
    id: 43,
    topic: "JSON",
    score: 1,
    question: [
      `_root = new JSONObject(json); выполняет:`
    ],
    options: [
      "Создание JSON-объекта",
      "Удаление JSON",
      "Чтение файла",
      "Запрос к БД"
    ],
    correct: 0,
    explanation: "Создается объект JSONObject из строки."
  },
  {
    id: 44,
    topic: "Java",
    score: 1,
    question: [
      `Что означают NaN и Infinity?`
    ],
    options: [
      "NaN — не число, Infinity — бесконечность",
      "NaN — ошибка, Infinity — число",
      "NaN — бесконечность, Infinity — ошибка",
      "Оба — ошибки"
    ],
    correct: 0,
    explanation: "NaN — Not a Number, Infinity — бесконечность."
  },
  {
    id: 45,
    topic: "Intent",
    score: 1,
    question: [
      `startActivity(Intent.createChooser(...)) выполняет:`
    ],
    options: [
      "Удаление данных",
      "Запуск Activity",
      "Остановку Activity",
      "Закрытие приложения"
    ],
    correct: 1,
    explanation: "Метод запускает новую активность."
  },
  {
    id: 46,
    topic: "UI",
    score: 1,
    question: [
      `Компонент выпадающего списка:`
    ],
    options: [
      "Spinner",
      "Button",
      "TextView",
      "WebView"
    ],
    correct: 0,
    explanation: "Spinner реализует dropdown-список."
  },
  {
    id: 47,
    topic: "Math",
    score: 1,
    question: [
      `Math.random() возвращает:`
    ],
    options: [
      "[0;1)",
      "[0;10]",
      "(0;1]",
      "[1;9]"
    ],
    correct: 0,
    explanation: "Возвращает число в диапазоне [0;1)."
  },
  {
    id: 48,
    topic: "Context",
    score: 1,
    question: [
      `Что такое Context в Android?`
    ],
    options: [
      "Логгер",
      "Доступ к ресурсам и системе",
      "UI-компонент",
      "Поток"
    ],
    correct: 1,
    explanation: "Context дает доступ к ресурсам и системным сервисам."
  },
  {
    id: 49,
    topic: "UI",
    score: 1,
    question: [
      `textView.setText(String.valueOf(c)) выполняет:`
    ],
    options: [
      "Удаление текста",
      "Вывод числа как строки",
      "Создание текста",
      "Очистку UI"
    ],
    correct: 1,
    explanation: "Число преобразуется в строку и выводится."
  },
  {
    id: 50,
    topic: "JSoup",
    score: 1,
    question: [
      `import org.jsoup.Jsoup; означает:`
    ],
    options: [
      "Подключение библиотеки JSoup",
      "Удаление библиотеки",
      "Создание HTML",
      "Работа с JSON"
    ],
    correct: 0,
    explanation: "Импортируется библиотека JSoup."
  },
  {
    id: 51,
    topic: "Java",
    score: 1,
    question: [
      `Класс для изменяемой строки:`
    ],
    options: [
      "String",
      "StringBuilder",
      "CharArray",
      "Buffer"
    ],
    correct: 1,
    explanation: "StringBuilder — изменяемая строка."
  },
  {
    id: 52,
    topic: "Android",
    score: 1,
    question: [
      `Кто владеет Android?`
    ],
    options: [
      "Google",
      "Microsoft",
      "Oracle",
      "IBM"
    ],
    correct: 0,
    explanation: "Android принадлежит Google."
  },
  {
    id: 53,
    topic: "Layout",
    score: 1,
    question: [
      `Атрибут для объединения столбцов:`
    ],
    options: [
      "layout_span",
      "layout_width",
      "layout_height",
      "gravity"
    ],
    correct: 0,
    explanation: "layout_span объединяет ячейки."
  },
  {
    id: 54,
    topic: "Intent",
    score: 1,
    question: [
      `getIntent().getStringExtra(...) выполняет:`
    ],
    options: [
      "Получение строки из Intent",
      "Создание Intent",
      "Удаление данных",
      "Запуск Activity"
    ],
    correct: 0,
    explanation: "Извлекает строковый параметр."
  },
  {
    id: 55,
    topic: "Resources",
    score: 1,
    question: [
      `Где находятся строки и стили?`
    ],
    options: [
      "/res/values",
      "/res/layout",
      "/res/drawable",
      "/assets"
    ],
    correct: 0,
    explanation: "values содержит строки, стили и массивы."
  },
  {
    id: 56,
    topic: "Intent",
    score: 1,
    question: [
      `Класс для запуска Activity:`
    ],
    options: [
      "Intent",
      "Context",
      "Task",
      "Log"
    ],
    correct: 0,
    explanation: "Intent используется для перехода между Activity."
  },
  {
    id: 57,
    topic: "JRE",
    score: 1,
    question: [
      `Что включает JRE?`
    ],
    options: [
      "JVM и библиотеки",
      "Только компилятор",
      "JDK",
      "IDE"
    ],
    correct: 0,
    explanation: "JRE = JVM + стандартные библиотеки."
  },
  {
    id: 58,
    topic: "SQL",
    score: 1,
    question: [
      `SELECT * FROM table ORDER BY name выполняет:`
    ],
    options: [
      "Выбор всех данных с сортировкой",
      "Удаление данных",
      "Создание таблицы",
      "Фильтрацию"
    ],
    correct: 0,
    explanation: "Запрос выбирает все строки с сортировкой."
  },
  {
    id: 59,
    topic: "Java",
    score: 1,
    question: [
      `Как объявить строку?`
    ],
    options: [
      "String a = \"\"",
      "int a = \"\"",
      "double a = \"\"",
      "char a = \"\""
    ],
    correct: 0,
    explanation: "String — тип строк."
  },
  {
    id: 60,
    topic: "Android",
    score: 1,
    question: [
      `Где задаются характеристики виджета?`
    ],
    options: [
      "XML-файл метаданных",
      "Java-код",
      "База данных",
      "Manifest"
    ],
    correct: 0,
    explanation: "В XML задаются свойства виджетов."
  }
];
