---
title: "Mastering OOP concepts in JAVA"
sidebar_label: OOPs in Java
authors: [dharshibalasubramaniyam]
tags: [oop, java, best-practices]
date: 2024-06-18
hide_table_of_contents: true
---

Programing paradigms are approaches to write code, each with its own principles, concepts and guidelines. These paradigms guide how developers structure and organize their programs, as well as how they think about problem-solving.

<!-- truncate -->

Here are some common programming paradigms.

- Imperative Programming: Imperative programming is based on the idea of giving the computer a sequence of instructions to perform. Eg., C, Assembly
- Declarative Programing: Declarative programming emphasizes expressing what should be accomplished rather than how to achieve it. Eg., SQL
- Functional Programming: Functional programming treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. It emphasizes the use of pure functions, higher-order functions, and immutable data structures. Eg., Haskell, Lisp, and Clojure
- Object-Oriented Programming (OOP): Object-oriented programming organizes code around objects, representing real-world entities or abstract concepts. Eg., Java, Python, C++
- Procedural Programming: Procedural programming emphasizes the use of procedures (functions or routines) to structure code. It focuses on breaking down a problem into a set of procedures that perform specific tasks, with an emphasis on modularity and reusability. Eg., C, Fortran
- Event-Driven Programming: Event-driven programming focuses on responding to events or user actions, such as mouse clicks or keyboard inputs. It typically involves event listeners or handlers that execute in response to specific events. GUI (Graphical User Interface) programming often follows this paradigm.

In this article I am going to discuss about one of the most important programing paradigms, Object Oriented Programing (OOP) in JAVA.

As I mentioned earlier,

OOP, which is a programming paradigm or methodology used in software development whose fundamental building blocks are objects.

- OOP promotes the organization of code into modular and reusable components, making it easier to manage and maintain complex software systems. OOP is widely used in software development for its ability to model real-world entities and their relationships effectively.

- OOP is based on many key principles. Let’s go through one-by-one principles with explanations and examples.

## Object

- In Object-Oriented Programming (OOP), objects are the fundamental building blocks and the key concept.
- Objects represent real-world entities or concepts in the context of a software program.
- Examples: Student, Book, Hospital, Cart and so on…

## Class

- An object can have 2 things to describe itself. They are properties and behaviors.
- Imagine you’re talking about a cat. One might be sleek and black, while another is fluffy and brown. Each cat has its own unique combination of traits.
- So, how do we capture the essence of a cat in a way that fits all these variations? Enter the concept of a ‘class.’
- A class is like a blueprint for creating objects. It’s a plan that defines the properties (like color, size, and breed) and behaviors (such as meowing, sleeping, and chasing mice) that all cats shares.
- Think of class as a template that provides a common idea of what a particular object is, allowing us to create individual instances of that object with their own distinct characteristics.
- Classes in object-oriented programming (OOP) represent properties and behaviors of objects through attributes and methods, respectively.
- Properties (Attributes): Properties are the characteristics or data associated with an object. In classes, properties are defined as variables. Each instance of a class (object) has its own set of properties.For example, in a class representing a “Student”, properties could include “name”, “age”, “major”, and “GPA”.
- Behaviors (Methods): Behaviors are the actions or operations that an object can perform. In classes, behaviors are defined as methods or functions. Methods operate on the data stored in the object’s properties. For example, in the “Student” class, methods could include “study”, “attend class”, “take exam”, and “submit assignment”.

Let’s see a simple example in Java to illustrate how a class represents properties and behaviors.

```
// Define a class representing a Student
public class Student {
    // Properties (attributes)
    private String name;
    private int age;
    private String major;

    // Method to study
    public void study() {
        System.out.println(name + " is studying " + major + ".");
    }

    // Method to attend class
    public void attendClass() {
        System.out.println(name + " is attending class.");
    }

    // Method to take an exam
    public void takeExam() {
        System.out.println(name + " is taking an exam.");
    }

    // Method to submit assignment
    public void submitAssignment() {
        System.out.println(name + " is submitting an assignment.");
    }

}
```

