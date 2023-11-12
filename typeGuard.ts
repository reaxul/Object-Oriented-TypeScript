//type guard | type narrowing
{



    type Alphanumeric = string | number;

    const add = (a: Alphanumeric, b: Alphanumeric) => {
        if (typeof a === "string" || typeof b === "string") {
            return `${a}${b}`;
        }
        return a + b;
    };
    console.log(add(4, 5));



    //in guard
    type Person = {
        name: string;
        age: number;
        occupation?: string;
    };

    const printOccupation = (person: Person) => {
        if ("occupation" in person) {
            console.log(`${person.name} is a ${person.occupation}.`);
        } else {
            console.log(`${person.name} does not have an occupation.`);
        }
    };

    const john: Person = { name: "John", age: 30 };
    const jane: Person = { name: "Jane", age: 25, occupation: "teacher" };

    printOccupation(john); // Output: John does not have an occupation.
    printOccupation(jane); // Output: Jane is a teacher.












}