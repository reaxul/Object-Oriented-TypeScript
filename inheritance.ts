//inheritance
{

    class Person {
        name: string;
        age: number;
        constructor(name: string,age: number) {
            this.name = name;
            this.age = age;
        }
        move(distanceInMeters: number) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        move(distanceInMeters: number = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    class Snake extends Animal {
        constructor(name: string) {
            super(name);
        }
        move(distanceInMeters = 5) {
            console.log("Slithering...");
            super.move(distanceInMeters);
        }
    }

    class Horse extends Animal {
        constructor(name: string) {
            super(name);
        }
        move(distanceInMeters = 45) {
            console.log("Galloping...");
            super.move(distanceInMeters);
        }
    }

    let sam = new Snake("Sammy the Python");
    let tom: Animal = new Horse("Tommy the Palomino");

    sam.move();
    tom.move(34);














}