// Elementos do Array

// Para contar a quantidade de elementos em um array pode-se usar o método length.

// Contar elementos de um Array

console.log([
    "a", 
    {type:"array"}, 
    function() {return "alô"}
])

console.log([
    "a", 
    {type:"array"}, 
    function() {return "alô"}
].length)   // conta quantos elementos tem (3)


// se eu quiser acessar um elemento do Array, utilizo []
console.log([
    "a", 
    {type:"array"}, 
    function() {return "alô"}
][2])

