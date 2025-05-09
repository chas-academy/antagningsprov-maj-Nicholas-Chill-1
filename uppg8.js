function over30(people) {
    for (let i = 0; i < people.length; i++) {
        if (people[i].age > 30) {
            console.log(people[i].name);
        }
    }
}

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

    let people = [
        {name: "Nicholas", age: 25},
        {name: "Alex", age: 31},
        {name: "Sam", age: 45},
        {name: "Walter", age: 55},
        {name: "Luke", age: 30},
    ]

    over30(people);
}

module.exports = { uppg8 };