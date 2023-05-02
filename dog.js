export class Dog{ // alla classe normale devo aggiungere export per usarla.
    constructor(name, breed, age, gender, colors = [], foodName, dietType){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.gender = gender;
        this.colors = colors;
        this.favoriteFood = new Food (foodName, dietType)
    }

    sayHallo(){
        console.log('OhMyDog');
    }
}

class Cat{ // se non metto export nessuno puó vederla

}

class Food{
    constructor(name, diet){
        this.name = name;
        this.diet = diet;
    }
}