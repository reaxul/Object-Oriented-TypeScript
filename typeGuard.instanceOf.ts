//instanceof type guard
{




    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log("Animal sound");
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeDogSound() {
            console.log("Woof Woof");
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeCatSound() {
            console.log("Meow Meow");
        }
    }

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
        // return animal.species === "Dog";
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
        // return animal.species === "Cat";
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeDogSound();
        } else if (isCat(animal)) {
            animal.makeCatSound();
        } else {
            animal.makeSound();
        }
    }

    getAnimal(new Dog("Tommy", "Dog"));
    getAnimal(new Cat("Kitty", "Cat"));






}