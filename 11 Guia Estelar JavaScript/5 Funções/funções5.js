// Function scope

// Parâmetros, mesmo se tiverem o mesmo nome que alguma outra variável do seu código, são apenas modificados e persistem no escopo da função.

let subject = 'create video'

function createThink() {
    let subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)

// --------------------------

// se a gente não colocar o "let" antes do subject dentro da função, e não passar um parâmetro para a função, ele irá subscrever a variável fora do bloco, então sempre definir a variável

// --------------------------

let subject2 = 'create video'

function createThink2(subject2) {
    subject2 = 'study'
    return subject2
}

console.log(createThink2(subject2))
console.log(subject2)

// --------------------------

let subject3

function createThink3() {
    subject3 = 'testando'
    return subject3
}

console.log(subject3)
// aqui fica undefinid porque ainda não tem valor a variável

console.log(createThink3())
console.log(subject3)
// aqui como ficou sem definir a variável da função, e sem parâmetro, ele subscreveu a variável de fora do bloco

