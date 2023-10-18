# Flexbox

Como posicionar elementos usando o CSS Flexbox

- Nos permite posicionar os elementos dentro da caixa
- Controle em uma dimensão (horizontal ou vertical)
- Alinhamento, direcionamento, ordenar e tamanhos

```css

div.parent {
	display: flex;
}

```


## Flex-direction

- Qual a direção do flex: horizontal ou vertical
- row | column


## Alinhamento
- justify-content
- align-items



```html

<div class="container">
  <div class="box blue"></div>
  <div class="box red"></div>
  <div class="box green"></div>
</div>

```

```css

.container {
    display: flex;   /* por padrão fica uma caixa ao lado da outra */
    flex-direction: column;   /* deixa uma encima da outra novamente */
}

.container {
    display: flex;   /* por padrão fica uma caixa ao lado da outra */
    justify-content: space-between;
    /* deixa um espaço entre os elementos, se você mudar o tamnho da janela, ele procura dar espaço nos elementos */
}

.container {
    display: flex;   /* por padrão fica uma caixa ao lado da outra */
    justify-content: center;
    /* deixa no meio */
}


body {
    height: 100vh;   /* ocupar todo o viewport */
    margin: 0;   /* tirar as margens que o navegador coloca */
    display: flex;
    align-items: center;   /* alinha os itens ao centro */
}

.container {
    width: 100vw;   /* 100% da viewport */
    display: flex;   /*  */
    justify-content: center;
}


.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.blue {
  background-color: blue;
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}

```