// const body = document.querySelector('body')
// const div = document.querySelector('div')

// function abrir() {
//     div.classList.remove('invisible')
// }

// function pressESC() {
//     if(body.onkeydown === Escape){
//         div.classList.add('invisible')
//     } else {
//         console.log('Não foi pressionado ESC')
//     }
// }
// Tentei fazer, só faltou conseguir o ESC



// aqui código de remover o .invisible
const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

// aqui Código do ESC
document.addEventListener('keydown', function(event) {
    console.log(event) // conseguimos ver o nome dos botões pressionados
    const isEscKy = event.key === 'Escape'

    if (isEscKy) {
        modalWrapper.classList.add('invisible')
    }
})


// https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model