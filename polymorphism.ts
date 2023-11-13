//polymorphism
{


    class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        makeSound() {
            console.log("Generic animal sound");
        }
    }

    class Dog extends Animal {
        makeSound() {
            console.log("Bark");
        }
        makeSoundTwice() {
            this.makeSound();
            this.makeSound();
        }
    }

    class Cat extends Animal {
        makeSound() {
            console.log("Meow");
        }
    }

    const animals: Animal[] = [new Dog("Rufus"), new Cat("Whiskers")];

    animals.forEach((animal) => {
        console.log(animal.name);
        animal.makeSound();
    });


    //abstract class
    abstract class Shape {
        abstract getArea(): number;
    }

    class Rectangle extends Shape {
        constructor(private width: number, private height: number) {
            super();
        }
        getArea(): number {
            return this.width * this.height;
        }
    }

    class Circle extends Shape {
        constructor(private radius: number) {
            super();
        }
        getArea(): number {
            return Math.PI * this.radius ** 2;
        }
    }

    const shapes: Shape[] = [new Rectangle(10, 20), new Circle(5)];

    shapes.forEach((shape) => {
        console.log(shape.getArea());
    });






}