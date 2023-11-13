//static in oop
{


    class Person {
        static count: number = 0;
        constructor(public name: string, public age: number) {
            Person.count++;
        }
        display(): void {
            console.log(this.name + " is " + this.age);
        }
    }

    const p1 = new Person("John", 25);
    p1.display();
    p1.display();
    const p2 = new Person("Mary", 30);
    p2.display();
    console.log(Person.count);






}