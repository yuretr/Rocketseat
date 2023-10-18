# Page Layouts

Métodos usados para posicionar os elementos na tela.

- Tables
- Floats e clear
- Frameworks e Grid Systems
- Flexbox
- Grid


## Posicionamentos

Controla onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.

- Name: position
- Value: static | relative | absolute | fixed

Lembrando que o fluxo normal dos elementos é ficar um abaixo do outro, a não ser no caso de elementos inline, que ficam um ao lado do outro.


## Relative

- top, right, bottom, left, z-index


## Absolute

## Fixed

## Element Stacking



```html

<main>
    <div class="box1 box"></div>  <!-- fluxo normal, um embaixo do outro -->
    <div class="box2 box"></div>  <!-- quando quiser aplicar mais de uma classe, só dar espaço, vírgula não funciona -->
    <div class="box3 box"></div>  <!-- padrão estático, um abaixo do outro -->
</main>

```

```css

.box {
    width: 50px;
    height: 50px;
    margin-bottom: 8px;
}

main {
    margin-top: 200px;
    position: relative;   /* box2 será absolute ao pai dele, que é o main */
}

.box1 {
    background: red;
    position: relative;
    left: 100px;
    top: 80px;
}

.box2 {
    background: green;
    position: absolute;
    /* é como se tivesse em uma segunda camada, aquele espaço do box 1 que fica em relative, não fica mais */
    left: 100px;
    top: 80px;
}

.box3 {
    background: blue;
    position: fixed;
    /* o conteúdo fica fixo na tela, acompanha quando rolamos a página */
    left: 100px;
    top: 80px;
}

```



```html

<div class="box box1"></div>
<div class="box box2"></div>
<div class="box box3"></div>

```

```css

.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
  position: absolute;
  left: 5px;
  top: 5px;
  z-index: 3;  /* quanto maior for, ele vai avançando uma camada e ficando em frente */
}

.box2 {
  background-color: green;
  position: absolute;
  left: 10px;
  top: 10px
}

.box3 {
  background-color: blue;
  position: absolute;
  left: 15px;
  top: 15px
}

```


