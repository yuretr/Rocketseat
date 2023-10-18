// setInterval irá rodar uma função N vezes
// depois de X milissegundos

const timeOut = 1000
const checking = () => console.log('checking!')

setInterval(checking, timeOut)

// vai rodar infinitamente
// para parar o terminal Crtl + C