- In this example, the “Student” class represents a student with properties (name, age, major) and behaviors (study, attendClass, takeExam, submitAssignment). Each instance of the “Student” class will have its own set of properties and can perform the defined behaviors.

- Now that we’ve defined our class, let’s dive into how we can bring it to life by creating instances of it — essentially, the objects themselves. This process introduces us to a vital concept in OOP: the constructor.

## Constructors

- A constructor is a special method within a class responsible for initializing new objects.
- Think of it as the gateway through which we breathe life into our class, providing initial values for its properties.
- When we create a new instance of a class, we call upon its constructor to set up the object’s initial state.
- Constructors have the same name as the class and do not have a return type, not even void.
- To create a new student object, we use the ‘new’ keyword followed by the class name, along with any required arguments for the constructor.
- There are different types of constructors:

### Default Constructor:

- If a class does not explicitly define any constructors, Java provides a default constructor with no arguments. The default constructor initializes the object’s attributes to default values (e.g., numeric types to 0, object references to null).

```
// Define a class representing a Student
public class Student {
    // Properties (attributes)
    private String name;
    private int age;
    private String major;

    // Default Constructor
    // (will discuss about `this` keyword later in this aricle)
    public Student() {
        this.name = "Unknown";
        this.age = 0;
        this.major = "Undeclared";
    }

    // Other methods...

}
// Creating a student object using the default constructor
Student john = new Student();
```

### Parameterized Constructors:

- Constructors can accept parameters to initialize the object with specific values. You can define multiple constructors with different parameter lists, allowing for constructor overloading.

```
public class Student {
    private String name;
    private int age;
    private String major;

    // Parameterized Constructor
    public Student(String name, int age, String major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }

    // Other methods...
}
// Creating a student object using the parameterized constructor
Student alice = new Student("Alice", 20, "Computer Science");
```

### Copy constructor:

- A copy constructor creates a new object by copying the values of another object. It’s used to create a new object that is a copy of an existing one.

```
public class Student {
    private String name;
    private int age;
    private String major;

    // Copy Constructor
    public Student(Student otherStudent) {
        this.name = otherStudent.name;
        this.age = otherStudent.age;
        this.major = otherStudent.major;
    }

    // Other methods...
}

// Creating a student object using another student object (copy constructor)
Student bob = new Student(alice);
```

Now, we have created objects right. How can we access the properties of a particular object? Let’s check it out next.

## Accessing attributes and methods of an object

- To access the properties of a particular object in Java, we can use dot notation (.) followed by the name of the attribute or method name.

```
// Creating a student object using the parameterized constructor
Student alice = new Student("Alice", 20, "Computer Science");

// Accessing properties of the 'alice' object
String aliceName = alice.name;
int aliceAge = alice.age;
String aliceMajor = alice.major;

// modifing properties of the 'alice' object
alice.name = "Alice Mark";
alice.age = 22;
alice.major = "Software Engineering";

// Accessing methods of the 'alice' object
alice.study();
alice.attendClass();
alice.takeExam();
alice.submitAssignment();
```

## 'this' keyword in JAVA

- The this keyword in Java is a reference to the current object within a method or constructor. It's a special reference that allows you to access the current object's properties, methods, or constructors from within its own class.
- Accessing Instance Variables: You can use this to refer to instance variables of the current object when there's a naming conflict with method parameters or local variables.

```
public class Student {
    private String name;

    public void setName(String name) {
        this.name = name; // changed the name of the object which called this method
    }
}
```

- Calling Another Constructor: In a constructor, you can use this() to call another constructor in the same class. This is often used to reduce code duplication and initialize common properties.

```
public class Student {
    private String name;
    private int age;
    private String major;

    // modified default constructor
    public Student() {
        this("Unknown", 0, "Undeclared"); // Calls the parameterized constructor with default values
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

- Passing Current Object as a Parameter: You can use this to pass the current object as a parameter to other methods or constructors.

```
public class Student {
    private String name;

    public void printName() {
        printFullName(this); // Passing the current object as a parameter
    }

