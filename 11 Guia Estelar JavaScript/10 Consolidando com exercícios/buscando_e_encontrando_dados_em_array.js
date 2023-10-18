// Buscando e encontrando dados em Array

// Esse é um desafio onde vamos trabalhar com arrays, começando com coisas básicas e complicando conforme anda.

// Desafio:

// /* 
//     ∞ Buscando e contando dados em Arrays ∞
//     Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
//         • Contar o número de categorias e o número de livros em cada categoria
//         • Contar o número de autores
//         • Mostrar livros do autor Auguto Cury
//         • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
// */

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log('Total de categorias: ', totalCategories);
for(let categorycont of booksByCategory) {
    console.log('Total de livros da categoria: ', categorycont.category)
    console.log(categorycont.books.length)
}

function countAuthors() {
    let authors = [];

    for(let categorycont of booksByCategory) {
        for(let bookcont of categorycont.books) {
            if(authors.indexOf(bookcont.author) == -1) {
                authors.push(bookcont.author)
            }
            // método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente
            // método push() adiciona um ou mais elementos ao final de um array
        }
    }
    console.log("Total de autores: ", authors.length)
}

countAuthors();


function booksOfAuthor(author) {
    let books = [];

    for(let categorycont of booksByCategory) {
        for(let bookcont of categorycont.books) {
            if(bookcont.author === author) {
                books.push(bookcont.title)
            }
            // método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente
            // método push() adiciona um ou mais elementos ao final de um array
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
    // .join() transforma em string, e (", ") determina o separador
}

booksOfAuthor('George S. Clason');






// const booksByCategory = [
//     {
//         category: "Riqueza",
//         books: [
//             {
//                 title: "Os segredos da mente milionária",
//                 author: "T. Harv Eker",
//             },
//             {
//                 title: "O homem mais rico da Babilônia",
//                 author: "George S. Clason",
//             },
//             {
//                 title: "Pai rico, pai pobre",
//                 author: "Robert T. Kiyosaki e Sharon L. Lechter",
//             },
//         ],
//     },
//     {
//         category: "Inteligência Emocional",
//         books: [
//             {
//                 title: "Você é Insubstituível",
//                 author: "Augusto Cury",
//             },
//             {
//                 title: "Ansiedade – Como enfrentar o mal do século",
//                 author: "Augusto Cury",
//             },
//             {
//                 title: "Os 7 hábitos das pessoas altamente eficazes",
//                 author: "Stephen R. Covey",
//             },
//         ],
//     },
// ];









