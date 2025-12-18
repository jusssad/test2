const QUESTIONS = [


{
  id: 1,
  topic: "Java / JVM",
  score: 1,
  question: [
    "Какой компонент платформы Java непосредственно отвечает за интерпретацию и выполнение скомпилированного байт-кода, сгенерированного компилятором?"
  ],
  options: [
    "JDK",
    "JRE",
    "JVM",
    "Garbage Collector",
    "ClassLoader"
  ],
  correct: 2,
  explanation: "JVM (Java Virtual Machine) отвечает за выполнение байт-кода."
},

{
  id: 2,
  topic: "Java / final",
  score: 1,
  question: [
    "Вы проектируете программу, в которой значение переменной не должно изменяться после инициализации, даже при наличии доступа из методов класса. Какое ключевое слово следует использовать?"
  ],
  options: [
    "static",
    "const",
    "final",
    "private",
    "immutable"
  ],
  correct: 2,
  explanation: "Ключевое слово final запрещает изменение значения после инициализации."
},

{
  id: 3,
  topic: "Java / Типы данных",
  score: 1,
  question: [
    "Какой примитивный тип данных наиболее корректно использовать для хранения чисел с плавающей точкой двойной точности?"
  ],
  options: [
    "float",
    "int",
    "double",
    "long",
    "BigDecimal"
  ],
  correct: 2,
  explanation: "Тип double предназначен для чисел двойной точности с плавающей точкой."
},

{
  id: 4,
  topic: "Java / Singleton",
  score: 1,
  question: [
    "Вы хотите, чтобы класс был создан для всех экземпляров в единственном экземпляре в памяти. Какой модификатор необходимо применить?"
  ],
  options: [
    "private",
    "static",
    "final",
    "protected",
    "abstract"
  ],
  correct: 1,
  explanation: "static используется для реализации паттерна Singleton."
},

{
  id: 5,
  topic: "Java / Object",
  score: 1,
  question: [
    "Какое утверждение о классе Object является корректным с точки зрения иерархии наследования?"
  ],
  options: [
    "Object наследуется только примитивами",
    "Object — корневой класс для всех классов Java",
    "Object нельзя расширять",
    "Object существует только для интерфейсов",
    "Object не имеет методов"
  ],
  correct: 1,
  explanation: "Класс Object является корневым классом для всех классов Java."
},

{
  id: 6,
  topic: "Java / Модификаторы доступа",
  score: 1,
  question: [
    "Какой уровень доступа имеют поля с модификатором private?"
  ],
  options: [
    "Доступны везде",
    "Доступны в пакете",
    "Доступны только в подклассах",
    "Доступны только внутри класса",
    "Доступны только в JVM"
  ],
  correct: 3,
  explanation: "private-члены доступны только внутри того же класса."
},

{
  id: 7,
  topic: "Java / Интерфейсы",
  score: 1,
  question: [
    "Какое ключевое слово необходимо использовать, чтобы класс реализовал интерфейс?"
  ],
  options: [
    "extends",
    "implements",
    "interface",
    "override",
    "abstract"
  ],
  correct: 1,
  explanation: "Классы реализуют интерфейсы с помощью ключевого слова implements."
},

{
  id: 8,
  topic: "Java / toString",
  score: 1,
  question: [
    "Если в пользовательском классе не переопределён метод toString(), какое поведение будет наблюдаться при выводе объекта в консоль?"
  ],
  options: [
    "Будет ошибка компиляции",
    "Будет выведено значение полей",
    "Будет вызван метод equals()",
    "Будет выведена строка вида ClassName@hashcode",
    "Ничего не будет выведено"
  ],
  correct: 3,
  explanation: "По умолчанию toString() выводит имя класса и хэш-код объекта."
},

{
  id: 9,
  topic: "Java / super",
  score: 1,
  question: [
    "Какое ключевое слово позволяет обратиться к методам и полям родительского класса из подкласса?"
  ],
  options: [
    "this",
    "parent",
    "extends",
    "super",
    "base"
  ],
  correct: 3,
  explanation: "Ключевое слово super используется для обращения к родительскому классу."
},

{
  id: 10,
  topic: "OOP / Инкапсуляция",
  score: 1,
  question: [
    "В объектно-ориентированном программировании инкапсуляция играет важную роль. Что именно она обеспечивает?"
  ],
  options: [
    "Множественное наследование",
    "Сокрытие реализации и контроль доступа",
    "Автоматическое управление памятью",
    "Повышение производительности",
    "Динамическую типизацию"
  ],
  correct: 1,
  explanation: "Инкапсуляция скрывает внутреннюю реализацию и управляет доступом к данным."
},

{
  id: 11,
  topic: "Java / Управление потоком",
  score: 1,
  question: [
    "Внутри вложенного цикла for вы хотите немедленно прекратить выполнение текущего цикла и выйти из него, не завершая остальные итерации. Какое ключевое слово понадобится?"
  ],
  options: [
    "return",
    "continue",
    "stop",
    "exit",
    "break"
  ],
  correct: 4,
  explanation: "break завершает выполнение текущего цикла."
},

{
  id: 12,
  topic: "Java / import",
  score: 1,
  question: [
    "Какой элемент иерархии Java используется для импорта методов и полей другого класса?"
  ],
  options: [
    "package",
    "module",
    "import",
    "extends",
    "implements"
  ],
  correct: 2,
  explanation: "Ключевое слово import используется для подключения классов."
},

{
  id: 13,
  topic: "Java / Collections",
  score: 1,
  question: [
    "Какой метод класса ArrayList возвращает текущее количество элементов в списке?"
  ],
  options: [
    "length()",
    "count()",
    "size()",
    "getSize()",
    "capacity()"
  ],
  correct: 2,
  explanation: "Метод size() возвращает количество элементов."
},

{
  id: 14,
  topic: "Java / String",
  score: 1,
  question: [
    "Какой метод следует использовать для получения длины строки String?"
  ],
  options: [
    "size()",
    "count()",
    "length()",
    "getLength()",
    "charCount()"
  ],
  correct: 2,
  explanation: "Метод length() возвращает длину строки."
},

{
  id: 15,
  topic: "Java / void",
  score: 1,
  question: [
    "Какой тип возвращаемого значения используется у метода, который не возвращает результат?"
  ],
  options: [
    "null",
    "empty",
    "Object",
    "void",
    "None"
  ],
  correct: 3,
  explanation: "void означает отсутствие возвращаемого значения."
},

{
  id: 16,
  topic: "OOP / Инкапсуляция",
  score: 1,
  question: [
    "Что представляет собой геттер в контексте инкапсуляции?"
  ],
  options: [
    "Метод изменения значения поля",
    "Метод доступа к значению поля",
    "Конструктор",
    "Абстрактный метод",
    "Статический метод"
  ],
  correct: 1,
  explanation: "Геттер используется для получения значения поля."
},

{
  id: 17,
  topic: "OOP / Инкапсуляция",
  score: 1,
  question: [
    "Что представляет собой сеттер?"
  ],
  options: [
    "Метод чтения значения",
    "Метод инициализации объекта",
    "Метод установки значения поля",
    "Конструктор класса",
    "Финальный метод"
  ],
  correct: 2,
  explanation: "Сеттер изменяет значение поля объекта."
},

{
  id: 18,
  topic: "Java / Перегрузка",
  score: 1,
  question: [
    "Какое утверждение о перегрузке методов является корректным?"
  ],
  options: [
    "Методы должны отличаться только возвращаемым типом",
    "Методы должны иметь одинаковые параметры",
    "Методы должны иметь разное имя",
    "Методы имеют одинаковое имя, но разные параметры",
    "Методы работают только с static"
  ],
  correct: 3,
  explanation: "Перегрузка — одинаковое имя, разные параметры."
},

{
  id: 19,
  topic: "Java / this",
  score: 1,
  question: [
    "Какое утверждение о ключевом слове this является верным?"
  ],
  options: [
    "this указывает на родительский класс",
    "this используется только в static методах",
    "this ссылается на текущий объект",
    "this заменяет super",
    "this запрещён в конструкторах"
  ],
  correct: 2,
  explanation: "this указывает на текущий экземпляр класса."
},

{
  id: 20,
  topic: "Java / Конструкторы",
  score: 1,
  question: [
    "Какова основная задача конструктора?"
  ],
  options: [
    "Удаление объекта",
    "Вызов main метода",
    "Инициализация объекта",
    "Сравнение объектов",
    "Завершение программы"
  ],
  correct: 2,
  explanation: "Конструктор инициализирует объект при создании."
},

{
  id: 21,
  topic: "OOP / Классы",
  score: 1,
  question: [
    "Как лучше всего описать класс?"
  ],
  options: [
    "Набор статических методов",
    "Шаблон для создания объектов",
    "Переменная ссылочного типа",
    "Алгоритм выполнения программы",
    "Файл с исходным кодом"
  ],
  correct: 1,
  explanation: "Класс — это шаблон (модель) для создания объектов."
},

{
  id: 22,
  topic: "OOP / Наследование",
  score: 1,
  question: [
    "Какой тип наследования не поддерживается напрямую для классов в Java?"
  ],
  options: [
    "Одиночное наследование",
    "Многоуровневое наследование",
    "Иерархическое наследование",
    "Множественное наследование",
    "Наследование через интерфейсы"
  ],
  correct: 3,
  explanation: "Java не поддерживает множественное наследование классов."
},

{
  id: 23,
  topic: "OOP / Абстрактные классы",
  score: 1,
  question: [
    "Какое утверждение об абстрактных классах является корректным?"
  ],
  options: [
    "Абстрактный класс нельзя расширять",
    "Абстрактный класс не может иметь реализацию методов",
    "Нельзя создать объект абстрактного класса",
    "Абстрактный класс не может иметь конструктор",
    "Абстрактный класс не может содержать поля"
  ],
  correct: 2,
  explanation: "Экземпляры абстрактных классов создавать нельзя."
},

{
  id: 24,
  topic: "Java / switch",
  score: 1,
  question: [
`Какой вариант правильно использует конструкцию switch-case для ввода значения типа int (s) с помощью класса Scanner?

int s = new Scanner(System.in).nextInt();`
  ],
  options: [
    "switch(s) { case int: ... }",
    "switch(s) { case 1: break; }",
    "switch(int s) { ... }",
    "switch { case s: ... }",
    "case(s) { switch ... }"
  ],
  correct: 1,
  explanation: "Корректный switch использует значения case и оператор break."
},

{
  id: 25,
  topic: "Java / String",
  score: 1,
  question: [
`Что произойдёт при выполнении следующего кода?

String s = null;
System.out.println(s.length());`
  ],
  options: [
    "Будет выведено 0",
    "Будет выведено null",
    "Ошибка компиляции",
    "NullPointerException",
    "IllegalArgumentException"
  ],
  correct: 3,
  explanation: "Вызов метода у null приводит к NullPointerException."
},

{
  id: 26,
  topic: "Java / throws",
  score: 1,
  question: [
    "Зачем в сигнатуре метода указывается ключевое слово throws?"
  ],
  options: [
    "Для перехвата исключений",
    "Для игнорирования исключений",
    "Для объявления возможных исключений",
    "Для генерации исключений",
    "Для завершения программы"
  ],
  correct: 2,
  explanation: "throws объявляет исключения, которые метод может выбросить."
},

{
  id: 27,
  topic: "Java / try-catch",
  score: 1,
  question: [
    "Как ведёт себя блок finally в конструкции try-catch?"
  ],
  options: [
    "Выполняется только при ошибке",
    "Никогда не выполняется",
    "Выполняется всегда (почти всегда)",
    "Выполняется только без ошибок",
    "Заменяет catch"
  ],
  correct: 2,
  explanation: "finally выполняется независимо от возникновения исключения."
},

{
  id: 28,
  topic: "Java / Исключения",
  score: 1,
  question: [
    "Какие из перечисленных исключений относятся к проверяемым (checked)?"
  ],
  options: [
    "NullPointerException",
    "ArithmeticException",
    "IOException",
    "ArrayIndexOutOfBoundsException",
    "RuntimeException"
  ],
  correct: 2,
  explanation: "IOException — проверяемое исключение."
},

{
  id: 29,
  topic: "OOP / Абстракция",
  score: 1,
  question: [
    "Какова основная цель применения абстракции в объектно-ориентированном программировании?"
  ],
  options: [
    "Ускорение работы программы",
    "Сокрытие деталей реализации",
    "Управление памятью",
    "Создание объектов",
    "Обработка исключений"
  ],
  correct: 1,
  explanation: "Абстракция скрывает детали реализации и упрощает использование."
},

{
  id: 30,
  topic: "Java / Интерфейсы",
  score: 1,
  question: [
    "Чем по своему смыслу является объявление интерфейса?"
  ],
  options: [
    "Реализацией методов",
    "Контрактом поведения",
    "Конкретным классом",
    "Коллекцией данных",
    "Исключением"
  ],
  correct: 1,
  explanation: "Интерфейс задаёт контракт, который должен быть реализован."
},

{
  id: 31,
  topic: "Java / instanceof",
  score: 1,
  question: [
    "Для чего используется оператор instanceof?"
  ],
  options: [
    "Для создания объекта",
    "Для сравнения строк",
    "Для проверки типа объекта",
    "Для приведения типов",
    "Для наследования"
  ],
  correct: 2,
  explanation: "instanceof проверяет принадлежность объекта типу."
},

{
  id: 32,
  topic: "Java / try-with-resources",
  score: 1,
  question: [
    "Для чего предназначен механизм try-with-resources?"
  ],
  options: [
    "Для обработки логики if",
    "Для автоматического закрытия ресурсов",
    "Для генерации исключений",
    "Для многопоточности",
    "Для оптимизации памяти"
  ],
  correct: 1,
  explanation: "Ресурсы автоматически закрываются после выполнения блока."
},

{
  id: 33,
  topic: "Java / catch",
  score: 1,
  question: [
    "Зачем используется синтаксис catch (IOException | SQLException e)?"
  ],
  options: [
    "Для вложенных исключений",
    "Для игнорирования исключений",
    "Для перехвата нескольких типов исключений",
    "Для генерации новых исключений",
    "Для логирования"
  ],
  correct: 2,
  explanation: "Multi-catch позволяет обрабатывать несколько исключений."
},

{
  id: 34,
  topic: "Java / System",
  score: 1,
  question: [
    "Какой класс отвечает за вывод в консоль в Java (System.out)?"
  ],
  options: [
    "PrintWriter",
    "Console",
    "InputStream",
    "PrintStream",
    "Writer"
  ],
  correct: 3,
  explanation: "System.out — объект класса PrintStream."
},

{
  id: 35,
  topic: "Java / InputStream",
  score: 1,
  question: [
    "Какой метод InputStream читает один байт данных?"
  ],
  options: [
    "read()",
    "readLine()",
    "readByte()",
    "next()",
    "get()"
  ],
  correct: 0,
  explanation: "read() читает один байт и возвращает int."
},

{
  id: 36,
  topic: "Java / File",
  score: 1,
  question: [
    "Что возвращает метод File.length()?"
  ],
  options: [
    "Количество строк",
    "Размер файла в байтах",
    "Имя файла",
    "Тип файла",
    "Путь к файлу"
  ],
  correct: 1,
  explanation: "File.length() возвращает размер файла в байтах."
},

{
  id: 37,
  topic: "Java / Потоки",
  score: 1,
  question: [
    "Какой класс преобразует байтовый поток в символьный?"
  ],
  options: [
    "FileInputStream",
    "BufferedInputStream",
    "InputStreamReader",
    "OutputStream",
    "ByteArrayInputStream"
  ],
  correct: 2,
  explanation: "InputStreamReader преобразует байты в символы."
},

{
  id: 38,
  topic: "Java / Scanner",
  score: 1,
  question: [
    "Какой метод класса Scanner читает строку полностью?"
  ],
  options: [
    "next()",
    "readLine()",
    "nextLine()",
    "getLine()",
    "scan()"
  ],
  correct: 2,
  explanation: "nextLine() читает всю строку целиком."
},

{
  id: 39,
  topic: "Java / I/O",
  score: 1,
  question: [
    "Что в Java понимается под потоками ввода-вывода?"
  ],
  options: [
    "Параллельные потоки выполнения",
    "Способы передачи данных",
    "Коллекции данных",
    "Интерфейсы",
    "Исключения"
  ],
  correct: 1,
  explanation: "Потоки обеспечивают передачу данных."
},

{
  id: 40,
  topic: "Java / I/O",
  score: 1,
  question: [
    "На какие категории делятся потоки ввода-вывода?"
  ],
  options: [
    "Текстовые и числовые",
    "Синхронные и асинхронные",
    "Байтовые и символьные",
    "Внутренние и внешние",
    "Простые и сложные"
  ],
  correct: 2,
  explanation: "Потоки бывают байтовые и символьные."
},

{
  id: 41,
  topic: "Java / File",
  score: 1,
  question: [
    "Каково назначение класса java.io.File?"
  ],
  options: [
    "Чтение данных из файла",
    "Запись данных в файл",
    "Работа с метаданными файлов и каталогов",
    "Сериализация объектов",
    "Буферизация данных"
  ],
  correct: 2,
  explanation: "File описывает файл или каталог и работает с их метаданными."
},

{
  id: 42,
  topic: "Java / Полиморфизм",
  score: 1,
  question: [
`Дан следующий код:

class Parent {
    int calculate(int a, int b) {
        return (a + b) * 2;
    }
}
class Child extends Parent {
    @Override
    int calculate(int a, int b) {
        int parentResult = super.calculate(a, b);
        return parentResult - (a * b) + (a - b);
    }
}
public class Main {
    public static void main(String[] args) {
        Parent obj = new Child();
        System.out.println(obj.calculate(5, 3));
    }
}

Что будет выведено в консоль?`
  ],
  options: [
    "16",
    "18",
    "3",
    "5",
    "Ошибка компиляции"
  ],
  correct: 2,
  explanation: "super.calculate(5,3)=16; 16 - 15 + 2 = 3."
},

{
  id: 43,
  topic: "OOP / Инкапсуляция",
  score: 1,
  question: [
`Какой принцип ООП используется для ограничения доступа к radius?

class Circle {
    private double radius = 5;
    double getRadius() {
        return radius + 2;
    }
}`
  ],
  options: [
    "Наследование",
    "Полиморфизм",
    "Инкапсуляция",
    "Абстракция",
    "Композиция"
  ],
  correct: 2,
  explanation: "Модификатор private — пример инкапсуляции."
},

{
  id: 44,
  topic: "Java / Методы",
  score: 1,
  question: [
`Какой будет вывод следующей программы?

class Circle {
    private double radius = 5;
    double getRadius() {
        return radius + 2;
    }
    public static void main(String[] args) {
        Circle c = new Circle();
        System.out.println("Радиус: " + c.getRadius());
    }
}`
  ],
  options: [
    "Радиус: 5",
    "Радиус: 7",
    "Радиус: 2",
    "Ошибка компиляции",
    "RuntimeException"
  ],
  correct: 1,
  explanation: "Метод возвращает radius + 2 → 7."
},

{
  id: 45,
  topic: "Java / Полиморфизм",
  score: 1,
  question: [
`Какой будет вывод следующей программы?`
  ],
  options: [
    "16",
    "3",
    "18",
    "Ошибка компиляции",
    "5"
  ],
  correct: 1,
  explanation: "Используется переопределённый метод класса Child."
},

{
  id: 46,
  topic: "Java / Конструкторы",
  score: 1,
  question: [
`Какой порядок вывода сообщений?

class Battery {
    Battery(int capacity) {
        System.out.println("Батарея установлена: " + capacity + " мАч");
    }
}
class Phone {
    Battery power;
    Phone(int capacity) {
        power = new Battery(capacity);
        System.out.println("Телефон собран.");
    }
    void turnOn() {
        System.out.println("Телефон включается...");
        System.out.println("Загрузка системы завершена!");
    }
    public static void main(String[] args) {
        Phone p = new Phone(5000);
        p.turnOn();
    }
}`
  ],
  options: [
    "Телефон собран → Батарея → Включение",
    "Батарея → Телефон собран → Включение",
    "Включение → Батарея → Телефон",
    "Ошибка компиляции",
    "Только Battery"
  ],
  correct: 1,
  explanation: "Сначала создаётся Battery, затем Phone, потом вызов turnOn."
},

{
  id: 47,
  topic: "Java / Инкапсуляция",
  score: 1,
  question: [
`Как корректно получить возраст объекта Person?`
  ],
  options: [
    "person.age",
    "getAge()",
    "Person.age",
    "this.age",
    "age"
  ],
  correct: 1,
  explanation: "Поле private, доступ через геттер."
},

{
  id: 48,
  topic: "Java / static",
  score: 1,
  question: [
`Что верно относительно объекта species?`
  ],
  options: [
    "Принадлежит объекту",
    "Создаётся для каждого экземпляра",
    "Принадлежит классу",
    "Изменяется через this",
    "Недоступен без объекта"
  ],
  correct: 2,
  explanation: "static-поле принадлежит классу."
},

{
  id: 49,
  topic: "Java / this",
  score: 1,
  question: [
`Что будет выведено в консоль?

class Movie {
    private String name;
    void setName(String name) {
        name = name;
    }
    void showInfo() {
        System.out.println("Название фильма: " + name);
    }
}`
  ],
  options: [
    "Название фильма: Ghostbusters",
    "Название фильма: null",
    "Ошибка компиляции",
    "RuntimeException",
    "Пустая строка"
  ],
  correct: 1,
  explanation: "this.name не используется, поле остаётся null."
},

{
  id: 50,
  topic: "Java / this",
  score: 1,
  question: [
"Как исправить метод setName?"
  ],
  options: [
    "name = name;",
    "this.name = this.name;",
    "this.name = name;",
    "name.this = name;",
    "static name = name;"
  ],
  correct: 2,
  explanation: "this.name указывает на поле объекта."
},

{
  id: 51,
  topic: "Java / Арифметика",
  score: 1,
  question: [
`Что будет выведено?

byte x = 10;
short y = 20;
int z = 30;
double result = x + y * z / 2.0;
System.out.println(result);`
  ],
  options: [
    "300",
    "310",
    "310.0",
    "305.0",
    "Ошибка компиляции"
  ],
  correct: 2,
  explanation: "20*30/2.0 = 300.0; +10 = 310.0."
},

{
  id: 52,
  topic: "Java / File",
  score: 1,
  question: [
"Какой метод создаёт файл, если он не существует?"
  ],
  options: [
    "open()",
    "new File()",
    "createNewFile()",
    "exists()",
    "mkdir()"
  ],
  correct: 2,
  explanation: "createNewFile() создаёт файл."
},

{
  id: 53,
  topic: "Java / File",
  score: 1,
  question: [
"Что произойдёт при попытке открыть несуществующий файл?"
  ],
  options: [
    "Создастся файл",
    "Вернётся null",
    "IOException",
    "FileNotFoundException",
    "Ошибка компиляции"
  ],
  correct: 3,
  explanation: "Будет выброшено FileNotFoundException."
},

{
  id: 54,
  topic: "Java / FileOutputStream",
  score: 1,
  question: [
"Как поведёт себя программа при повторных запусках?"
  ],
  options: [
    "Файл перезапишется",
    "Данные допишутся",
    "Файл удалится",
    "Ошибка",
    "Ничего не произойдёт"
  ],
  correct: 1,
  explanation: "true включает режим добавления."
},

{
  id: 55,
  topic: "Java / FileOutputStream",
  score: 1,
  question: [
"Для чего используется параметр true в FileOutputStream?"
  ],
  options: [
    "Буферизация",
    "Перезапись",
    "Добавление в конец файла",
    "Чтение файла",
    "Закрытие потока"
  ],
  correct: 2,
  explanation: "true — режим append."
},

{
  id: 56,
  topic: "Java / InputStream",
  score: 1,
  question: [
"Что означает значение -1, возвращаемое методом read()?"
  ],
  options: [
    "Ошибка",
    "Пустой байт",
    "Конец файла",
    "Начало файла",
    "Null"
  ],
  correct: 2,
  explanation: "-1 означает конец потока."
},

{
  id: 57,
  topic: "Java / I/O",
  score: 1,
  question: [
"Почему FileOutputStream не подходит для строк напрямую?"
  ],
  options: [
    "Работает только с int",
    "Работает с байтами",
    "Не поддерживает Unicode",
    "Медленный",
    "Закрывается автоматически"
  ],
  correct: 1,
  explanation: "FileOutputStream работает с байтами."
},

{
  id: 58,
  topic: "Java / Исключения",
  score: 1,
  question: [
"Какое исключение является базовым для I/O?"
  ],
  options: [
    "RuntimeException",
    "IOException",
    "FileNotFoundException",
    "Exception",
    "Error"
  ],
  correct: 1,
  explanation: "IOException — базовое I/O-исключение."
},

{
  id: 59,
  topic: "Java / Reader",
  score: 1,
  question: [
"Какой класс лучше использовать для чтения текста?"
  ],
  options: [
    "FileInputStream",
    "BufferedInputStream",
    "InputStreamReader",
    "ObjectInputStream",
    "ByteArrayInputStream"
  ],
  correct: 2,
  explanation: "InputStreamReader работает с символами."
},

{
  id: 60,
  topic: "Java / Безопасность",
  score: 1,
  question: [
"Какое исключение возникает при записи без прав?"
  ],
  options: [
    "IOException",
    "SecurityException",
    "FileNotFoundException",
    "AccessDeniedException",
    "RuntimeException"
  ],
  correct: 1,
  explanation: "SecurityException при отсутствии прав."
},

{
  id: 61,
  topic: "Patterns / Strategy",
  score: 1,
  question: [
"Что важно для применения паттерна Strategy?"
  ],
  options: [
    "Наследование",
    "Инкапсуляция алгоритмов",
    "Singleton",
    "static-методы",
    "final-классы"
  ],
  correct: 1,
  explanation: "Strategy инкапсулирует алгоритмы."
},

{
  id: 62,
  topic: "Patterns / Factory Method",
  score: 1,
  question: [
"Где находится точка расширения Factory Method?"
  ],
  options: [
    "В интерфейсе",
    "В клиентском коде",
    "В подклассах",
    "В main",
    "В static блоке"
  ],
  correct: 2,
  explanation: "Создание объектов делегируется подклассам."
},

{
  id: 63,
  topic: "Patterns / Factory Method",
  score: 1,
  question: [
"Что отделяет создание объектов от использования?"
  ],
  options: [
    "Инкапсуляция",
    "Абстракция",
    "Фабричный метод",
    "Наследование",
    "Полиморфизм"
  ],
  correct: 2,
  explanation: "Factory Method."
},

{
  id: 64,
  topic: "Java / Collections",
  score: 1,
  question: [
"Какой принцип применять при объявлении переменной names?"
  ],
  options: [
    "Использовать реализацию",
    "Использовать интерфейс",
    "Использовать static",
    "Использовать final",
    "Использовать массив"
  ],
  correct: 1,
  explanation: "Программирование на уровне интерфейса."
},

{
  id: 65,
  topic: "Java / Map",
  score: 1,
  question: [
"Что представляет собой Map.Entry?"
  ],
  options: [
    "Ключ",
    "Значение",
    "Пару ключ-значение",
    "Map",
    "Iterator"
  ],
  correct: 2,
  explanation: "Map.Entry — пара ключ-значение."
},

{
  id: 66,
  topic: "Java / System.out",
  score: 1,
  question: [
"Как перенаправить System.out в файл?"
  ],
  options: [
    "Через Scanner",
    "Через File",
    "Через PrintStream",
    "Через Reader",
    "Нельзя"
  ],
  correct: 2,
  explanation: "System.setOut(new PrintStream(...))"
},

{
  id: 67,
  topic: "Patterns / Singleton",
  score: 1,
  question: [
"Основное назначение Singleton?"
  ],
  options: [
    "Создание семейства объектов",
    "Ограничение одним экземпляром",
    "Инкапсуляция логики",
    "Выбор алгоритма",
    "Расширение поведения"
  ],
  correct: 1,
  explanation: "Singleton гарантирует один экземпляр."
},

{
  id: 68,
  topic: "Patterns / Factory",
  score: 1,
  question: [
"Какой паттерн подходит для Email/SMS уведомлений?"
  ],
  options: [
    "Singleton",
    "Observer",
    "Factory Method",
    "Strategy",
    "Builder"
  ],
  correct: 2,
  explanation: "Factory Method создаёт нужный тип."
},

{
  id: 69,
  topic: "Patterns / Observer",
  score: 1,
  question: [
"Какую задачу решает Observer?"
  ],
  options: [
    "Создание объектов",
    "Уведомление об изменениях",
    "Выбор алгоритма",
    "Хранение состояния",
    "Инкапсуляция"
  ],
  correct: 1,
  explanation: "Observer уведомляет подписчиков."
},

{
  id: 70,
  topic: "Patterns / Strategy",
  score: 1,
  question: [
"Какой паттерн выбирает способ оплаты во время выполнения?"
  ],
  options: [
    "Factory",
    "Singleton",
    "Observer",
    "Strategy",
    "Builder"
  ],
  correct: 3,
  explanation: "Strategy позволяет менять поведение."
},

{
  id: 71,
  topic: "Patterns / Builder",
  score: 1,
  question: [
"Какой паттерн использовать для создания Computer?"
  ],
  options: [
    "Factory",
    "Builder",
    "Singleton",
    "Strategy",
    "Observer"
  ],
  correct: 1,
  explanation: "Builder подходит для сложных объектов."
},

{
  id: 72,
  topic: "Java / File",
  score: 1,
  question: [
"Файл отсутствует. Что выведется?"
  ],
  options: [
    "true",
    "false",
    "null",
    "Ошибка",
    "0"
  ],
  correct: 1,
  explanation: "file.exists() вернёт false."
},

{
  id: 73,
  topic: "Java / FileOutputStream",
  score: 1,
  question: [
`Какой символ будет записан?

out.write(65);`
  ],
  options: [
    "1",
    "65",
    "A",
    "B",
    "Ошибка"
  ],
  correct: 2,
  explanation: "65 — ASCII код символа 'A'."
}

];