    private void printFullName(Student student) {
        System.out.println(student.name);
    }
}
```

## Access Modifiers

- Access modifiers are keywords used to control the visibility or accessibility of classes, methods, and variables within a Java program.
- They determine which parts of your code can be accessed or modified from other parts of your program, as well as from external code.
- Java has four main access modifiers:

  1.  public: The public access modifier makes the class, method, or variable accessible from any other class.

  2.  protected: The protected access modifier allows access to the member within the same package or by subclasses (will discuss later about subclasses), even if they are in a different package. It restricts access to classes outside the package unless they are subclasses of the class containing the protected member.

  3.  default (no modifier): If no access modifier is specified, the default access level is package-private. Members with default access are accessible only within the same package. They cannot be accessed from outside the package, even by subclasses.

  4.  private: The private access modifier restricts access to the member only within the same class. It is the most restrictive access level and prevents access from outside the class, including subclasses.

let’s demonstrate the use of access modifiers with the Student class we used earlier.

```
public class Student {
    // Public access modifier
    public String name;

    // Protected access modifier
    protected int age;

    // Default (package-private) access modifier
    String major;

    // Private access modifier
    private double gpa;

    // Constructor
    public Student(String name, int age, String major, double gpa) {
        this.name = name;
        this.age = age;
        this.major = major;
        this.gpa = gpa;
    }

    // Public method
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Major: " + major);
        System.out.println("GPA: " + gpa);
    }

    // Protected method
    protected void study() {
        System.out.println(name + " is studying.");
    }

    // Default method (package-private)
    void attendClass() {
        System.out.println(name + " is attending class.");
    }

    // Private method
    private void calculateGPA() {
        // GPA calculation logic
    }
}
```

## Encapsulation

- Encapsulation refers to the bundling of data (attributes) and methods (functions) that operate on an object into a single unit, often referred to as a class.
- Encapsulation hides the internal state and implementation details of an object from the outside world, providing controlled access to the object’s properties and behaviors.
- The primary goal of encapsulation is to restrict access to some of the object’s components, while exposing only what is necessary and safe for the outside world.
- In Java, encapsulation is achieved using access modifiers (public, private, protected, and default) to control the visibility and accessibility of class members (attributes and methods).
- key principles and practices related to encapsulation in Java:
  1. Declare the attributes (fields) of a class as private.
  2. Provide public methods (getters and setters) to access and manipulate the private fields. Getters allow read-only access, and setters allow modification, ensuring controlled access to the data.
  3. Let’s achieve encapsulation in previously discussed Car class by declaring attributes as private and providing getters and setters .

```
public class Student {
    // Private data members (attributes)
    // hence cannot access or modify directly using dot (.) operator
    private String name;
    private int age;
    private String major;

    // Constructor
    public Student(String name, int age, String major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }

    // Getter methods (accessors)
    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getMajor() {
        return major;
    }

