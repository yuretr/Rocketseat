// Array

const animals = [
    'Lion',
    'Monkey',
    'Cat'
]

// acessar valores dentro do Array
console.log(animals[0])   // Lion
console.log(animals[1])   // Monkey
console.log(animals[2])   // Cat

console.log(animals.length)   // mostra o total de elementos (3)


// -------------------------------------------


const animals2 = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3,
    }
]

// acessar valores dentro do Array
console.log(animals2[2])   // mostra o object
console.log(animals2[2].name)
// é possível acessar, mas da undefined, da problema misturar numeros com strings

// costumamos separar strings somente, ou numeros somente, separadamente

