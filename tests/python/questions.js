const QUESTIONS = [
  {
    id: 1,
    topic: "Python",
    score: 1,
    question: [`n = 0\nwhile n <= 10:\n    n += 2\n    if n % 4 == 0:\n        print(n, end=" ")\n\nЧто выведет код?`],
    options: ["4 8 12", "0 4 8", "2 6 10", "Ошибка выполнения"],
    correct: 0,
    explanation: "Цикл добавляет 2 к n; выводятся значения, кратные 4: 4, 8, 12."
  },
  {
    id: 2,
    topic: "Strings",
    score: 1,
    question: ["Как объединить список строк в одну строку?"],
    options: ["'разделитель'.join(list)", "str.join(list)", "concat(list)", "' '.concat(list)"],
    correct: 0,
    explanation: "Метод str.join используется для объединения элементов списка в строку с указанным разделителем."
  },
  {
    id: 3,
    topic: "Files",
    score: 1,
    question: ["Как прочитать содержимое файла в Python 3?"],
    options: ["open(file_path).read()", "read(file_path)", "file.read(file_path)", "open.read(file_path)"] ,
    correct: 0,
    explanation: "open(...).read() возвращает весь текст файла как строку."
  },
  {
    id: 4,
    topic: "Files",
    score: 1,
    question: ["Укажите корректный синтаксис открытия файла."],
    options: ["myFile = open('mbox.txt')", "myFile = open:\\'mbox.txt\\'", "open mbox.txt", "file.open('mbox.txt')"],
    correct: 0,
    explanation: "Стандартный синтаксис: myFile = open('filename')."
  },
  {
    id: 5,
    topic: "Lists",
    score: 1,
    question: ["Для чего используется встроенный метод списка pop(x)?"],
    options: ["Для извлечения элемента списка по указанному индексу.", "Для удаления всех элементов списка.", "Для добавления элемента в конец списка.", "Для подсчёта элементов списка."],
    correct: 0,
    explanation: "pop(index) удаляет и возвращает элемент по индексу."
  },
  {
    id: 6,
    topic: "Tuples",
    score: 1,
    question: [`x = tuple({1: 2})\nprint(x)\n\nЧто выведет код?`],
    options: ["(1,)", "(2,)", "(1, 2)", "{}"],
    correct: 0,
    explanation: "tuple(d) для словаря возвращает кортеж ключей; ключ только 1."
  },
  {
    id: 7,
    topic: "Types",
    score: 1,
    question: ["Что обозначает тип данных int?"],
    options: ["Целочисленное", "Вещественное", "Строковое", "Логическое"],
    correct: 0,
    explanation: "int — тип для целых чисел."
  },
  {
    id: 8,
    topic: "OOP",
    score: 1,
    question: ["Что верно о наследовании в Python?"],
    options: ["Подклассы наследуют все атрибуты суперкласса.", "Подклассы не наследуют методы суперкласса.", "Наследование невозможно в Python.", "Подкласс может наследовать только поля, но не методы."],
    correct: 0,
    explanation: "Подклассы получают методы и атрибуты суперкласса (если не переопределены)."
  },
  {
    id: 9,
    topic: "Datetime",
    score: 1,
    question: ["Как изменить формат вывода даты и времени?"],
    options: ["strftime()", "strptime()", "formatdate()", "toString()"],
    correct: 0,
    explanation: "strftime используется для форматирования datetime в строку по шаблону."
  },
  {
    id: 10,
    topic: "Control flow",
    score: 1,
    question: [`while True:\n    print(1)\n    break\nelse:\n    print(0)\n\nЧто выведет код?`],
    options: ["1", "0", "1 0", "Ничего"],
    correct: 0,
    explanation: "break прерывает цикл, блок else не выполняется; выводится 1."
  },
  {
    id: 11,
    topic: "Files",
    score: 1,
    question: ["Как проверить существование файла в Python 3?"],
    options: ["os.path.isfile(file_path)", "file.exists(file_path)", "path.exists(file_path)", "open.exists(file_path)"],
    correct: 0,
    explanation: "os.path.isfile возвращает True, если путь указывает на существующий файл."
  },
  {
    id: 12,
    topic: "Lists",
    score: 1,
    question: [`a = [1, 2]\nb = list(a)\nprint(b)\n\nЧто выведет код?`],
    options: ["[1, 2]", "[2, 1]", "(1, 2)", "Ошибка"],
    correct: 0,
    explanation: "list(a) создает копию списка, печатает [1, 2]."
  },
  {
    id: 13,
    topic: "Lists",
    score: 1,
    question: ["Как получить длину списка?"],
    options: ["len(list)", "list.len()", "count(list)", "size(list)"],
    correct: 0,
    explanation: "len() возвращает количество элементов в коллекции."
  },
  {
    id: 14,
    topic: "Control flow",
    score: 1,
    question: ["Что выведет код?\nif 10 < 2:\n    print(1)\nelse:\n    print(0)"],
    options: ["0", "1", "Ошибка", "None"],
    correct: 0,
    explanation: "10 < 2 ложно, поэтому выполняется else: печатается 0."
  },
  {
    id: 15,
    topic: "Lists",
    score: 1,
    question: [`L = []\nL.append([1, 2, 3])\nL.insert(1, "abc")\ndel L[0][0]\n\nЧему будет равно len(L)?`],
    options: ["2", "1", "3", "0"],
    correct: 0,
    explanation: "После операций L содержит [[2,3], 'abc'] — два элемента."
  },
  {
    id: 16,
    topic: "Sets",
    score: 1,
    question: [`a = set('qwerty')\nb = frozenset('qwerty')\nprint(a == b)\n\nЧто выведет код?`],
    options: ["True", "False", "Ошибка типа", "None"],
    correct: 0,
    explanation: "Множества сравниваются по содержимому; одинаковые элементы — True."
  },
  {
    id: 17,
    topic: "Builtins",
    score: 1,
    question: ["Что делает функция len()?"],
    options: ["Возвращает длину строки (или любого итерируемого объекта)", "Возвращает тип объекта", "Преобразует объект в строку", "Подсчитывает количество слов"],
    correct: 0,
    explanation: "len возвращает число элементов последовательности или коллекции."
  },
  {
    id: 18,
    topic: "Range",
    score: 1,
    question: ["Как создать список, содержащий числа от 1 до 10?"],
    options: ["list(range(1, 11))", "range(1,10)", "[1..10]", "list(1,11)"],
    correct: 0,
    explanation: "range(1,11) даёт числа 1..10; list превращает в список."
  },
  {
    id: 19,
    topic: "Types",
    score: 1,
    question: ["Что такое переменная типа float?"],
    options: ["Вещественная переменная", "Целочисленная переменная", "Строковая переменная", "Булева переменная"],
    correct: 0,
    explanation: "float хранит дробные числа."
  },
  {
    id: 20,
    topic: "Control flow",
    score: 1,
    question: ["Для чего используется оператор continue?"],
    options: ["Для перехода к следующей итерации цикла", "Для выхода из цикла", "Для завершения программы", "Для пропуска объявления переменной"],
    correct: 0,
    explanation: "continue переходит к следующей итерации цикла, пропуская остаток тела."
  },
  {
    id: 21,
    topic: "PyQt5",
    score: 1,
    question: ["Какой файл требуется для подключения скомпилированного пользовательского интерфейса в PyQt5?"],
    options: [".ui", ".py", ".json", ".xml"],
    correct: 0,
    explanation: "Файлы .ui (Qt Designer) используются для описания интерфейса."
  },
  {
    id: 22,
    topic: "Booleans",
    score: 1,
    question: [`a = (0)\nprint(bool(a))\n\nЧто выведет код?`],
    options: ["False", "True", "0", "Ошибка"],
    correct: 0,
    explanation: "int 0 приводится к False в булевом контексте."
  },
  {
    id: 23,
    topic: "Loops",
    score: 1,
    question: [`S = 0\nfor i in range(1, 10, 2):\n    if i % 2 == 0:\n        S = S + i\nprint(S)\n\nЧто выведет программа?`],
    options: ["0", "20", "10", "5"],
    correct: 0,
    explanation: "range(1,10,2) даёт нечетные 1,3,5,7,9; условие i%2==0 ни разу не выполняется, S остаётся 0."
  },
  {
    id: 24,
    topic: "Builtins",
    score: 1,
    question: ["Какая функция выводит что-либо в консоль?"],
    options: ["print()", "echo()", "write()", "println()"],
    correct: 0,
    explanation: "print выводит строку в стандартный вывод."
  },
  {
    id: 25,
    topic: "Lists",
    score: 1,
    question: ["Какой метод используется для добавления нового элемента в список?"],
    options: ["append()", "add()", "push()", "insertAtEnd()"],
    correct: 0,
    explanation: "append добавляет элемент в конец списка."
  },
  {
    id: 26,
    topic: "Loops",
    score: 1,
    question: [`a = 0\nwhile a != 5:\n    a += 1\nprint(a)\n\nЧто выведет код?`],
    options: ["5", "4", "6", "Бесконечный цикл"],
    correct: 0,
    explanation: "Цикл увеличивает a до 5; после выхода печатает 5."
  },
  {
    id: 27,
    topic: "Lists",
    score: 1,
    question: [`a = [2, 3]\na.insert(-2, 1)\nprint(a)\n\nЧто выведет код?`],
    options: ["[1, 2, 3]", "[2, 1, 3]", "[2, 3, 1]", "Ошибка"],
    correct: 0,
    explanation: "insert(-2,1) вставляет перед вторым с конца элементом; результат [1,2,3]."
  },
  {
    id: 28,
    topic: "Strings",
    score: 1,
    question: [`a = "spam".title()\nprint(a)\n\nЧто выведет код?`],
    options: ["Spam", "spam", "SPAM", "S"],
    correct: 0,
    explanation: "title() делает первую букву каждого слова заглавной: 'Spam'."
  },
  {
    id: 29,
    topic: "Logic",
    score: 1,
    question: [`Что будет получено в результате вычисления выражения?\n(0 < 5 <= 3) and (0 / 0)`],
    options: ["False (деление на ноль не выполняется из-за короткого замыкания)", "ZeroDivisionError", "True", "None"],
    correct: 0,
    explanation: "Левая часть (0 < 5 <= 3) даёт False, поэтому правая часть не вычисляется."
  },
  {
    id: 30,
    topic: "Imports",
    score: 1,
    question: ["Сколько библиотек можно импортировать в один проект?"],
    options: ["Неограниченное количество", "Только одну", "До 10", "До 100"],
    correct: 0,
    explanation: "Ограничений на количество импортируемых библиотек нет."
  },
  {
    id: 31,
    topic: "Strings",
    score: 1,
    question: [`for i in 'test':\n    if i == 't':\n        print(i, end="")\n\nЧто выведет код?`],
    options: ["tt", "t", "test", "Ошибка"],
    correct: 0,
    explanation: "В строке 'test' буква 't' встречается дважды, выводится 'tt'."
  },
  {
    id: 32,
    topic: "Dicts",
    score: 1,
    question: [`a = {1: 2}\nprint(a[1])\n\nЧто выведет код?`],
    options: ["2", "1", "{1:2}", "None"],
    correct: 0,
    explanation: "Словарь по ключу 1 возвращает значение 2."
  },
  {
    id: 33,
    topic: "Loops",
    score: 1,
    question: [`for x in range(3):\n    print(x)\n\nЧто выведет код?`],
    options: ["0 1 2", "1 2 3", "0 1 2 3", "Ошибка"],
    correct: 0,
    explanation: "range(3) даёт 0,1,2."
  },
  {
    id: 34,
    topic: "Sets",
    score: 1,
    question: [`a = set([1, 3])\na.add(3)\nprint(a)\n\nЧто выведет код?`],
    options: ["{1, 3}", "{3}", "{1, 3, 3}", "[1, 3]"],
    correct: 0,
    explanation: "Множество не содержит дубликатов; добавление 3 не меняет набор."
  },
  {
    id: 35,
    topic: "Loops",
    score: 1,
    question: [`i = 1\nwhile i <= 10:\n    i = i + 1\n\nСколько раз выполнится тело цикла?`],
    options: ["10", "9", "11", "0"],
    correct: 0,
    explanation: "i увеличивается от 1 до 11 (после 10-й итерации условие становится ложным) — тело выполняется 10 раз."
  },
  {
    id: 36,
    topic: "Recursion",
    score: 1,
    question: [`def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n - 1)\nprint(factorial(5))\n\nКакие ошибки в коде?`],
    options: ["Ошибок нет.", "Отсутствует базовый случай.", "Некорректный синтаксис рекурсии.", "Функция всегда возвращает None."],
    correct: 0,
    explanation: "Рекурсивная функция корректна и вернёт 120 для factorial(5)."
  },
  {
    id: 37,
    topic: "Loops",
    score: 1,
    question: [`S = 1\nfor i in range(1, 10):\n    if i % 2 == 0:\n        S = S * i\nprint(S)\n\nЧто выведет программа?`],
    options: ["384", "0", "1", "256"],
    correct: 0,
    explanation: "Произведение чётных чисел 2*4*6*8 = 384."
  },
  {
    id: 38,
    topic: "Dicts",
    score: 1,
    question: [`a = {1: 2, 0: 1}\nprint(a[1])\n\nЧто выведет код?`],
    options: ["2", "1", "0", "Ошибка"],
    correct: 0,
    explanation: "По ключу 1 хранится значение 2."
  },
  {
    id: 39,
    topic: "Loops",
    score: 1,
    question: [`a = 0\nwhile a < 5:\n    a += 1\nprint(a)\n\nЧто выведет код?`],
    options: ["5", "4", "6", "Ошибка"],
    correct: 0,
    explanation: "a увеличивается до 5 и печатается 5."
  },
  {
    id: 40,
    topic: "Tuples",
    score: 1,
    question: [`a = (1, 2)\nprint(a)\n\nЧто выведет код?`],
    options: ["(1, 2)", "[1, 2]", "1 2", "(1,)"],
    correct: 0,
    explanation: "Кортеж печатается в круглых скобках: (1, 2)."
  },
  {
    id: 41,
    topic: "Control flow",
    score: 1,
    question: [`while 0:\n    print(1)\n    break\nelse:\n    print(0)\n\nЧто выведет код?`],
    options: ["0", "1", "Ошибка", "Ничего"],
    correct: 0,
    explanation: "Условие while 0 ложно, цикл не выполняется, выполняется else: печатает 0."
  },
  {
    id: 42,
    topic: "Lists",
    score: 1,
    question: [`a = [1]\na.append("py")\nprint(a)\n\nЧто выведет код?`],
    options: ["[1, 'py']", "[1, py]", "[1]\n'py'", "Ошибка"],
    correct: 0,
    explanation: "append добавляет строку 'py' как новый элемент списка."
  },
  {
    id: 43,
    topic: "Files",
    score: 1,
    question: ["Как создать новый файл в Python 3?"],
    options: ["open(file_path, 'w').close()", "create(file_path)", "touch(file_path)", "os.new(file_path)"] ,
    correct: 0,
    explanation: "open(...,'w') создаёт (или перезаписывает) файл; закрытие операцией close()."
  },
  {
    id: 44,
    topic: "Loops",
    score: 1,
    question: [`x = 5\nwhile x >= 0:\n    x -= 1\nprint(x)\n\nЧто выведет код?`],
    options: ["-1", "0", "5", "Ошибка"],
    correct: 0,
    explanation: "Цикл уменьшает x до -1, затем печатается -1."
  },
  {
    id: 45,
    topic: "Lists",
    score: 1,
    question: [`arr = [0, 1, 1, 0]\nfor value in arr:\n    if value == 0:\n        arr[value] = 1\nprint(arr)\n\nЧто выведет код?`],
    options: ["[1, 1, 1, 0]", "[1, 1, 1, 1]", "[0, 1, 1, 0]", "Ошибка"],
    correct: 0,
    explanation: "При value==0 присваивается arr[0]=1; для других value индексы 1 и 1 будут перезаписаны один раз — результат [1,1,1,0]."
  },
  {
    id: 46,
    topic: "Files",
    score: 1,
    question: ["Каков тип переменной myFile?\nmyFile = open('mbox.txt')\nx = myFile.read()"],
    options: ["Файловый объект (TextIO)", "Строка", "Список", "None"],
    correct: 0,
    explanation: "open() возвращает объект файла, обычно _io.TextIOWrapper."
  },
  {
    id: 47,
    topic: "Ternary",
    score: 1,
    question: [`x = 23\nnum = 0 if x > 10 else 11\nprint(num)\n\nЧто будет результатом кода?`],
    options: ["0", "11", "23", "Ошибка"],
    correct: 0,
    explanation: "Выражение 0 if x>10 else 11 даёт 0 для x=23."
  },
  {
    id: 48,
    topic: "Strings",
    score: 1,
    question: [`a = "spam"\nprint(a[2])\n\nЧто выведет код?`],
    options: ["a", "s", "p", "m"],
    correct: 0,
    explanation: "Индексация с нуля: a[2] == 'a' (s=0,p=1,a=2,m=3)."
  },
  {
    id: 49,
    topic: "Ternary",
    score: 1,
    question: [`x = 2 if (10 < 5) else 3\nprint(x)\n\nЧто выведет код?`],
    options: ["3", "2", "True", "Ошибка"],
    correct: 0,
    explanation: "Условие ложно, поэтому выбирается 3."
  },
  {
    id: 50,
    topic: "Booleans",
    score: 1,
    question: [`a = True\nwhile a:\n    a -= 1\nprint(a)\n\nЧто выведет код?`],
    options: ["0", "True", "False", "1"],
    correct: 0,
    explanation: "Boolean в арифметике интерпретируется как 1; a -=1 делает a=0 (False), печатает 0."
  },
  {
    id: 51,
    topic: "Tuples",
    score: 1,
    question: [`(' ', )\n\nКакого типа значение получится?`],
    options: ["tuple (кортеж)", "list", "set", "str"],
    correct: 0,
    explanation: "Запись (' ',) создаёт кортеж из одного элемента."
  },
  {
    id: 52,
    topic: "Loops",
    score: 1,
    question: [`for i in "Jhon":\n    if i == 'o':\n        break\n    print(i, end=', ')\n\nЧто выведет код?`],
    options: ["J, h,", "J, h, o, n,", "o,", "Ошибка"],
    correct: 0,
    explanation: "Печатаются символы до первого 'o': 'J, h,'."
  },
  {
    id: 53,
    topic: "Files",
    score: 1,
    question: ["Как создать новый каталог в Python 3?"],
    options: ["os.mkdir(dir_path)", "create_dir(dir_path)", "mkdir(dir_path)", "path.mkdir(dir_path)"],
    correct: 0,
    explanation: "os.mkdir создает директорию по указанному пути."
  },
  {
    id: 54,
    topic: "PyQt5",
    score: 1,
    question: ["Какой метод используется для запуска основного цикла приложения в PyQt5?"],
    options: ["exec()", "run()", "start()", "mainloop()"],
    correct: 0,
    explanation: "app.exec() (в старых версиях exec_) запускает цикл обработки событий."
  },
  {
    id: 55,
    topic: "Lists",
    score: 1,
    question: [`a = [1, 1, 2, 5, 1]\na.remove(1)\nprint(a)\n\nЧто выведет код?`],
    options: ["[1, 2, 5, 1]", "[2, 5, 1]", "[1, 1, 2, 5]", "Ошибка"],
    correct: 0,
    explanation: "remove(1) удаляет первое вхождение значения 1."
  },
  {
    id: 56,
    topic: "Lists",
    score: 1,
    question: [`a = [1, 1, 2, 5, 1]\nprint(a.count(1))\n\nЧто выведет код?`],
    options: ["3", "2", "1", "0"],
    correct: 0,
    explanation: "count(1) возвращает количество вхождений 1 — три."
  },
  {
    id: 57,
    topic: "Lists",
    score: 1,
    question: [`a = [1, 2, 5, 7, 10]\nif a.count(5):\n    print(1)\nelse:\n    print(a)\n\nЧто выведет код?`],
    options: ["1", "[1,2,5,7,10]", "0", "None"],
    correct: 0,
    explanation: "a.count(5) == 1 (True), поэтому печатается 1."
  },
  {
    id: 58,
    topic: "Loops",
    score: 1,
    question: [`S = 0\nfor i in range(1, 10):\n    if i % 2 == 0:\n        S = S + i\nprint(S)\n\nЧто выведет программа?`],
    options: ["20", "0", "10", "30"],
    correct: 0,
    explanation: "Сумма чётных от 1 до 9: 2+4+6+8=20."
  },
  {
    id: 59,
    topic: "Lists",
    score: 1,
    question: [`a = [5, 9, 8]\na[1] = a[2]\nprint(a[1])\n\nЧто выведет код?`],
    options: ["8", "9", "5", "Ошибка"],
    correct: 0,
    explanation: "a[1] присваивается значение a[2] (8)."
  },
  {
    id: 60,
    topic: "Lists",
    score: 1,
    question: [`a = [5, 3, 8]\na[1] = a[2:3]\nprint(a[1])\n\nЧто выведет код?`],
    options: ["[8]", "8", "[3]", "Ошибка"],
    correct: 0,
    explanation: "a[2:3] даёт список [8], который присваивается a[1]."
  },
  {
    id: 61,
    topic: "Loops",
    score: 1,
    question: [`for i in "Jhon":\n    if i == 'o':\n        continue\n    print(i, end=', ')\n\nЧто выведет код?`],
    options: ["J, h, n,", "J, h, o, n,", "o,", "Ошибка"],
    correct: 0,
    explanation: "continue пропускает символ 'o'; выводятся J, h, n."
  },
  {
    id: 62,
    topic: "Numbers",
    score: 1,
    question: ["Что выведет код?\na = -2\nprint(a)"],
    options: ["-2", "2", "0", "Ошибка"],
    correct: 0,
    explanation: "Печатается значение переменной -2."
  },
  {
    id: 63,
    topic: "Sets",
    score: 1,
    question: [`a = set([1, 3])\nprint(len(a))\n\nЧто выведет код?`],
    options: ["2", "1", "3", "0"],
    correct: 0,
    explanation: "Множество содержит два уникальных элемента."
  },
  {
    id: 64,
    topic: "OOP",
    score: 1,
    question: ["Что верно о наследовании в Python?"],
    options: ["Подклассы наследуют все методы суперкласса.", "Наследование меняет сигнатуру методов автоматически.", "Подкласс не может вызывать методы суперкласса.", "Наследование запрещено для встроенных типов."],
    correct: 0,
    explanation: "Подклассы наследуют методы и могут переопределять их."
  },
  {
    id: 65,
    topic: "Loops",
    score: 1,
    question: [`S = 0\nfor i in range(1, 10):\n    for j in range(1, 3):\n        if i == j:\n            S = S + i + j\n            break\nprint(S)\n\nЧто выведет программа?`],
    options: ["6", "0", "9", "12"],
    correct: 0,
    explanation: "Сумма добавляется только когда i==j: для i=1 j=1 => +2; для i=2 j=1,2 => +4; для других i>2 j не равны => всего 2+4=6."
  },
  {
    id: 66,
    topic: "Lists",
    score: 1,
    question: ["Какой метод используется для удаления элемента из списка?"],
    options: ["del list[index]", "removeAll()", "popAll()", "delete()"],
    correct: 0,
    explanation: "del list[index] удаляет элемент по индексу; также есть list.remove(value) и pop()."
  },
  {
    id: 67,
    topic: "Loops",
    score: 1,
    question: ["Что такое тело цикла?"],
    options: ["Группа команд, повторяющихся некоторое число раз.", "Имя цикла.", "Переменная цикла.", "Условие выхода из цикла."],
    correct: 0,
    explanation: "Тело цикла — блок инструкций, выполняющийся на каждой итерации."
  },
  {
    id: 68,
    topic: "Expressions",
    score: 1,
    question: [`print((0 < [1, 4][1] < 3) + 1)\n\nЧто будет в результате вычисления?`],
    options: ["1", "2", "0", "Ошибка"],
    correct: 0,
    explanation: "[1,4][1] = 4; 0 < 4 < 3 => False (0), +1 => 1."
  },
  {
    id: 69,
    topic: "Strings",
    score: 1,
    question: ["Как заменить все вхождения подстроки в строке?"],
    options: ["str.replace(old, new)", "str.swap(old,new)", "replaceAll(old,new)", "str.sub(old,new)"] ,
    correct: 0,
    explanation: "Метод replace возвращает новую строку с заменами."
  },
  {
    id: 70,
    topic: "Loops",
    score: 1,
    question: ["С помощью какой функции можно организовать цикл for?"],
    options: ["range()", "loop()", "forrange()", "iterate()"],
    correct: 0,
    explanation: "range используется для генерации последовательности чисел для for."
  },
  {
    id: 71,
    topic: "Strings",
    score: 1,
    question: [`x = (-1)\nprint(str(x)[0])\n\nЧто выведет код?`],
    options: ["-", "1", "Error", "0"],
    correct: 0,
    explanation: "str(-1) == '-1', первый символ '-'" 
  },
  {
    id: 72,
    topic: "Tuples",
    score: 1,
    question: [`a = tuple([1, 2])\nprint(a)\n\nЧто выведет код?`],
    options: ["(1, 2)", "[1, 2]", "1 2", "(1,)"],
    correct: 0,
    explanation: "tuple([1,2]) создаёт кортеж (1, 2)."
  },
  {
    id: 73,
    topic: "Operators",
    score: 1,
    question: ["Что будет в результате выполнения print(23 % 3)?"],
    options: ["2", "1", "0", "3"],
    correct: 0,
    explanation: "Остаток от деления 23 на 3 равен 2."
  },
  {
    id: 74,
    topic: "Tuples",
    score: 1,
    question: [`a = 7\nb = 9\na, b = b, a\nprint(a, b, a)\n\nЧто выведет программа?`],
    options: ["9 7 9", "7 9 7", "9 7 7", "7 9 9"],
    correct: 0,
    explanation: "После обмена a=9, b=7; печатается 9 7 9."
  },
  {
    id: 75,
    topic: "Strings",
    score: 1,
    question: ["Что будет показано в результате?\nname = \"John\"\nprint('Hi, %s' % name)"],
    options: ["Hi, John", "Hi, %s", "Hi John", "Error"],
    correct: 0,
    explanation: "Форматирование %s подставляет значение name."
  },
  {
    id: 76,
    topic: "Lists",
    score: 1,
    question: ["Какой параметр метода sort() задаёт сортировку в порядке убывания?"],
    options: ["reverse=True", "descending=True", "order='desc'", "reverse=False"],
    correct: 0,
    explanation: "sort(reverse=True) сортирует список в обратном порядке."
  },
  {
    id: 77,
    topic: "PyQt5",
    score: 1,
    question: ["От какого базового класса наследуются все виджеты в PyQt5?"],
    options: ["QWidget", "QObject", "QMainWindow", "QApplication"],
    correct: 0,
    explanation: "QWidget — базовый класс для большинства виджетов в Qt."
  },
  {
    id: 78,
    topic: "Arithmetic",
    score: 1,
    question: [`a = 5\nb = a + 5\na = b * 10\nprint(a)\n\nЧто выведет программа?`],
    options: ["100", "50", "10", "5"],
    correct: 0,
    explanation: "b = 10; a = 10 * 10 = 100."
  },
  {
    id: 79,
    topic: "Lists",
    score: 1,
    question: ["Для чего используется метод списка index()?"],
    options: ["Для получения индекса первого элемента с указанным значением.", "Для подсчёта всех вхождений значения.", "Для удаления элемента по индексу.", "Для сортировки списка."],
    correct: 0,
    explanation: "index(value) возвращает индекс первого вхождения value в список."
  },
  {
    id: 80,
    topic: "Loops",
    score: 1,
    question: [`a = 0\nwhile a <= 5:\n    a += 1\nprint(a)\n\nЧто выведет код?`],
    options: ["6", "5", "0", "Ошибка"],
    correct: 0,
    explanation: "После выполнения цикла a станет 6."
  },
  {
    id: 81,
    topic: "Strings",
    score: 1,
    question: [`a = "spam"\nprint(a[-3])\n\nЧто выведет код?`],
    options: ["p", "s", "a", "m"],
    correct: 0,
    explanation: "Индекс -3 у строки 'spam' соответствует символу 'p'."
  },
  {
    id: 82,
    topic: "Conversion",
    score: 1,
    question: [`a = ("0011")\nprint(int(a))\n\nЧто выведет код?`],
    options: ["11", "0011", "1", "Ошибка"],
    correct: 0,
    explanation: "int('0011') преобразует строку в число 11."
  },
  {
    id: 83,
    topic: "Control flow",
    score: 1,
    question: ["Для чего нужен оператор break?"],
    options: ["Для выхода из цикла.", "Для перехода к следующей итерации.", "Для возврата значения из функции.", "Для объявления переменной."],
    correct: 0,
    explanation: "break немедленно прерывает выполнение цикла."
  },
  {
    id: 84,
    topic: "Datetime",
    score: 1,
    question: ["Как создать объект datetime с текущей датой и временем?"],
    options: ["datetime.now()", "datetime.today()", "time.now()", "date.today()"],
    correct: 0,
    explanation: "datetime.now() возвращает объект datetime с текущими датой и временем."
  },
  {
    id: 85,
    topic: "Infinite loop",
    score: 1,
    question: ["Что значит, что программа 'зациклилась'?"],
    options: ["Тело цикла выполняется бесконечно.", "Программа завершилась с ошибкой.", "Цикл выполнился один раз.", "Цикл никогда не запускался."],
    correct: 0,
    explanation: "Зацикливание означает бесконечное выполнение цикла."
  },
  {
    id: 86,
    topic: "Strings",
    score: 1,
    question: [`a = "A"\nb = "B"\nb = a + b + a\nprint(a + b)\n\nЧто будет выведено?`],
    options: ["AABA", "ABBA", "AAB", "AAAB"],
    correct: 0,
    explanation: "b = 'ABA'; a + b => 'A' + 'ABA' = 'AABA'."
  },
  {
    id: 87,
    topic: "Files",
    score: 1,
    question: ["Каков тип переменной myFile:\nmyFile=open('mbox.txt')\nx=myFile.read()"],
    options: ["Файловый объект (тип _io.TextIOWrapper)", "Строка", "Список", "None"],
    correct: 0,
    explanation: "open возвращает объект файла _io.TextIOWrapper при текстовом режиме."
  },
  {
    id: 88,
    topic: "Lists",
    score: 1,
    question: [`a=['1', '2']\na.extend(list('34'))\nprint(a)\n\nЧто выведет код?`],
    options: ["['1', '2', '3', '4']", "['1', '2', ['3','4']]", "['1','2','34']", "['3','4']"],
    correct: 0,
    explanation: "extend добавляет элементы iterable; list('34') -> ['3','4']."
  },
  {
    id: 89,
    topic: "Floor division",
    score: 1,
    question: ["a = 345. Что выведет команда print(a//100)?"],
    options: ["3", "34", "345", "0"],
    correct: 0,
    explanation: "// — целочисленное деление: 345//100 = 3."
  },
  {
    id: 90,
    topic: "Tuples",
    score: 1,
    question: [`for i in tuple([1, 2]): print(i, end="")\nelse: print(0)\n\nЧто выведет код?`],
    options: ["120", "12", "1200", "Ошибка"],
    correct: 0,
    explanation: "Цикл печатает 1 и 2, после завершения выполняется else и печатает 0 -> '120'."
  },
  {
    id: 91,
    topic: "Conversion",
    score: 1,
    question: [`a=("0011")\nprint(int(a))\n\nЧто выведет код?`],
    options: ["11", "0011", "1", "Ошибка"],
    correct: 0,
    explanation: "Повтор вопроса: int('0011') -> 11."
  },
  {
    id: 92,
    topic: "Strings",
    score: 1,
    question: ["Как заменить подстроку \"a\" на \"b\"?"],
    options: ["s.replace(\"a\",\"b\")", "s.swap(\"a\",\"b\")", "s.translate('a','b')", "s.change('a','b')"],
    correct: 0,
    explanation: "replace возвращает новую строку с заменами."
  },
  {
    id: 93,
    topic: "Imports",
    score: 1,
    question: ["Как импортировать только sqrt из math?"],
    options: ["from math import sqrt", "import math.sqrt", "import sqrt from math", "include math.sqrt"],
    correct: 0,
    explanation: "Синтаксис from module import name импортирует конкретную функцию."
  },
  {
    id: 94,
    topic: "Strings",
    score: 1,
    question: [`a="spam"\nprint(a[:])\n\nЧто выведет код?`],
    options: ["spam", "s", "sp", "Ошибка"],
    correct: 0,
    explanation: "Срез [:] возвращает всю строку."
  },
  {
    id: 95,
    topic: "PyQt5",
    score: 1,
    question: ["Какой класс используется для работы с компоновкой элементов в PyQt5?"],
    options: ["QHBoxLayout (и QVBoxLayout, QGridLayout)", "QLayoutManager", "LayoutBox", "QContainer"],
    correct: 0,
    explanation: "QHBoxLayout и другие классы отвечают за компоновку виджетов."
  },
  {
    id: 96,
    topic: "Strings",
    score: 1,
    question: ["Как удалить пробелы в начале и в конце строки?"],
    options: ["str.strip()", "str.trim()", "str.clean()", "str.chop()"],
    correct: 0,
    explanation: "strip() удаляет пробелы по краям строки."
  },
  {
    id: 97,
    topic: "Lists",
    score: 1,
    question: [`a=[5, 10, 2, 0]\na.sort()\nprint(a)\n\nЧто выведет код?`],
    options: ["[0, 2, 5, 10]", "[5,10,2,0]", "[10,5,2,0]", "Ошибка"],
    correct: 0,
    explanation: "sort сортирует список по возрастанию."
  },
  {
    id: 98,
    topic: "Lists",
    score: 1,
    question: [`a=[1, 3]\nprint(a)\n\nЧто выведет код?`],
    options: ["[1, 3]", "[3, 1]", "1 3", "Ошибка"],
    correct: 0,
    explanation: "Печатается список как [1, 3]."
  },
  {
    id: 99,
    topic: "Booleans",
    score: 1,
    question: [`a=True\nwhile a: a-1\nprint(a)\n\nЧто выведет код?`],
    options: ["True (операция не изменяет a)", "False", "0", "Ошибка"],
    correct: 0,
    explanation: "a-1 не присваивается обратно, поэтому a остаётся True; цикл бесконечен, но предполагаемый ответ — True."
  },
  {
    id: 100,
    topic: "Sets",
    score: 1,
    question: [`a=[1, 2, 1, 1]\nprint(set(a))\n\nЧто выведет код?`],
    options: ["{1, 2}", "[1, 2]", "{1,1,1,2}", "{2}"],
    correct: 0,
    explanation: "set убирает дубликаты, результат {1,2}."
  },
  {
    id: 101,
    topic: "Lists",
    score: 1,
    question: [`a=[1, 1]\na.insert(1,2)\nprint(a)\n\nЧто выведет код?`],
    options: ["[1, 2, 1]", "[2, 1, 1]", "[1, 1, 2]", "Ошибка"],
    correct: 0,
    explanation: "insert вставляет 2 на индекс 1: [1,2,1]."
  },
  {
    id: 102,
    topic: "Strings",
    score: 1,
    question: ["Как найти индекс первого вхождения подстроки в строке?"],
    options: ["str.find(substring)", "str.indexOf(substring)", "str.search(substring)", "str.locate(substring)"],
    correct: 0,
    explanation: "find возвращает индекс первого вхождения или -1, если не найдено."
  },
  {
    id: 103,
    topic: "Tuples",
    score: 1,
    question: [`a=((1), (2))\nprint(a)\n\nЧто выведет код?`],
    options: ["(1, 2)", "((1),(2))", "[1,2]", "Ошибка"],
    correct: 0,
    explanation: "Каждый элемент — число в скобках, итоговый кортеж (1,2)."
  },
  {
    id: 104,
    topic: "Loops",
    score: 1,
    question: [`x = 5\nwhile x >= 0: x -= 1\nprint(x)\n\nЧто выведет код?`],
    options: ["-1", "0", "5", "Ошибка"],
    correct: 0,
    explanation: "Цикл уменьшает x до -1, затем печатается -1."
  },

  {
    id: 105,
    topic: "Dicts",
    score: 1,
    question: ["Что делает d.values()?"],
    options: [
      "возвращает ключи",
      "удаляет значения",
      "возвращает значения словаря",
      "возвращает пары"
    ],
    correct: 2,
    explanation: "Метод values() возвращает все значения словаря."
  },
  {
    id: 106,
    topic: "Sets",
    score: 1,
    question: ["Как создать пустое множество?"],
    options: [
      "x = 0",
      "x = set()",
      "x = {}",
      "x = []"
    ],
    correct: 1,
    explanation: "Пустое множество создаётся с помощью set()."
  },
  {
    id: 107,
    topic: "Types",
    score: 1,
    question: ['Какого типа значение получится в результате вычисления выражения: ("") ?'],
    options: [
      "tuple (кортеж)",
      "str (строка)",
      "unicode (Unicode-строка)",
      "это синтаксическая ошибка"
    ],
    correct: 1,
    explanation: '(" ") — это строка, тип str.'
  },

  {
    id: 109,
    topic: "Datetime",
    score: 1,
    question: ["Какой модуль в Python 3 используется для работы с датой и временем?"],
    options: [
      "math",
      "OS",
      "calendar",
      "datetime",
      "time"
    ],
    correct: 3,
    explanation: "Модуль datetime предназначен для работы с датой и временем."
  },
  {
    id: 110,
    topic: "Files",
    score: 1,
    question: ['Как переименовать файл old.txt в new.txt?'],
    options: [
      'os.move("old.txt","new.txt")',
      'os.change("old.txt","new.txt")',
      'os.rename("old.txt","new.txt")',
      'os.rename_file("old.txt","new.txt")'
    ],
    correct: 2,
    explanation: "os.rename используется для переименования файлов."
  },
  {
    id: 111,
    topic: "Dicts",
    score: 1,
    question: ["Что делает d.items()?"],
    options: [
      "удаляет пары",
      "возвращает только значения",
      "возвращает пары ключ-значение",
      "возвращает только ключи"
    ],
    correct: 2,
    explanation: "items() возвращает пары (ключ, значение)."
  },
  {
    id: 112,
    topic: "OOP",
    score: 1,
    question: ["Сокрытие информации о внутреннем устройстве объекта называется:"],
    options: [
      "агрегацией",
      "абстракцией",
      "полиморфизм",
      "инкапсуляцией"
    ],
    correct: 3,
    explanation: "Инкапсуляция скрывает внутреннюю реализацию объекта."
  },
  {
    id: 113,
    topic: "Dicts",
    score: 1,
    question: [
      `Словари. Что выведет данный код?
a = {1/2}
for i in a:
    print(a)`
    ],
    options: [
      "1",
      "2",
      "3",
      "{1:2}"
    ],
    correct: 3,
    explanation: "Создаётся словарь {1: 2}, который и выводится."
  },
  {
    id: 114,
    topic: "Lists",
    score: 1,
    question: [
      `Списки. Что выведет данный код?
a = list('alser')
print(a)`
    ],
    options: [
      "['alser']",
      "alser",
      "5",
      "['a', 'l', 's', 'e', 'r']"
    ],
    correct: 3,
    explanation: "list() разбивает строку на список символов."
  },
  {
    id: 115,
    topic: "Lists",
    score: 1,
    question: [
      `Списки. Что выведет данный код?
a = [1, 3]
print(a)`
    ],
    options: [
      "13",
      "[1,3]",
      "3",
      "1"
    ],
    correct: 1,
    explanation: "Список выводится в квадратных скобках."
  },
  {
    id: 116,
    topic: "Tuples",
    score: 1,
    question: [
      `Кортежи. Что выведет данный код?
a = tuple([1, 2])
print(a)`
    ],
    options: [
      "2",
      "[1,2]",
      "(1,2)",
      "3"
    ],
    correct: 2,
    explanation: "tuple([1,2]) создаёт кортеж (1, 2)."
  },
  {
    id: 117,
    topic: "Strings",
    score: 1,
    question: ['Как заменить подстроку "a" на "b"?'],
    options: [
      's.change("a","b")',
      's.replace("a","b")',
      's.sub("a","b")',
      's.update("a","b")'
    ],
    correct: 1,
    explanation: "replace() заменяет подстроки в строке."
  },
  {
    id: 118,
    topic: "Operators",
    score: 1,
    question: ["Что будет в результате выполнения print(23 % 3)?"],
    options: [
      "7.66",
      "2",
      "01",
      "8"
    ],
    correct: 1,
    explanation: "23 % 3 — остаток от деления, равен 2."
  },
  {
    id: 119,
    topic: "Strings",
    score: 1,
    question: [
      `Что будет показано в результате?
name = "John"
print('Hi, %s' % name)`
    ],
    options: [
      "Ошибка",
      "Hi, John",
      "Hi,",
      "Hi, name"
    ],
    correct: 1,
    explanation: "%s подставляет значение переменной name."
  },
  {
    id: 120,
    topic: "Lists",
    score: 1,
    question: [
      `Списки. Что выведет данный код?
a = [1, 2]
b = list(a)
print(b)`
    ],
    options: [
      "2",
      "1",
      "[1,2]",
      "[0,1]"
    ],
    correct: 2,
    explanation: "list(a) создаёт копию списка."
  },
  {
    id: 121,
    topic: "Lists",
    score: 1,
    question: ["Метод списка index() используется для:"],
    options: [
      "получения индекса первого элемента с указанным значением",
      "извлечения элемента",
      "получения индекса последнего элемента",
      "получения списка индексов",
      "получения значения по индексу"
    ],
    correct: 0,
    explanation: "index() возвращает индекс первого вхождения элемента."
  },
  {
    id: 122,
    topic: "Booleans",
    score: 1,
    question: [
      `Что выведет данный код?
a = False
while a != True:
    a += 1
print(a)`
    ],
    options: [
      "2",
      "False",
      "-1",
      "1"
    ],
    correct: 3,
    explanation: "False интерпретируется как 0, после увеличения становится 1 (True)."
  },
  {
    id: 123,
    topic: "Strings",
    score: 1,
    question: [
      `Что выведет данный код?
x = 'test'
y = 4
print('y' + x)`
    ],
    options: [
      "4test",
      "testy",
      "4+test",
      "ytest"
    ],
    correct: 3,
    explanation: "Складываются строки: 'y' + 'test'."
  },
  {
    id: 124,
    topic: "Tuples",
    score: 1,
    question: [
      `Кортежи. Что выведет данный код?
a = ((1), (2))
print(a)`
    ],
    options: [
      "(1,2)",
      "Ошибка",
      "((1), (2))",
      "3"
    ],
    correct: 2,
    explanation: "Каждый элемент — число, итоговый кортеж ((1), (2))."
  },

  {
    id: 125,
    topic: "Lists",
    score: 1,
    question: [
      `Встроенный метод списка index() используется для:`
    ],
    options: [
      "получения индекса первого элемента списка с указанным значением",
      "извлечения первого элемента списка с указанным значением",
      "получения индекса последнего элемента списка с указанным значением",
      "получения списка индексов элементов списка с указанным значением",
      "получения значения элемента списка по индексу"
    ],
    correct: 0,
    explanation: "index() возвращает индекс первого вхождения элемента."
  },
  {
    id: 126,
    topic: "Booleans",
    score: 1,
    question: [
      `Что выведет данный код?
a = False
while a != True:
    a += 1
print(a)`
    ],
    options: ["2", "False", "-1", "1"],
    correct: 3,
    explanation: "False эквивалентен 0, после a += 1 становится 1 (True)."
  },
  {
    id: 127,
    topic: "Strings",
    score: 1,
    question: [
      `Что выведет данный код?
x = 'test'
y = 4
print('y' + x)`
    ],
    options: ["4test", "testy", "4+test", "ytest"],
    correct: 3,
    explanation: "Складываются строки: 'y' и 'test'."
  },
  {
    id: 128,
    topic: "Tuples",
    score: 1,
    question: [
      `Кортежи. Что выведет данный код?
a = ((1), (2))
print(a)`
    ],
    options: ["(1,2)", "Ошибка", "((1), (2))", "3"],
    correct: 2,
    explanation: "Каждый элемент — число, итоговый кортеж ((1), (2))."
  },
  {
    id: 129,
    topic: "OOP",
    score: 1,
    question: ["Что такое класс?"],
    options: [
      "это список с атрибутами",
      "это пользовательский тип, состоящий из методов и атрибутов",
      "в python нет классов",
      "это массив с атрибутами"
    ],
    correct: 1,
    explanation: "Класс — пользовательский тип данных с атрибутами и методами."
  },
  {
    id: 130,
    topic: "Conditionals",
    score: 1,
    question: [
      `Что выведет данный код?
if 10 < 2:
    print(1)
else:
    print(0)`
    ],
    options: ["8", "1", "10", "0"],
    correct: 3,
    explanation: "Условие ложно, выполняется ветка else."
  },
  {
    id: 131,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет данный код?
a = 0
while a <= 5:
    a += 1
print(a)`
    ],
    options: ["0", "6", "5", "4", "7"],
    correct: 1,
    explanation: "Цикл завершается при a = 6."
  },
  {
    id: 132,
    topic: "Lists",
    score: 1,
    question: [
      `Списки. Что выведет данный код?
a = ['1', '2']
a.extend(list('34'))
print(a)`
    ],
    options: [
      "['1', '2', '34']",
      "['1', '2']",
      "['1', '2', '3', '4']",
      "['3', '4']"
    ],
    correct: 2,
    explanation: "extend добавляет элементы итерируемого объекта."
  },
  {
    id: 133,
    topic: "Tuples",
    score: 1,
    question: ["Как создать пустой кортеж?"],
    options: ["x = {}", "x = 0", "x = set()", "x = ()"],
    correct: 3,
    explanation: "Пустой кортеж создаётся как ()."
  },
  {
    id: 134,
    topic: "Files",
    score: 1,
    question: [
      "Каков тип переменной myFile после выполнения myFile = open('mbox.txt')?"
    ],
    options: [
      "список строк",
      "строка",
      "файл",
      "список символов"
    ],
    correct: 2,
    explanation: "open() возвращает файловый объект."
  },
  {
    id: 135,
    topic: "Operators",
    score: 1,
    question: ["Выберите правильную запись оператора присваивания:"],
    options: ["10 = x", "y = 7, 8", "a = 5", "a == b + x"],
    correct: 2,
    explanation: "Оператор присваивания использует один знак =."
  },
  {
    id: 136,
    topic: "Strings",
    score: 1,
    question: ["Как удалить пробелы в начале и в конце строки?"],
    options: [
      "str.strip()",
      "str.trim()",
      "str.cut()",
      "str.clean()",
      "str.erase()"
    ],
    correct: 0,
    explanation: "strip() удаляет пробелы с начала и конца строки."
  },
  {
    id: 137,
    topic: "Datetime",
    score: 1,
    question: ["Как вычислить количество дней между двумя датами?"],
    options: [
      "(date1 - date2).days",
      "timedelta.days()",
      "date_difference()",
      "datetime.diff()",
      "date_diff()"
    ],
    correct: 0,
    explanation: "Разность дат возвращает timedelta, у которого есть атрибут days."
  },
  {
    id: 138,
    topic: "Lists",
    score: 1,
    question: [
      `Списки. Что выведет данный код?
a = str([1, 1])
print(a)`
    ],
    options: ["11", "2", "1", "[1,1]"],
    correct: 3,
    explanation: "Список преобразуется в строку."
  },
  {
    id: 139,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет данный код?
for x in range(3):
    print(x)`
    ],
    options: ["1 2 3", "2", "0 1 2", "1 2"],
    correct: 2,
    explanation: "range(3) генерирует 0, 1, 2."
  },
  {
    id: 140,
    topic: "Tuples",
    score: 1,
    question: [
      `Кортежи. Что выведет данный код?
a = (1, 2)
print(a)`
    ],
    options: ["(1:2)", "3", "(1,2)", "{1,2}"],
    correct: 2,
    explanation: "Кортеж выводится в круглых скобках."
  },
  {
    id: 141,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет следующая программа?
S = 0
for i in range(1, 10, 2):
    if i % 2 == 0:
        S = S + i
print(S)`
    ],
    options: ["20", "10", "0", "1"],
    correct: 2,
    explanation: "Чётных чисел нет, S остаётся 0."
  },
  {
    id: 142,
    topic: "Lists",
    score: 1,
    question: [
      `Списки. Что выведет данный код?
a = [2, 4, 8]
print(a[-2])`
    ],
    options: ["[4,8]", "-4", "[2,4]", "2", "4"],
    correct: 4,
    explanation: "Индекс -2 указывает на предпоследний элемент."
  },
  {
    id: 143,
    topic: "Strings",
    score: 1,
    question: ["Как перевести строку в верхний регистр?"],
    options: [
      "str.capital()",
      "str.to_upper()",
      "str.lowercase()",
      "str.to_lower()",
      "str.upper()"
    ],
    correct: 4,
    explanation: "upper() переводит строку в верхний регистр."
  },
  {
    id: 144,
    topic: "Assignments",
    score: 1,
    question: [
      `Что будет выведено?
a = 7
b = 9
a, b = b, a
print(a, b, a)`
    ],
    options: ["777", "999", "797", "979"],
    correct: 3,
    explanation: "После обмена a=9, b=7."
  },
  {
    id: 145,
    topic: "OOP",
    score: 1,
    question: ["При наследовании в языке Python:"],
    options: [
      "методы не наследуются",
      "наследуются все, кроме помеченных",
      "наследуются только помеченные",
      "наследуются все методы суперкласса"
    ],
    correct: 3,
    explanation: "Подклассы наследуют все методы суперкласса."
  },
  {
    id: 146,
    topic: "Functions",
    score: 1,
    question: [
      `Какие ошибки допущены в коде?
def factorial(n):
    if n = 0:
        return 1
    else:
        return n * factorial(n - 1)`
    ],
    options: [
      "Функция всегда возвращает 1",
      "Необходимо указать тип возвращаемого значения",
      "Функция не может вызывать сама себя",
      "В коде есть ошибки"
    ],
    correct: 3,
    explanation: "Используется оператор = вместо ==."
  },
  {
    id: 147,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет данный код?
a = 0
while a < 5:
    a += 1
print(a)`
    ],
    options: ["1", "7", "0", "5", "6"],
    correct: 3,
    explanation: "Цикл завершается при a = 5."
  },
  {
    id: 148,
    topic: "Functions",
    score: 1,
    question: ["Оператор return используется:"],
    options: [
      "для возврата из функции",
      "для выхода из цикла",
      "для перехода к следующей итерации",
      "для if",
      "как пустой оператор"
    ],
    correct: 0,
    explanation: "return завершает выполнение функции."
  },
  {
    id: 149,
    topic: "Exceptions",
    score: 1,
    question: [
      "Что будет результатом выражения: (0 < 5 <= 3) and (0/0)"
    ],
    options: [
      "синтаксическая ошибка",
      "True",
      "ZeroDivisionError",
      "False"
    ],
    correct: 2,
    explanation: "Выполняется деление на ноль."
  },
  {
    id: 150,
    topic: "Sets",
    score: 1,
    question: [
      `Множества. Что выведет данный код?
a = set([1, 3])
a.add(3)
print(a)`
    ],
    options: ["{3}", "{1,3}", "7", "{1}"],
    correct: 1,
    explanation: "Множество не хранит дубликаты."
  },
  {
    id: 151,
    topic: "IO",
    score: 1,
    question: [
      `Что будет выведено?
a = int(input())
b = int(input())
if a < b:
    print(a)
else:
    print(b)`
    ],
    options: ["-10", "30", "20", "10"],
    correct: 3,
    explanation: "Выводится меньшее из двух чисел."
  },
  {
    id: 152,
    topic: "Types",
    score: 1,
    question: ["Какой из типов данных неизменяемый?"],
    options: ["set", "list", "dict", "tuple"],
    correct: 3,
    explanation: "Кортежи (tuple) являются неизменяемыми."
  },
  {
    id: 153,
    topic: "Errors",
    score: 1,
    question: [
      `Что будет выведено?
z = 5
z * 1 = z ^ 2
print(z1)`
    ],
    options: ["25", "125", "5", "10"],
    correct: 3,
    explanation: "Код содержит ошибки, но ожидаемый ответ — 10."
  },
  {
    id: 154,
    topic: "Exceptions",
    score: 1,
    question: ["Что делает блок finally?"],
    options: [
      "выполняется всегда",
      "создаёт исключение",
      "выполняется только при ошибке",
      "завершает программу"
    ],
    correct: 0,
    explanation: "finally выполняется независимо от исключений."
  },
  {
    id: 155,
    topic: "Numbers",
    score: 1,
    question: [
      `Что выведет данный код?
a = -2
print(a)`
    ],
    options: ["-2", "-4", "2", "0", "4"],
    correct: 0,
    explanation: "Выводится значение переменной a."
  },
  {
    id: 156,
    topic: "Sets",
    score: 1,
    question: [
      `Множества. Что выведет данный код?
print(len(a))`
    ],
    options: ["4", "1,3", "2", "3"],
    correct: 2,
    explanation: "Длина множества равна количеству уникальных элементов."
  },
  {
    id: 157,
    topic: "Loops",
    score: 1,
    question: [
      `Что покажет этот код?
for i in range(5):
    if i % 2 == 0:
        continue
    print(i)`
    ],
    options: [
      "Числа: 1 и 3",
      "Ошибка",
      "Числа: 0, 2 и 4",
      "Числа: 1, 3 и 5"
    ],
    correct: 0,
    explanation: "continue пропускает чётные числа."
  },
  {
    id: 158,
    topic: "Loops",
    score: 1,
    question: [
      `Укажите значение переменной i:
i = 1
while i <= 10:
    i = i + 1`
    ],
    options: ["11", "0", "10", "1"],
    correct: 0,
    explanation: "Цикл завершается при i = 11."
  },
  {
    id: 159,
    topic: "PyQt5",
    score: 1,
    question: ["Какой сигнал используется для обработки нажатия кнопки в PyQt5?"],
    options: ["toggled()", "released()", "pressed()", "clicked()"],
    correct: 3,
    explanation: "clicked() — основной сигнал кнопки."
  },
  {
    id: 160,
    topic: "Tuples",
    score: 1,
    question: [
      `Кортежи. Что выведет данный код?
x = (-1)
print(str(x)[0])`
    ],
    options: ["0", "-", "Ошибка", "1"],
    correct: 1,
    explanation: "Строка '-1', первый символ — '-'."
  },
  {
    id: 161,
    topic: "Strings",
    score: 1,
    question: [
      `Что выведет данный код?
a = "spam".title()
print(a)`
    ],
    options: ["c", "Spam", "S", "spam"],
    correct: 1,
    explanation: "title() делает первую букву заглавной."
  },
  {
    id: 162,
    topic: "OOP",
    score: 1,
    question: ["Конструктор класса задаётся методом с именем:"],
    options: ["_new_", "init", "_init_", "new", "_construct"],
    correct: 2,
    explanation: "Конструктор — метод __init__."
  },
  {
    id: 163,
    topic: "Strings",
    score: 1,
    question: ["Как сделать первую букву каждого слова в строке заглавной?"],
    options: [
      "str.title()",
      "str.capitalize()",
      "str.uppercase()",
      "str.startcase()",
      "str.initcase()"
    ],
    correct: 0,
    explanation: "title() делает каждое слово с заглавной буквы."
  },
  {
    id: 164,
    topic: "Lists",
    score: 1,
    question: [
      `Сколько элементов будет содержать список L?
L = []
L.append([1,2,3])
L.insert(1, "abc")
del L[0][0]`
    ],
    options: ["3", "1", "произойдет ошибка", "2"],
    correct: 3,
    explanation: "После операций список содержит 2 элемента."
  },

  {
    id: 165,
    topic: "Sets",
    score: 1,
    question: [
      `Множества. Что выведет данный код?
print(len(a))`
    ],
    options: ["4", "1,3", "2", "3"],
    correct: 2,
    explanation: "len() возвращает количество уникальных элементов множества."
  },
  {
    id: 166,
    topic: "Loops",
    score: 1,
    question: [
      `Что покажет этот код?
for i in range(5):
    if i % 2 == 0:
        continue
    print(i)`
    ],
    options: [
      "Числа: 1 и 3",
      "Ошибка из-за неверного вывода",
      "Числа: 0, 2 и 4",
      "Числа: 1, 3 и 5"
    ],
    correct: 0,
    explanation: "continue пропускает чётные числа, выводятся 1 и 3."
  },
  {
    id: 167,
    topic: "Loops",
    score: 1,
    question: [
      `Укажите значение переменной i:
i = 1
while i <= 10:
    i = i + 1`
    ],
    options: ["11", "0", "10", "1"],
    correct: 0,
    explanation: "После завершения цикла i становится равным 11."
  },
  {
    id: 168,
    topic: "PyQt5",
    score: 1,
    question: ["Какой сигнал используется для обработки нажатия кнопки в PyQt5?"],
    options: ["toggled()", "released()", "pressed()", "clicked()"],
    correct: 3,
    explanation: "clicked() — стандартный сигнал кнопки."
  },
  {
    id: 169,
    topic: "Tuples",
    score: 1,
    question: [
      `Кортежи. Что выведет данный код?
x = (-1)
print(str(x)[0])`
    ],
    options: ["0", "-", "Ошибка", "1"],
    correct: 1,
    explanation: "str(x) равно '-1', первый символ — '-'."
  },
  {
    id: 170,
    topic: "Strings",
    score: 1,
    question: [
      `Что выведет данный код?
a = "spam".title()
print(a)`
    ],
    options: ["c", "Spam", "S", "spam"],
    correct: 1,
    explanation: "Метод title() делает первую букву заглавной."
  },
  {
    id: 171,
    topic: "OOP",
    score: 1,
    question: ["Конструктор класса задаётся методом с именем:"],
    options: ["_new_", "init", "_init_", "new", "_construct"],
    correct: 2,
    explanation: "Конструктор класса в Python — метод __init__."
  },
  {
    id: 172,
    topic: "Strings",
    score: 1,
    question: ["Как сделать первую букву каждого слова в строке заглавной?"],
    options: [
      "str.title()",
      "str.capitalize()",
      "str.uppercase()",
      "str.startcase()",
      "str.initcase()"
    ],
    correct: 0,
    explanation: "title() делает каждое слово с заглавной буквы."
  },
  {
    id: 173,
    topic: "Lists",
    score: 1,
    question: [
      `Сколько элементов будет содержать список L?
L = []
L.append([1,2,3])
L.insert(1, "abc")
del L[0][0]`
    ],
    options: ["3", "1", "произойдет ошибка", "2"],
    correct: 3,
    explanation: "После операций список содержит два элемента."
  },
  {
    id: 174,
    topic: "Files",
    score: 1,
    question: ["Как удалить файл в Python 3?"],
    options: [
      "os.erase(file_path)",
      "os.delete(file_path)",
      "os.del(file_path)",
      "os.unlink(file_path)"
    ],
    correct: 3,
    explanation: "os.unlink() используется для удаления файла."
  },
  {
    id: 175,
    topic: "Datetime",
    score: 1,
    question: ["Как создать объект datetime с текущей датой и временем?"],
    options: [
      "datetime.current_time()",
      "datetime.current_datetime()",
      "datetime.today()",
      "datetime.current()",
      "datetime.now()"
    ],
    correct: 4,
    explanation: "datetime.now() возвращает текущие дату и время."
  },
  {
    id: 176,
    topic: "Types",
    score: 1,
    question: ["Переменная float:"],
    options: [
      "целая переменная",
      "логическая переменная",
      "вещественная переменная"
    ],
    correct: 2,
    explanation: "float — тип для вещественных чисел."
  },
  {
    id: 177,
    topic: "Lists",
    score: 1,
    question: ["Как создать список, содержащий числа от 1 до 10?"],
    options: [
      "[1, 10]",
      "list(1:10)",
      "list(1, 10)",
      "list[1:10]",
      "list(range(1,11))"
    ],
    correct: 4,
    explanation: "range(1,11) создаёт числа от 1 до 10 включительно."
  },
  {
    id: 178,
    topic: "PyQt5",
    score: 1,
    question: ["От какого базового класса наследуются все виджеты в PyQt5?"],
    options: [
      "QGuiApplication",
      "QVBoxLayout",
      "QWidget",
      "QApplication"
    ],
    correct: 2,
    explanation: "Все виджеты наследуются от QWidget."
  },
  {
    id: 179,
    topic: "Types",
    score: 1,
    question: ["Что обозначает тип данных int?"],
    options: [
      "Вещественное",
      "Булевое",
      "Строковое",
      "Целочисленное"
    ],
    correct: 3,
    explanation: "int — тип для целых чисел."
  },

  {
    id: 180,
    topic: "Lists",
    score: 1,
    question: [
      `Списки. Что выведет данный код?
a = [1, 1, 2, 5, 1]
a.remove(1)
print(a)`
    ],
    options: [
      "[2, 5]",
      "3",
      "[1, 2, 5, 1]",
      "[1, 1, 1]",
      "[1, 1, 2, 5]"
    ],
    correct: 2,
    explanation: "remove(1) удаляет первое вхождение значения 1."
  },
  {
    id: 181,
    topic: "Operators",
    score: 1,
    question: ["Результатом вычисления print(23 // 3) будет число:"],
    options: ["7.666", "2", "7", "8", "7.666666666666667"],
    correct: 2,
    explanation: "// — целочисленное деление."
  },
  {
    id: 182,
    topic: "Lists",
    score: 1,
    question: [
      `Что выведет данный код?
lst = [x for x in range(2)]
print(lst)`
    ],
    options: ["[0, 1]", "1.2", "1", "0", "2"],
    correct: 0,
    explanation: "range(2) создаёт список [0, 1]."
  },
  {
    id: 183,
    topic: "Lists",
    score: 1,
    question: [
      `Списки. Что выведет данный код?
a = [1, 2]
b = list(a)
print(b)`
    ],
    options: ["[0, 1]", "[1, 2]", "3", "2", "1"],
    correct: 1,
    explanation: "list(a) создаёт копию списка."
  },
  {
    id: 184,
    topic: "Strings",
    score: 1,
    question: [
      `Что выведет данный код?
a = "Spam" + "Spam"
print(len(a))`
    ],
    options: ["spamspam", "4", "spam*2", "8", "0"],
    correct: 3,
    explanation: "Длина строки 'SpamSpam' равна 8."
  },
  {
    id: 185,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет программа?
S = 1
for i in range(1, 10):
    if i % 2 == 0:
        S = S * i
print(S)`
    ],
    options: ["10", "362880", "384", "14"],
    correct: 2,
    explanation: "Перемножаются чётные числа: 2·4·6·8 = 384."
  },
  {
    id: 186,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет данный код?
a = 0
while a < 5:
    a += 1
print(a)`
    ],
    options: ["1", "0", "5", "7", "6"],
    correct: 2,
    explanation: "Цикл завершается при a = 5."
  },
  {
    id: 187,
    topic: "Lists",
    score: 1,
    question: ["Как получить длину списка?"],
    options: ["list_size()", "length()", "len()", "size()", "count()"],
    correct: 2,
    explanation: "len() возвращает длину списка."
  },
  {
    id: 188,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет данный код?
while 0:
    print(1)
    break
else:
    print(0)`
    ],
    options: ["1", "0", "1 0", "10"],
    correct: 1,
    explanation: "Тело while не выполняется, срабатывает else."
  },
  {
    id: 189,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет данный код?
for x in range(3):
    print(x)`
    ],
    options: ["2", "0 1 2 3", "0", "3", "0 1 2"],
    correct: 4,
    explanation: "range(3) выводит 0, 1, 2."
  },
  {
    id: 190,
    topic: "Lists",
    score: 1,
    question: ["Метод списка index() используется для:"],
    options: [
      "получения индекса первого элемента с указанным значением",
      "извлечения элемента",
      "получения значения по индексу",
      "получения списка индексов",
      "получения индекса последнего элемента"
    ],
    correct: 0,
    explanation: "index() возвращает индекс первого вхождения."
  },
  {
    id: 191,
    topic: "Conditionals",
    score: 1,
    question: [
      `Что выведет данный код?
if 10 < 2:
    print(1)
else:
    print(0)`
    ],
    options: ["0", "8", "10", "2", "1"],
    correct: 0,
    explanation: "Условие ложно, выполняется else."
  },
  {
    id: 192,
    topic: "Lists",
    score: 1,
    question: ["Какой метод используется для добавления нового элемента в список?"],
    options: ["extend()", "add()", "new()", "append()"],
    correct: 3,
    explanation: "append() добавляет элемент в конец списка."
  },
  {
    id: 193,
    topic: "Modules",
    score: 1,
    question: ["Сколько библиотек можно импортировать в один проект?"],
    options: [
      "Не более 5",
      "Неограниченное количество",
      "Не более 23",
      "Не более 10",
      "Не более 3"
    ],
    correct: 1,
    explanation: "Количество импортов не ограничено."
  },
  {
    id: 194,
    topic: "IO",
    score: 1,
    question: ["Как получить данные от пользователя?"],
    options: ["input()", "get()", "cin()", "read()"],
    correct: 0,
    explanation: "input() используется для ввода данных."
  },
  {
    id: 195,
    topic: "Files",
    score: 1,
    question: ["Как создать новый файл в Python 3?"],
    options: [
      "os.new_file(file_path)",
      "os.create_file(file_path)",
      "os.add_file(file_path)",
      "os.touch(file_path)",
      "os.make_file(file_path)"
    ],
    correct: 3,
    explanation: "В тесте ожидается os.touch()."
  },
  {
    id: 196,
    topic: "Loops",
    score: 1,
    question: [
      `Сколько раз выполнится тело цикла?
i = 1
while i <= 10:
    i = i + 1`
    ],
    options: ["бесконечно", "10", "1", "11"],
    correct: 1,
    explanation: "Цикл выполняется 10 раз."
  },
  {
    id: 197,
    topic: "Loops",
    score: 1,
    question: ["Для чего нужен оператор break?"],
    options: [
      "для удаления программы",
      "для установки паузы",
      "для выхода из цикла",
      "для завершения программы"
    ],
    correct: 2,
    explanation: "break немедленно завершает цикл."
  },
  {
    id: 198,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет данный код?
a = 0
while a != 5:
    a += 1
print(a)`
    ],
    options: ["5", "0", "1", "4", "6"],
    correct: 0,
    explanation: "Цикл завершается при a = 5."
  },
  {
    id: 199,
    topic: "Files",
    score: 1,
    question: ["Как проверить существование файла в Python 3?"],
    options: [
      "os.check(file_path)",
      "os.exists(file_path)",
      "os.access(file_path)",
      "os.path.isfile(file_path)",
      "os.isfile(file_path)"
    ],
    correct: 3,
    explanation: "os.path.isfile() проверяет существование файла."
  },
  {
    id: 200,
    topic: "Lists",
    score: 1,
    question: [
      `Сколько элементов будет содержать список L?
L = []
L.extend([1,2,3])
L.insert(1, "abc")`
    ],
    options: ["ошибка", "4", "2", "3"],
    correct: 1,
    explanation: "После операций в списке 4 элемента."
  },
  {
    id: 201,
    topic: "Datetime",
    score: 1,
    question: ["Как вычислить количество дней между двумя датами?"],
    options: [
      "date_diff()",
      "(date1 - date2).days",
      "timedelta.days()",
      "date_difference()",
      "datetime.diff()"
    ],
    correct: 1,
    explanation: "Разность дат возвращает timedelta."
  },
  {
    id: 202,
    topic: "Functions",
    score: 1,
    question: ["Оператор return используется:"],
    options: [
      "для if",
      "для выхода из цикла",
      "как пустой оператор",
      "для возврата из функции",
      "для следующей итерации"
    ],
    correct: 3,
    explanation: "return завершает функцию и возвращает значение."
  },
  {
    id: 203,
    topic: "Tuples",
    score: 1,
    question: [
      `Кортежи. Что выведет данный код?
x = (-1)
print(str(x)[0])`
    ],
    options: ["1", "0", "Ошибка", "-"],
    correct: 3,
    explanation: "str(-1) = '-1', первый символ — '-'."
  },
  {
    id: 204,
    topic: "Lists",
    score: 1,
    question: [
      `Списки. Что выведет данный код?
a = [1, 1, 2, 5, 1]
print(a.count(1))`
    ],
    options: ["[2,5]", "[1,1,2,5,1,1]", "0", "3", "4"],
    correct: 3,
    explanation: "В списке три элемента со значением 1."
  },
  {
    id: 205,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет программа?
S = 0
for i in range(1, 10):
    if i % 2 == 0:
        S = S + i
print(S)`
    ],
    options: ["20", "30", "0", "10"],
    correct: 0,
    explanation: "Сумма чётных чисел от 1 до 9 равна 20."
  },
  {
    id: 206,
    topic: "Booleans",
    score: 1,
    question: [
      `Что выведет данный код?
a = False
while a != True:
    a += 1
print(a)`
    ],
    options: ["-1", "1", "False", "2", "0"],
    correct: 1,
    explanation: "False + 1 = 1 (True)."
  },
  {
    id: 207,
    topic: "Dicts",
    score: 1,
    question: [
      `Словари. Что выведет данный код?
a = {1: 2}
print(a[1])`
    ],
    options: ["1", "2", "12", "1 2", "3"],
    correct: 1,
    explanation: "По ключу 1 хранится значение 2."
  },
  {
    id: 208,
    topic: "PyQt5",
    score: 1,
    question: ["Какой метод класса QWidget используется для отображения виджета?"],
    options: ["show()", "paint()", "display()", "render()"],
    correct: 0,
    explanation: "show() отображает виджет."
  },
  {
    id: 209,
    topic: "Lists",
    score: 1,
    question: [
      `Списки. Что выведет данный код?
a = list('alser')
print(a)`
    ],
    options: ["5", "['a','l','s','e','r']", "alser", "['a']", "['alser']"],
    correct: 1,
    explanation: "Строка преобразуется в список символов."
  },
  {
    id: 210,
    topic: "Lists",
    score: 1,
    question: [
      `Списки. Что выведет данный код?
a = [-1, 1]
for i in a:
    print(i, end=" ")`
    ],
    options: ["0", "1 -1", "-1 1", "0 1", "[-1, 1]"],
    correct: 2,
    explanation: "Элементы выводятся по порядку."
  },
  {
    id: 211,
    topic: "Strings",
    score: 1,
    question: [
      `Что выведет данный код?
a = "spam"
print(a[:])`
    ],
    options: ["spam", "sm", "sp am", "s", "5"],
    correct: 0,
    explanation: "Срез [:] возвращает всю строку."
  },
  {
    id: 212,
    topic: "Lists",
    score: 1,
    question: [
      `Списки. Что выведет данный код?
a = [2, 3]
a.insert(-2, 1)
print(a)`
    ],
    options: [
      "[1, 2, 3]",
      "[1, 3]",
      "[2, 3, -2, 1]",
      "[-2, 1, 2, 3]",
      "[-2, 2, 3]"
    ],
    correct: 0,
    explanation: "insert(-2, 1) вставляет элемент перед индексом -2."
  },
  {
    id: 213,
    topic: "Operators",
    score: 1,
    question: ["Что будет в результате print(5 / 2)?"],
    options: ["2.5", "10", "2", "1"],
    correct: 0,
    explanation: "/ — обычное деление."
  },
  {
    id: 214,
    topic: "Lists",
    score: 1,
    question: ["Какой метод используется для удаления элемента из списка?"],
    options: ["erase()", "del()", "extract()", "push()"],
    correct: 1,
    explanation: "del удаляет элемент списка."
  },
  {
    id: 215,
    topic: "Tuples",
    score: 1,
    question: [
      `Что выведет данный код?
for i in tuple([1, 2]):
    print(i, end="")
else:
    print(0)`
    ],
    options: ["0", "2", "12", "120"],
    correct: 3,
    explanation: "После цикла без break выполняется else."
  },
  {
    id: 216,
    topic: "Loops",
    score: 1,
    question: [
      `Что покажет этот код?
for i in range(5):
    if i % 2 == 0:
        continue
    print(i)`
    ],
    options: [
      "Ошибка",
      "Числа: 0, 2 и 4",
      "Числа: 1 и 3",
      "Ошибка вывода",
      "Числа: 1, 3 и 5"
    ],
    correct: 2,
    explanation: "Выводятся нечётные числа."
  },
  {
    id: 217,
    topic: "Expressions",
    score: 1,
    question: [
      `Что будет выведено?
print((0 < [1,4][1] < 3) + 1)`
    ],
    options: ["2", "синтаксическая ошибка", "1", "0"],
    correct: 2,
    explanation: "Выражение ложно, False + 1 = 1."
  },
  {
    id: 218,
    topic: "Tuples",
    score: 1,
    question: [
      `Кортежи. Что выведет данный код?
a = tuple([1, 2])
print(a)`
    ],
    options: ["2", "(1, 2)", "[1, 2]", "3"],
    correct: 1,
    explanation: "tuple([1,2]) создаёт кортеж."
  },
  {
    id: 219,
    topic: "Lists",
    score: 1,
    question: [
      `Списки. Что выведет данный код?
a = [1, 2, 5, 7, 10]
if a.count(5):
    print(1)
else:
    print(a)`
    ],
    options: ["[1,2,5,7,10]", "5", "2", "1", "10"],
    correct: 3,
    explanation: "count(5) > 0, условие истинно."
  },


  {
    id: 220,
    topic: "Types",
    score: 1,
    question: ["Переменная float:"],
    options: [
      "Целая переменная",
      "Вещественная переменная",
      "Логическая переменная"
    ],
    correct: 1,
    explanation: "float — тип для вещественных чисел."
  },
  {
    id: 221,
    topic: "Lists",
    score: 1,
    question: [
      `Сколько элементов будет содержать список L?
L = []
L.append([1,2,3])
L.insert(1, "abc")
del L[0][0]`
    ],
    options: ["3", "произойдет ошибка", "2", "1"],
    correct: 2,
    explanation: "После всех операций в списке остаётся 2 элемента."
  },
  {
    id: 222,
    topic: "Strings",
    score: 1,
    question: ["Как объединить список строк в одну строку?"],
    options: [
      "str.append(list)",
      "str.concatenate(list)",
      "str.merge(list)",
      "str.combine(list)",
      "str.join(list)"
    ],
    correct: 4,
    explanation: "Метод join() объединяет элементы списка строк."
  },
  {
    id: 223,
    topic: "Operators",
    score: 1,
    question: ["Выберите правильную запись оператора присваивания:"],
    options: ["+:", "==", "=", "=:"],
    correct: 2,
    explanation: "Оператор присваивания — знак =."
  },
  {
    id: 224,
    topic: "Dicts",
    score: 1,
    question: ["Как удалить ключ из словаря?"],
    options: [
      "dict.remove(key)",
      "del dict[key]",
      "clear(dict, key)",
      "pop(dict, key)",
      "remove(dict, key)"
    ],
    correct: 1,
    explanation: "del dict[key] удаляет пару ключ-значение."
  },
  {
    id: 225,
    topic: "Exceptions",
    score: 1,
    question: [
      "Что будет результатом выражения: (0 < 5 <= 3) and (0 / 0)?"
    ],
    options: [
      "True",
      "Синтаксическая ошибка",
      "False",
      "ZeroDivisionError"
    ],
    correct: 2,
    explanation: "Левая часть ложна, правая не вычисляется."
  },
  {
    id: 226,
    topic: "PyQt5",
    score: 1,
    question: ["Какой класс используется для работы с компоновкой элементов в PyQt5?"],
    options: [
      "QRenderLayout",
      "QGuiApplication",
      "QHBoxLayout",
      "QLayoutManager"
    ],
    correct: 2,
    explanation: "QHBoxLayout управляет горизонтальной компоновкой."
  },
  {
    id: 227,
    topic: "Strings",
    score: 1,
    question: ["Как найти индекс первого вхождения подстроки в строке?"],
    options: [
      "str.detect(substring)",
      "str.find(substring)",
      "str.lookup(substring)",
      "str.index(substring)",
      "str.search(substring)"
    ],
    correct: 1,
    explanation: "find() возвращает индекс первого вхождения."
  },
  {
    id: 228,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет данный код?
x = 5
while x >= 0:
    x -= 1
print(x)`
    ],
    options: ["6", "1", "-1", "5", "0"],
    correct: 2,
    explanation: "После выхода из цикла x становится -1."
  },
  {
    id: 229,
    topic: "Sets",
    score: 1,
    question: [
      `Множества. Что выведет данный код?
a = set([1, 3])
for i in a:
    print(a)`
    ],
    options: ["1, 3", "2", "{1, 3}", "4"],
    correct: 2,
    explanation: "Множество выводится целиком."
  },
  {
    id: 230,
    topic: "Sets",
    score: 1,
    question: [
      `Множества. Что выведет данный код?
a = set([1, 3])
print(len(a))`
    ],
    options: ["1,3", "3", "2", "{1,3}", "4"],
    correct: 2,
    explanation: "В множестве два уникальных элемента."
  },
  {
    id: 231,
    topic: "Lists",
    score: 1,
    question: ["Укажите параметр метода sort(), задающий сортировку по убыванию"],
    options: ["reverse=True", "reverse=False", "False", "True"],
    correct: 0,
    explanation: "reverse=True включает сортировку по убыванию."
  },
  {
    id: 232,
    topic: "Operators",
    score: 1,
    question: [
      `Что будет результатом кода?
x = 23
num = 0 if x > 10 else 11
print(num)`
    ],
    options: ["23", "0", "10", "Ошибка", "11"],
    correct: 1,
    explanation: "Условие истинно, выбирается 0."
  },
  {
    id: 233,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет данный код?
for i in 'test':
    if i == 't':
        print(i, end="")`
    ],
    options: ["2", "4", "es", "test", "tt"],
    correct: 4,
    explanation: "Буква 't' встречается дважды."
  },
  {
    id: 234,
    topic: "Theory",
    score: 1,
    question: ["Тело цикла — это:"],
    options: [
      "Произвольный текст",
      "Группа команд, повторяющихся некоторое число раз",
      "Команды вне цикла",
      "Произвольная группа команд"
    ],
    correct: 1,
    explanation: "Тело цикла — повторяемые инструкции."
  },
  {
    id: 235,
    topic: "Strings",
    score: 1,
    question: ["Как разделить строку на подстроки по разделителю?"],
    options: [
      "str.divide(separator)",
      "str.split(separator)",
      "str.separate(separator)",
      "str.slice(separator)",
      "str.cut(separator)"
    ],
    correct: 1,
    explanation: "split() делит строку по разделителю."
  },
  {
    id: 236,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет данный код?
b = [0, 1, 3, 4]
for i in b:
    if i == 3:
        continue
    else:
        print(i, end=" ")`
    ],
    options: ["4", "8", "0 1 4", "3", "0 1 3 4"],
    correct: 2,
    explanation: "Число 3 пропускается."
  },
  {
    id: 237,
    topic: "Numbers",
    score: 1,
    question: [
      `Что выведет данный код?
a = -2
print(a)`
    ],
    options: ["0", "-2", "-4", "4", "2"],
    correct: 1,
    explanation: "Выводится значение переменной a."
  },
  {
    id: 238,
    topic: "Loops",
    score: 1,
    question: [
      `Укажите значение переменной i:
i = 1
while i <= 10:
    i = i + 1`
    ],
    options: ["0", "11", "1", "10"],
    correct: 1,
    explanation: "После завершения цикла i равно 11."
  },
  {
    id: 239,
    topic: "Operators",
    score: 1,
    question: ["Что будет результатом print(23 % 3)?"],
    options: ["2", "8", "7.66", "1900-01-07", "1"],
    correct: 0,
    explanation: "23 % 3 = 2."
  },
  {
    id: 240,
    topic: "Lists",
    score: 1,
    question: [
      `Что будет выведено?
a = [5, 3, 8]
a[1] = a[2:3]
print(a[1])`
    ],
    options: ["[3, 8]", "7", "[7]", "[8]", "8"],
    correct: 3,
    explanation: "Срез возвращает список [8]."
  },
  {
    id: 241,
    topic: "Functions",
    score: 1,
    question: ["Что делает функция len()?"],
    options: [
      "Возвращает случайное число",
      "Возвращает модуль числа",
      "Возвращает длину строки",
      "Возвращает номер символа"
    ],
    correct: 2,
    explanation: "len() возвращает длину объекта."
  },
  {
    id: 242,
    topic: "Tuples",
    score: 1,
    question: [
      `Кортежи. Что выведет данный код?
a = ((1), (2))
print(a)`
    ],
    options: ["(1, 2)", "Ошибка", "3", "((1), (2))"],
    correct: 3,
    explanation: "Это кортеж из двух чисел."
  },
  {
    id: 243,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет данный код?
while True:
    print(1)
    break
else:
    print(0)`
    ],
    options: ["1 0", "1", "0", "Ошибка"],
    correct: 1,
    explanation: "break предотвращает выполнение else."
  },
  {
    id: 244,
    topic: "Booleans",
    score: 1,
    question: [
      `Что выведет данный код?
a = True
while a:
    a -= 1
print(a)`
    ],
    options: ["-1", "True", "0", "1", "2"],
    correct: 2,
    explanation: "True интерпретируется как 1."
  },
  {
    id: 245,
    topic: "Types",
    score: 1,
    question: [
      'Какого типа значение получится в результате выражения: [" "]?'
    ],
    options: [
      "str",
      "Синтаксическая ошибка",
      "list",
      "array"
    ],
    correct: 2,
    explanation: "Это список с одним элементом."
  },
  {
    id: 246,
    topic: "Loops",
    score: 1,
    question: ["Оператор continue используется:"],
    options: [
      "как пустой оператор",
      "для выхода из цикла",
      "для перехода к следующей итерации",
      "для возврата из функции"
    ],
    correct: 2,
    explanation: "continue пропускает текущую итерацию."
  },
  {
    id: 247,
    topic: "Datetime",
    score: 1,
    question: ["Как изменить формат вывода даты и времени?"],
    options: [
      "date_format()",
      "datetime_format()",
      "strftime()",
      "strptime()",
      "time_format()"
    ],
    correct: 2,
    explanation: "strftime() форматирует дату и время."
  },
  {
    id: 248,
    topic: "Datetime",
    score: 1,
    question: ["Как создать объект datetime с текущей датой и временем?"],
    options: [
      "datetime.today()",
      "datetime.current_datetime()",
      "datetime.current_time()",
      "datetime.now()",
      "datetime.current()"
    ],
    correct: 3,
    explanation: "datetime.now() возвращает текущие дату и время."
  },
  {
    id: 249,
    topic: "Operators",
    score: 1,
    question: [
      `Что будет выведено?
a = 5
b = a + 5
a = b * 10
print(a)`
    ],
    options: ["5", "1000", "100", "25", "250"],
    correct: 2,
    explanation: "b = 10, затем a = 100."
  },
  {
    id: 250,
    topic: "Datetime",
    score: 1,
    question: ["Как получить дату через неделю от текущей?"],
    options: [
      "datetime.now() + timedelta(days=7)",
      "datetime.now() - timedelta(days=-7)",
      "datetime.today() + timedelta(days=7)",
      "datetime.today() + timedelta(7)",
      "datetime.now() + timedelta(7)"
    ],
    correct: 0,
    explanation: "Используется timedelta(days=7)."
  },
  {
    id: 251,
    topic: "Files",
    score: 1,
    question: [
      `Каков тип переменной myFile?
myFile = open('mbox.txt')
x = myFile.read()`
    ],
    options: [
      "Список строк",
      "Файл",
      "Строка",
      "Список символов"
    ],
    correct: 1,
    explanation: "open() возвращает файловый объект."
  },
  {
    id: 252,
    topic: "Dicts",
    score: 1,
    question: [
      `Словари. Что выведет данный код?
a = {1: 2}
for i in a:
    print(a)`
    ],
    options: ["1", "1 2", "3", "{1: 2}", "2"],
    correct: 3,
    explanation: "Словарь выводится целиком."
  },
  {
    id: 253,
    topic: "Strings",
    score: 1,
    question: [
      `Что выведет данный код?
x = 'test'
y = 4
print('y' + x)`
    ],
    options: ["4+test", "ytest", "testy", "testtesttesttest", "4test"],
    correct: 1,
    explanation: "Складываются строки."
  },
  {
    id: 254,
    topic: "Strings",
    score: 1,
    question: ["Как заменить все вхождения подстроки в строке?"],
    options: [
      "str.replace(substring, new_string)",
      "str.substitute(substring, new_string)",
      "str.modify(substring, new_string)",
      "str.swap(substring, new_string)",
      "str.change(substring, new_string)"
    ],
    correct: 0,
    explanation: "replace() заменяет подстроки."
  },
  {
    id: 255,
    topic: "Lists",
    score: 1,
    question: [
      `Списки. Что выведет данный код?
a = list('py')
print(len(a))`
    ],
    options: ["4", "0", "py", "2", "p y"],
    correct: 3,
    explanation: "Два символа."
  },
  {
    id: 256,
    topic: "Lists",
    score: 1,
    question: [
      `Списки. Что выведет данный код?
a = [2, 4, 8]
print(a[-2])`
    ],
    options: ["[2,4]", "4", "2", "-4", "[4,8]"],
    correct: 1,
    explanation: "Индекс -2 — предпоследний элемент."
  },
  {
    id: 257,
    topic: "Lists",
    score: 1,
    question: [
      `Списки. Что выведет данный код?
a = [1]
a.append("py")
print(a)`
    ],
    options: [
      "['py', 1]",
      "[1, 'py']",
      "Ошибка",
      "[1, p, y]",
      "[1py]"
    ],
    correct: 1,
    explanation: "append добавляет элемент в конец."
  },
  {
    id: 258,
    topic: "Assignments",
    score: 1,
    question: [
      `Что будет выведено?
a = 7
b = 9
a, b = b, a
print(a, b, a)`
    ],
    options: ["7 7 7", "9 7 9", "16 9 16", "9 9 9", "7 9 7"],
    correct: 1,
    explanation: "После обмена a=9, b=7."
  },
  {
    id: 259,
    topic: "IO",
    score: 1,
    question: ["Какая функция выводит данные в консоль?"],
    options: ["out()", "write()", "print()", "log()"],
    correct: 2,
    explanation: "print() выводит данные."
  },
  {
    id: 260,
    topic: "Tuples",
    score: 1,
    question: [
      `Кортежи. Что выведет данный код?
a = ("0011")
print(int(a))`
    ],
    options: ["1", "0011", "011", "11"],
    correct: 3,
    explanation: "Строка '0011' преобразуется в число 11."
  },
  {
    id: 261,
    topic: "Lists",
    score: 1,
    question: [
      `Что выведет данный код?
lst = [x for x in range(2)]
print(lst)`
    ],
    options: ["2", "1.2", "[0, 1]", "0", "1"],
    correct: 2,
    explanation: "range(2) создаёт список [0, 1]."
  },
  {
    id: 262,
    topic: "Lists",
    score: 1,
    question: [
      `Что будет выведено?
a = [5, 3, 8]
a[1] = a[2/3]
print(a[1])`
    ],
    options: ["8", "[7]", "7", "[3, 8]", "[8]"],
    correct: 4,
    explanation: "В тесте ожидается список [8]."
  },
  {
    id: 263,
    topic: "Lists",
    score: 1,
    question: [
      `Списки. Что выведет данный код?
a = list('py')
print(len(a))`
    ],
    options: ["py", "0", "4", "2"],
    correct: 3,
    explanation: "Строка 'py' состоит из двух символов."
  },
  {
    id: 264,
    topic: "OOP",
    score: 1,
    question: ["Деструктор класса задаётся методом с именем:"],
    options: ["_del_", "_delete_", "_destruct_", "_destr_"],
    correct: 0,
    explanation: "Деструктор в Python — метод __del__."
  },
  {
    id: 265,
    topic: "Lists",
    score: 1,
    question: [
      `Что выведет данный код?
arr = [0,1,1,0]
for value in arr:
    if value == 0:
        arr[value] = 1
print(arr)`
    ],
    options: [
      "[0, 1, 1, 0]",
      "[1, 1, 1, 0]",
      "[0, 0, 0, 0]",
      "[1, 1, 1, 1]"
    ],
    correct: 1,
    explanation: "Элементы с индексом 0 заменяются на 1."
  },
  {
    id: 266,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет данный код?
for x in range(2):
    continue
print(x)`
    ],
    options: ["1", "3", "2", "0", "0 1"],
    correct: 0,
    explanation: "После цикла x равно последнему значению — 1."
  },
  {
    id: 267,
    topic: "OS",
    score: 1,
    question: ["Как получить текущую директорию?"],
    options: ["os.path", "os.getcwd()", "os.dir()", "os.current()"],
    correct: 1,
    explanation: "os.getcwd() возвращает текущую рабочую директорию."
  },
  {
    id: 268,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет данный код?
b = [0, 1, 3, 4]
for i in b:
    if i == 3:
        continue
    else:
        print(i, end="")`
    ],
    options: ["4", "3", "8", "014", "0134"],
    correct: 3,
    explanation: "Число 3 пропускается, остальные выводятся подряд."
  },
  {
    id: 269,
    topic: "Loops",
    score: 1,
    question: ["Какой из циклов может иметь else блок?"],
    options: ["только for", "for и while", "do-while", "только while"],
    correct: 1,
    explanation: "В Python else может быть у for и while."
  },
  {
    id: 270,
    topic: "Conditionals",
    score: 1,
    question: [
      `Что выведет данный код?
x = 2 if (10 > 5) else 3
print(x)`
    ],
    options: ["5", "20", "10", "3", "2"],
    correct: 4,
    explanation: "Условие истинно, выбирается 2."
  },
  {
    id: 271,
    topic: "Strings",
    score: 1,
    question: [
      `Что выведет данный код?
a = " Spam" + "Spam "
print(len(a))`
    ],
    options: ["spam*2", "4", "0", "spamspam", "8"],
    correct: 4,
    explanation: "Строка содержит 8 символов с учётом пробелов."
  },
  {
    id: 272,
    topic: "Functions",
    score: 1,
    question: ["Что делает функция print()?"],
    options: [
      "Возвращает значение",
      "Выводит данные на экран",
      "Считывает данные",
      "Завершает программу"
    ],
    correct: 1,
    explanation: "print() выводит данные в консоль."
  },
  {
    id: 273,
    topic: "Dicts",
    score: 1,
    question: ["Что делает метод d.keys()?"],
    options: [
      "Возвращает значения",
      "Удаляет ключи",
      "Возвращает ключи словаря",
      "Возвращает пары"
    ],
    correct: 2,
    explanation: "keys() возвращает все ключи словаря."
  },
  {
    id: 274,
    topic: "Dicts",
    score: 1,
    question: ["Что делает метод d.values()?"],
    options: [
      "Возвращает ключи",
      "Удаляет значения",
      "Возвращает значения словаря",
      "Возвращает пары"
    ],
    correct: 2,
    explanation: "values() возвращает все значения словаря."
  },
  {
    id: 275,
    topic: "Dicts",
    score: 1,
    question: ["Что делает метод d.items()?"],
    options: [
      "Удаляет пары",
      "Возвращает только значения",
      "Возвращает пары ключ-значение",
      "Возвращает только ключи"
    ],
    correct: 2,
    explanation: "items() возвращает пары (ключ, значение)."
  },
  {
    id: 276,
    topic: "Sets",
    score: 1,
    question: ["Как создать пустое множество?"],
    options: ["x = {}", "x = 0", "x = set()", "x = []"],
    correct: 2,
    explanation: "{} создаёт словарь, set() — множество."
  },
  {
    id: 277,
    topic: "Tuples",
    score: 1,
    question: ["Как создать пустой кортеж?"],
    options: ["x = {}", "x = 0", "x = set()", "x = ()"],
    correct: 3,
    explanation: "Пустой кортеж создаётся как ()."
  },
  {
    id: 278,
    topic: "Files",
    score: 1,
    question: ["Как переименовать файл old.txt в new.txt?"],
    options: [
      'os.move("old.txt","new.txt")',
      'os.change("old.txt","new.txt")',
      'os.rename("old.txt","new.txt")',
      'os.rename_file("old.txt","new.txt")'
    ],
    correct: 2,
    explanation: "os.rename используется для переименования файлов."
  },
  {
    id: 279,
    topic: "Datetime",
    score: 1,
    question: ["Какой модуль используется для работы с датой и временем?"],
    options: ["math", "os", "calendar", "datetime", "time"],
    correct: 3,
    explanation: "Основной модуль — datetime."
  },
  {
    id: 280,
    topic: "OOP",
    score: 1,
    question: ["Сокрытие информации о внутреннем устройстве объекта называется:"],
    options: ["агрегация", "абстракция", "полиморфизм", "инкапсуляция"],
    correct: 3,
    explanation: "Инкапсуляция скрывает внутреннюю реализацию."
  },
  {
    id: 281,
    topic: "Theory",
    score: 1,
    question: ["Что такое класс?"],
    options: [
      "Список с атрибутами",
      "Пользовательский тип с методами и атрибутами",
      "В Python нет классов",
      "Массив с атрибутами"
    ],
    correct: 1,
    explanation: "Класс объединяет данные и методы."
  },
  {
    id: 282,
    topic: "Operators",
    score: 1,
    question: ["Какой из типов данных неизменяемый?"],
    options: ["set", "list", "dict", "tuple"],
    correct: 3,
    explanation: "tuple — неизменяемый тип."
  },
  {
    id: 283,
    topic: "Strings",
    score: 1,
    question: ["Как перевести строку в верхний регистр?"],
    options: [
      "str.capital()",
      "str.to_upper()",
      "str.lowercase()",
      "str.to_lower()",
      "str.upper()"
    ],
    correct: 4,
    explanation: "upper() переводит строку в верхний регистр."
  },
  {
    id: 284,
    topic: "Strings",
    score: 1,
    question: ["Как заменить подстроку в строке?"],
    options: [
      "str.change()",
      "str.replace()",
      "str.sub()",
      "str.update()"
    ],
    correct: 1,
    explanation: "replace() заменяет подстроки."
  },
  {
    id: 285,
    topic: "Strings",
    score: 1,
    question: ["Как удалить пробелы в начале и конце строки?"],
    options: [
      "str.trim()",
      "str.cut()",
      "str.strip()",
      "str.clean()"
    ],
    correct: 2,
    explanation: "strip() удаляет пробелы по краям."
  },
  {
    id: 286,
    topic: "Strings",
    score: 1,
    question: ["Как сделать первую букву каждого слова заглавной?"],
    options: [
      "str.title()",
      "str.capitalize()",
      "str.upper()",
      "str.init()"
    ],
    correct: 0,
    explanation: "title() делает каждое слово с заглавной буквы."
  },
  {
    id: 287,
    topic: "Assignments",
    score: 1,
    question: [
      `Что будет выведено?
a = 7
b = 9
a, b = b, a
print(a, b, a)`
    ],
    options: ["7 7 7", "9 7 9", "16 9 16", "9 9 9"],
    correct: 1,
    explanation: "Происходит обмен значений."
  },
  {
    id: 288,
    topic: "Numbers",
    score: 1,
    question: ["Что делает оператор % ?"],
    options: [
      "Деление",
      "Целочисленное деление",
      "Возвращает остаток от деления",
      "Возведение в степень"
    ],
    correct: 2,
    explanation: "% возвращает остаток от деления."
  },
  {
    id: 289,
    topic: "Numbers",
    score: 1,
    question: ["Что делает оператор // ?"],
    options: [
      "Обычное деление",
      "Возведение в степень",
      "Целочисленное деление",
      "Остаток от деления"
    ],
    correct: 2,
    explanation: "// — целочисленное деление."
  },
  {
    id: 290,
    topic: "Numbers",
    score: 1,
    question: ["Что делает оператор ** ?"],
    options: [
      "Умножение",
      "Деление",
      "Возведение в степень",
      "Остаток"
    ],
    correct: 2,
    explanation: "** — оператор степени."
  },
  {
    id: 291,
    topic: "Functions",
    score: 1,
    question: ["Для чего используется return?"],
    options: [
      "Для выхода из цикла",
      "Для возврата значения из функции",
      "Для if",
      "Как пустой оператор"
    ],
    correct: 1,
    explanation: "return завершает функцию и возвращает значение."
  },
  {
    id: 292,
    topic: "Exceptions",
    score: 1,
    question: ["Что делает блок finally?"],
    options: [
      "Выполняется всегда",
      "Создаёт исключение",
      "Выполняется только при ошибке",
      "Завершает программу"
    ],
    correct: 0,
    explanation: "finally выполняется всегда."
  },
  {
    id: 293,
    topic: "Exceptions",
    score: 1,
    question: ["Какое исключение возникает при делении на ноль?"],
    options: [
      "ValueError",
      "ArithmeticError",
      "ZeroDivisionError",
      "TypeError"
    ],
    correct: 2,
    explanation: "Деление на ноль вызывает ZeroDivisionError."
  },
  {
    id: 294,
    topic: "Files",
    score: 1,
    question: ["Как удалить файл в Python 3?"],
    options: [
      "os.erase()",
      "os.delete()",
      "os.del()",
      "os.unlink()"
    ],
    correct: 3,
    explanation: "os.unlink() удаляет файл."
  },
  {
    id: 295,
    topic: "Datetime",
    score: 1,
    question: ["Как вычислить количество дней между двумя датами?"],
    options: [
      "(date1 - date2).days",
      "datetime.diff()",
      "date_diff()",
      "timedelta.days()"
    ],
    correct: 0,
    explanation: "Разность дат возвращает timedelta."
  },
  {
    id: 296,
    topic: "PyQt5",
    score: 1,
    question: ["От какого базового класса наследуются все виджеты PyQt5?"],
    options: [
      "QGuiApplication",
      "QVBoxLayout",
      "QWidget",
      "QApplication"
    ],
    correct: 2,
    explanation: "Все виджеты наследуются от QWidget."
  },
  {
    id: 297,
    topic: "PyQt5",
    score: 1,
    question: ["Какой сигнал используется для обработки нажатия кнопки?"],
    options: ["toggled()", "released()", "pressed()", "clicked()"],
    correct: 3,
    explanation: "clicked() — основной сигнал кнопки."
  },
  {
    id: 298,
    topic: "IO",
    score: 1,
    question: ["Как получить ввод от пользователя?"],
    options: ["read()", "scan()", "input()", "get()"],
    correct: 2,
    explanation: "input() считывает данные пользователя."
  },
  {
    id: 299,
    topic: "IO",
    score: 1,
    question: ["Какая функция выводит данные в консоль?"],
    options: ["log()", "out()", "print()", "write()"],
    correct: 2,
    explanation: "print() выводит данные в консоль."
  },
  {
    id: 300,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет данный код?
for x in range(3):
    print(x)`
    ],
    options: ["1 2 3", "0 1 2", "3", "2"],
    correct: 1,
    explanation: "range(3) генерирует значения 0, 1, 2."
  },
  {
    id: 301,
    topic: "Tuples",
    score: 1,
    question: [
      `Кортежи. Что выведет данный код?
a = (1, 2)
print(a)`
    ],
    options: ["(1:2)", "3", "(1,2)", "{1,2}"],
    correct: 2,
    explanation: "Кортеж выводится в круглых скобках."
  },
  {
    id: 302,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет следующая программа?
S = 0
for i in range(1, 10, 2):
    if i % 2 == 0:
        S = S + i
print(S)`
    ],
    options: ["20", "10", "0", "1"],
    correct: 2,
    explanation: "Чётных чисел нет, переменная S остаётся равной 0."
  },
  {
    id: 303,
    topic: "Lists",
    score: 1,
    question: [
      `Списки. Что выведет данный код?
a = [2, 4, 8]
print(a[-2])`
    ],
    options: ["[4,8]", "-4", "[2,4]", "2", "4"],
    correct: 4,
    explanation: "Индекс -2 указывает на предпоследний элемент."
  },
  {
    id: 304,
    topic: "Strings",
    score: 1,
    question: ["Как перевести строку в верхний регистр?"],
    options: [
      "str.capital()",
      "str.to_upper()",
      "str.lowercase()",
      "str.to_lower()",
      "str.upper()"
    ],
    correct: 4,
    explanation: "upper() переводит строку в верхний регистр."
  },
  {
    id: 305,
    topic: "Assignments",
    score: 1,
    question: [
      `Что будет выведено?
a = 7
b = 9
a, b = b, a
print(a, b, a)`
    ],
    options: ["777", "999", "797", "979"],
    correct: 3,
    explanation: "После обмена a = 9, b = 7."
  },
  {
    id: 306,
    topic: "OOP",
    score: 1,
    question: ["При наследовании в языке Python:"],
    options: [
      "методы не наследуются",
      "подклассы наследуют все методы суперкласса, кроме специально помеченных",
      "подклассы наследуют только специально помеченные методы",
      "подклассы наследуют все методы суперкласса"
    ],
    correct: 3,
    explanation: "В Python подклассы наследуют все методы суперкласса."
  },
  {
    id: 307,
    topic: "Functions",
    score: 1,
    question: [
      `Какие ошибки допущены в коде?
def factorial(n):
    if n = 0:
        return 1
    else:
        return n * factorial(n - 1)`
    ],
    options: [
      "Функция всегда возвращает 1",
      "Необходимо указать тип возвращаемого значения",
      "Функция не может вызывать сама себя",
      "В коде есть ошибки"
    ],
    correct: 3,
    explanation: "Используется оператор = вместо ==."
  },
  {
    id: 308,
    topic: "Loops",
    score: 1,
    question: [
      `Что выведет данный код?
a = 0
while a < 5:
    a += 1
print(a)`
    ],
    options: ["1", "7", "0", "5", "6"],
    correct: 3,
    explanation: "После выхода из цикла a равно 5."
  },
  {
    id: 309,
    topic: "Functions",
    score: 1,
    question: ["Оператор return используется:"],
    options: [
      "для возврата из функции и продолжения программы с точки её вызова",
      "для выхода из цикла",
      "для перехода к следующей итерации цикла",
      "для прерывания условного оператора if",
      "в качестве пустого оператора"
    ],
    correct: 0,
    explanation: "return завершает функцию и возвращает управление."
  },
  {
    id: 310,
    topic: "Exceptions",
    score: 1,
    question: [
      "Что будет получено в результате вычисления выражения: (0 < 5 <= 3) and (0/0)?"
    ],
    options: [
      "синтаксическая ошибка",
      "True",
      "ZeroDivisionError",
      "False"
    ],
    correct: 2,
    explanation: "Происходит попытка деления на ноль."
  },
  {
    id: 311,
    topic: "Sets",
    score: 1,
    question: [
      `Множества. Что выведет данный код?
a = set([1, 3])
a.add(3)
print(a)`
    ],
    options: ["{3}", "{1,3}", "7", "{1}"],
    correct: 1,
    explanation: "Множество не хранит дубликаты."
  },
  {
    id: 312,
    topic: "IO",
    score: 1,
    question: [
      `Что будет в результате выполнения программы?
a = int(input())
b = int(input())
if a < b:
    print(a)
else:
    print(b)`
    ],
    options: ["-10", "30", "20", "10"],
    correct: 3,
    explanation: "Выводится меньшее из двух чисел."
  },
  {
    id: 313,
    topic: "Types",
    score: 1,
    question: ["Какой из типов данных неизменяемый?"],
    options: ["set", "list", "dict", "tuple"],
    correct: 3,
    explanation: "tuple — неизменяемый тип данных."
  },
  {
    id: 314,
    topic: "Errors",
    score: 1,
    question: [
      `Что будет выведено на экран?
z = 5
z * 1 = z ^ 2
print(z1)`
    ],
    options: ["25", "125", "5", "10"],
    correct: 3,
    explanation: "В тесте ожидается ответ 10."
  },
  {
    id: 315,
    topic: "Exceptions",
    score: 1,
    question: ["Что делает блок finally?"],
    options: [
      "выполняется всегда",
      "создаёт исключение",
      "выполняется только при ошибке",
      "завершает программу"
    ],
    correct: 0,
    explanation: "finally выполняется независимо от ошибок."
  },
  {
    id: 316,
    topic: "Numbers",
    score: 1,
    question: [
      `Что выведет данный код?
a = -2
print(a)`
    ],
    options: ["-2", "-4", "2", "0", "4"],
    correct: 0,
    explanation: "Выводится значение переменной a."
  },
  {
    id: 317,
    topic: "Sets",
    score: 1,
    question: [
      `Множества. Что выведет данный код?
print(len(a))`
    ],
    options: ["4", "1,3", "2", "3"],
    correct: 2,
    explanation: "len() возвращает количество элементов множества."
  },
  {
    id: 318,
    topic: "Loops",
    score: 1,
    question: [
      `Что покажет этот код?
for i in range(5):
    if i % 2 == 0:
        continue
    print(i)`
    ],
    options: [
      "Числа: 1 и 3",
      "Ошибка",
      "Числа: 0, 2 и 4",
      "Числа: 1, 3 и 5"
    ],
    correct: 0,
    explanation: "Выводятся только нечётные числа."
  },
  {
    id: 319,
    topic: "Loops",
    score: 1,
    question: [
      `Укажите значение переменной i:
i = 1
while i <= 10:
    i = i + 1`
    ],
    options: ["11", "0", "10", "1"],
    correct: 0,
    explanation: "После цикла i равно 11."
  },
  {
    id: 320,
    topic: "PyQt5",
    score: 1,
    question: ["Какой сигнал используется для обработки нажатия кнопки в PyQt5?"],
    options: ["toggled()", "released()", "pressed()", "clicked()"],
    correct: 3,
    explanation: "clicked() — стандартный сигнал кнопки."
  },
  {
    id: 321,
    topic: "Tuples",
    score: 1,
    question: [
      `Кортежи. Что выведет данный код?
x = (-1)
print(str(x)[0])`
    ],
    options: ["0", "-", "Ошибка", "1"],
    correct: 1,
    explanation: "str(-1) = '-1', первый символ — '-'."
  },
  {
    id: 322,
    topic: "Strings",
    score: 1,
    question: [
      `Что выведет данный код?
a = "spam".title()
print(a)`
    ],
    options: ["c", "Spam", "S", "spam"],
    correct: 1,
    explanation: "title() делает первую букву заглавной."
  },
  {
    id: 323,
    topic: "OOP",
    score: 1,
    question: ["Конструктор класса задаётся методом с именем:"],
    options: ["_new_", "init", "_init_", "new", "_construct"],
    correct: 2,
    explanation: "Конструктор — метод __init__."
  },
  {
    id: 324,
    topic: "Strings",
    score: 1,
    question: ["Как сделать первую букву каждого слова в строке заглавной?"],
    options: [
      "str.title()",
      "str.capitalize()",
      "str.uppercase()",
      "str.startcase()",
      "str.initcase()"
    ],
    correct: 0,
    explanation: "title() делает каждое слово с заглавной буквы."
  },
  {
    id: 325,
    topic: "Lists",
    score: 1,
    question: [
      `Сколько элементов будет содержать список L?
L = []
L.append([1,2,3])
L.insert(1, "abc")
del L[0][0]`
    ],
    options: ["3", "1", "произойдет ошибка", "2"],
    correct: 3,
    explanation: "После всех операций в списке остаётся 2 элемента."
  },
  {
    id: 326,
    topic: "Files",
    score: 1,
    question: ["Как удалить файл в Python 3?"],
    options: [
      "os.erase(file_path)",
      "os.delete(file_path)",
      "os.del(file_path)",
      "os.unlink(file_path)"
    ],
    correct: 3,
    explanation: "os.unlink() удаляет файл."
  },
  {
    id: 327,
    topic: "Datetime",
    score: 1,
    question: ["Как создать объект datetime с текущей датой и временем?"],
    options: [
      "datetime.current_time()",
      "datetime.current_datetime()",
      "datetime.today()",
      "datetime.current()",
      "datetime.now()"
    ],
    correct: 4,
    explanation: "datetime.now() возвращает текущие дату и время."
  },
  {
    id: 328,
    topic: "Types",
    score: 1,
    question: ["Переменная float:"],
    options: [
      "целая переменная",
      "логическая переменная",
      "вещественная переменная"
    ],
    correct: 2,
    explanation: "float — вещественный тип."
  },
  {
    id: 329,
    topic: "Lists",
    score: 1,
    question: ["Как создать список, содержащий числа от 1 до 10?"],
    options: [
      "[1, 10]",
      "list(1:10)",
      "list(1, 10)",
      "list[1:10]",
      "list(range(1,11))"
    ],
    correct: 4,
    explanation: "range(1,11) создаёт числа от 1 до 10."
  }
];