    // Setter methods (mutators)
    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    // Display student information
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Major: " + major);
        System.out.println("GPA: " + gpa);
    }

}
```

- The Student class encapsulates data members (name, age, major) by declaring them as private.
- Getter methods (getName(), getAge(), getMajor()) provide controlled access to retrieve the values of the private attributes.
- Setter methods (setName(), setAge(), setMajor()) allow controlled modification of the private attributes, ensuring data integrity.

```
public class Main {
    public static void main(String[] args) {
        // Creating a new student object
        Student alice = new Student("Alice", 20, "Computer Science", 3.5);

        // Displaying Alice's information using getter methods
        System.out.println("Student Information:");
        System.out.println("Name: " + alice.getName());
        System.out.println("Age: " + alice.getAge());
        System.out.println("Major: " + alice.getMajor());
        System.out.println("GPA: " + alice.getGpa());

        // Updating Alice's information using setter methods
        alice.setAge(21);
        alice.setGpa(3.7);

        // Displaying Alice's updated information
        System.out.println("\nUpdated Student Information:");
        alice.displayInfo();
    }
}
```

- Encapsulation is a key principle in Java and other object-oriented languages that promotes data integrity, code maintainability, and code security by controlling access to the internal state of objects. It is an essential practice for creating well-structured and robust Java programs.

## Inheritance

- Inheritance is a key concept in object-oriented programming (OOP) that allows a new class (called a subclass or derived class) to inherit attributes and methods from an existing class (called a superclass or base class).
- The subclass can then extend or modify the behavior of the superclass while also inheriting its properties.
- Superclass (Base Class): The class whose members (attributes and methods) are inherited by another class is known as the superclass or base class.
- Subclass (Derived Class): The class that inherits the members from a superclass is called the subclass or derived class. A subclass can have its own additional members and can also override or extend the members inherited from the superclass.
- IS-A Relationship: Inheritance establishes an “is-a” relationship between the subclass and the superclass, indicating that the subclass is a specialized version of the superclass. For example, if Dog is a subclass of Animal, then it can be said that "a dog is an animal."
- “extends” Keyword: In Java, you specify inheritance using the “extends” keyword when defining a class. A subclass is created as a specialization of the superclass.
- “super” keyword: In Java, the super keyword is used to refer to the superclass (parent class) of the current subclass (child class). It allows you to access and call members (attributes or methods) of the superclass, as well as explicitly call the superclass’s constructor.

Let’s create a subclass of the Student class called UndergraduateStudent.

```
public class UndergraduateStudent extends Student {
    // Additional attributes specific to undergraduate students
    private int yearLevel;

    // Constructor for UndergraduateStudent
    public UndergraduateStudent(String name, int age, String major, int yearLevel) {
        // Call the constructor of the superclass (Student)
        super(name, age, major);
        this.yearLevel = yearLevel;
    }

    // Getter method for yearLevel
    public int getYearLevel() {
        return yearLevel;
    }

    // Setter method for yearLevel
    public void setYearLevel(int yearLevel) {
        this.yearLevel = yearLevel;
    }

    // Method specific to undergraduate students
    public void enrollCourse(String courseName) {
        System.out.println(getName() + " is enrolled in " + courseName);
    }
}
```

let’s create another subclass of the Student class called GraduateStudent.

```
public class GraduateStudent extends Student {
    // Additional attributes specific to graduate students
    private String advisor;
    private String researchTopic;

    // Constructor for GraduateStudent
    public GraduateStudent(String name, int age, String major, String advisor, String researchTopic) {
        // Call the constructor of the superclass (Student)
        super(name, age, major);
        this.advisor = advisor;
        this.researchTopic = researchTopic;
    }

    // Getter method for advisor
    public String getAdvisor() {
        return advisor;
    }

    // Setter method for advisor
    public void setAdvisor(String advisor) {
        this.advisor = advisor;
    }

    // Getter method for researchTopic
    public String getResearchTopic() {
        return researchTopic;
    }

    // Setter method for researchTopic
    public void setResearchTopic(String researchTopic) {
        this.researchTopic = researchTopic;
    }

