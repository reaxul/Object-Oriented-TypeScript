//abstraction
{


    // Interface
    interface Animal {
        name: string;
        makeSound(): void;
    }

    // Abstract class
    abstract class Shape {
        abstract getArea(): number;
    }

    // Concrete class implementing the Animal interface
    class Dog implements Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        makeSound(): void {
            console.log(`${this.name} barks`);
        }
    }

    // Concrete class extending the Shape abstract class
    class Circle extends Shape {
        radius: number;

        constructor(radius: number) {
            super();
            this.radius = radius;
        }

        getArea(): number {
            return Math.PI * this.radius ** 2;
        }
    }

    const dog = new Dog("Fido");
    dog.makeSound(); // Output: Fido barks

    const circle = new Circle(5);
    console.log(circle.getArea()); // Output:










}