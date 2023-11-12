//oop - class
{

    class Person {
        constructor(public name: string, public age: number) { }
        display(): void {
            console.log(this.name + " is " + this.age);
        }
    }


    const p1 = new Person("John", 25);
    const p2 = new Person("Mary", 30);

    p2.display();




}