    // Method specific to graduate students
    public void conductResearch() {
        System.out.println(getName() + " is conducting research on " + researchTopic);
    }
}
```

Example for accessing properties of both the superclass (Student) and the subclass (GraduateStudent).

```
public class Main {
    public static void main(String[] args) {
        // Creating a GraduateStudent object
        GraduateStudent gradStudent = new GraduateStudent("John", 25, "Computer Science", "Dr. Smith", "Machine Learning");

        // Accessing properties of the superclass (Student)
        System.out.println("Student Information:");
        System.out.println("Name: " + gradStudent.getName());
        System.out.println("Age: " + gradStudent.getAge());
        System.out.println("Major: " + gradStudent.getMajor());

        // Accessing properties of the subclass (GraduateStudent)
        System.out.println("\nGraduate Student Information:");
        System.out.println("Advisor: " + gradStudent.getAdvisor());
        System.out.println("Research Topic: " + gradStudent.getResearchTopic());

        // Calling methods of the superclass
        System.out.println("\nDisplaying student information:");
        gradStudent.displayInfo(); // Calling superclass method

        // Calling methods of the subclass
        System.out.println("\nConducting research:");
        gradStudent.conductResearch(); // Calling subclass method
    }
}
```

### Types of inheritance

1. Single inheritance

- In single inheritance, a subclass inherits from only one superclass.
- Java supports single inheritance, where a class can have only one direct superclass.
- Example: Class Dog inherits from class Animal.

2. Multilevel Inheritance

- In multilevel inheritance, a subclass inherits from another subclass, forming a chain of inheritance.
- Each subclass in the chain inherits properties and behaviors from its immediate superclass.
- Example: Class GrandChild inherits from class Child, which in turn inherits from class Parent.

3. Hierarchical Inheritance

- In hierarchical inheritance, multiple subclasses inherit from a single superclass.
- Each subclass shares common properties and behaviors inherited from the same superclass.
- Example: Classes Cat, Dog, and Rabbit all inherit from class Animal.

4. Multiple Inheritance (Not Supported in Java)

- Multiple inheritance allows a subclass to inherit from multiple superclasses.
- While Java doesn’t support multiple inheritance of classes, it supports multiple inheritance of interfaces through interface implementation.
- Example: Class Student inherits from both class Person and class Scholar.

5. Hybrid Inheritance (Not Supported in Java)

- Hybrid inheritance is a combination of two or more types of inheritance.
- It can involve single, multilevel, and hierarchical inheritance, along with multiple inheritance if supported by the programming language.
- Java doesn’t directly support hybrid inheritance due to the absence of multiple inheritance of classes.

## Polymorphism

- The word “poly” means many and “morphs” means forms, so it means many forms. we can define Java Polymorphism as the ability of a message to be displayed in more than one form. It allows us to perform a single action in different ways.
- In Java, polymorphism is primarily achieved through method overriding and method overloading.

### Compile-Time Polymorphism (Static Binding or Early Binding) — Method overloading.

- Compile-time polymorphism occurs when the compiler determines which method or operation to execute at compile time based on the method signature (method overloading)
  Method overloading allows multiple methods with the same name, but different parameter lists within the same class.

```
public class Box {

    public double calculateVolume(double sideLength) {
        return sideLength * sideLength * sideLength;
    }

    public double calculateArea(double length, double width, double height) {
        return length * width * height;
    }
}
```

### Run-Time Polymorphism (Dynamic Binding or Late Binding) — Method overriding.

- Run-time polymorphism occurs when the JVM determines which method or operation to execute at runtime based on the actual object type (method overriding).
  Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its superclass.

```
class Shape {
    // Method to calculate the area of a generic shape
    public double calculateArea() {
        return 0; // Default implementation for a generic shape
    }
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius; // Override to calculate the area of a circle
    }
}

class Triangle extends Shape {
    private double base;
    private double height;

    public Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }

    @Override
    public double calculateArea() {
        return 0.5 * base * height; // Override to calculate the area of a triangle
    }
}
```

## Abstraction

- Abstraction involves hiding the unnecessary details while exposing only what is relevant and important.
- In Java, abstraction is primarily achieved through abstract classes and interfaces.

### Abstract classes

- An abstract class is a class that cannot be instantiated on its own and is meant to be extended by other classes.
- It may contain abstract methods (methods without a body) that are meant to be implemented by its subclasses.
- Abstract classes can also have concrete (implemented) methods.
- Abstract methods are declared in abstract classes and are meant to be implemented by concrete (non-abstract) subclasses. These methods define a contract that must be fulfilled by the subclasses.

```
abstract class Shape {
    // Abstract method with no body
    public double calculateArea();

    void setColor(String color) {
        // Concrete method with an implementation
        System.out.println("Setting color to " + color);
    }
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius; // Override to calculate the area of a circle
    }
}

class Triangle extends Shape {
    private double base;
    private double height;

    public Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }

    @Override
    public double calculateArea() {
        return 0.5 * base * height; // Override to calculate the area of a triangle
    }
}
public class Main {
    public static void main(String[] args) {
        // Create a Shape object
        Shape shape = new Shape(); // Compilation Error: Cannot instantiate the abstract class Shape

        // Create a Circle object
        Shape circle = new Circle(5.0);

        // Calculate and print the area of the circle
        double circleArea = circle.calculateArea();
        System.out.println("Area of the circle: " + circleArea);

        // Set the color of the circle
        circle.setColor("Red");
    }
}
```

### Interfaces

- An interface is a pure form (100%) of abstraction in Java.
- It defines a contract by specifying a set of abstract methods that implementing classes must provide.
- Classes can implement multiple interfaces, allowing for a high level of abstraction and flexibility in code design.
- Interfaces cannot have implemented/concreate methods.
- To implement an interface we use the keyword “implements” with class.
- In Java, you cannot directly create an object of an interface because interfaces cannot be instantiated.

```
// Shape interface
public interface Shape {
    // Abstract method to calculate the area
    double calculateArea();

}

// Circle class implementing the Shape interface
public class Circle implements Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

// Triangle class implementing the Shape interface
public class Triangle implements Shape {
    private double base;
    private double height;

    public Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }

    @Override
    public double calculateArea() {
        return 0.5 * base * height;
    }
}
`public class Main {
    public static void main(String[] args) {
        // Create a Circle object
        Shape circle = new Circle(5.0);

        // Calculate and print the area of the circle
        double circleArea = circle.calculateArea();
        System.out.println("Area of the circle: " + circleArea);

        // Create a Triangle object
        Shape triangle = new Triangle(4.0, 3.0);

        // Calculate and print the area of the triangle
        double triangleArea = triangle.calculateArea();
        System.out.println("Area of the triangle: " + triangleArea);
    }
}
```

- Abstract classes and Interfaces are used to define a generic template for other classes to follow. They define a set of rules and guidelines that their subclasses must follow. By providing an abstract class, we can ensure that the classes that extend it have a consistent structure and behavior. This makes the code more organized and easier to maintain.

### Up casting and Down casting in Abstraction

- Upcasting is the typecasting of a child object to a parent object. Upcasting can be done implicitly. We can only access methods and fields defined in the parent interface/class through this reference.
- Downcasting means the typecasting of a parent object to a child object. Downcasting cannot be implicit. We have direct access to all methods and fields defined in the sub class, in addition to any inherited methods or fields from its superclass or implemented interfaces.

```
// Shape interface
public interface Shape {
    // Abstract method to calculate the area
    double calculateArea();

}

// Circle class implementing the Shape interface
public class Circle implements Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    // getter method for radius
    public double getRadius() {
        return this.radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

public class Main {
   public static void main(String[] args) {
        // Implicit Upcasting
        Shape circle = new Circle(5.0);

        // We have access to calculate area, since it is overridden from the Shape interface (Parent)
        double circleArea = circle.calculateArea();
        System.out.println("Area of the circle: " + circleArea);

        // compilation error, because it's not part of the Shape interface (Parent)
        System.out.println(circle.getRadius());

        // Implicit down casting: compilation error
        Circle circle2 = new Shape();

        // Explicit down casting
        Circle circle2 = (Circle) circle;

        // We have access, because the reference variable circle2 is of type sub class, which has this method
        System.out.println(circle2.getRadius());

   }
}
```

## Conclusion

- In conclusion, Object-Oriented Programming (OOP) is a powerful paradigm that promotes code organization, reusability, and maintainability by modeling real-world entities as objects with properties and behaviors. Throughout this article, we’ve explored the four main concepts of OOP: encapsulation, inheritance, polymorphism, and abstraction, and how they can be applied in various scenarios to improve software design and development.

- Encapsulation allows us to hide the internal details of an object and expose only the necessary functionalities through well-defined interfaces, enhancing security and modularity.

- Inheritance facilitates code reuse by allowing classes to inherit properties and behaviors from parent classes, promoting a hierarchical structure and facilitating the creation of more specialized subclasses.

- Polymorphism allows us to perform a single action in different ways.

- Abstraction simplifies complex systems by focusing on essential features and hiding implementation details, promoting clarity and maintainability.
