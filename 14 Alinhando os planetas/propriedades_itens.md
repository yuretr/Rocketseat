# Propriedades para os itens

- flex-basis
- flex-grow
- flex-shrink
- flex
- order

<!-- ---------------------------------------- -->


## flex-basis

```html

<div class="box">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

```

```css

.box {
    display: flex;
    border: 1px dashed red;
}

.box div {
    border: 1px solid;
    flex-basis: auto;   /* padrão auto */
    
    flex-basis: 25%;
    flex-basis: 25px;
}

.box div:nth-child(1) {
    width: 250px;   /* não é aplicado no mesmo eixo do flex-basis, pois já tomou essa propriedade para ele, ele quem vai determinar, tem prioridade no eixo que se encontra, agora se ele estivesse como column, ai sim os dois seriam aplicados, o flex-basis para altura conforme o eixo alterou, e o width para a largura*/
}

```

<!-- ---------------------------------------- -->


## flex-grow

O crescimento do item dentro do container em relação aos espaços vazios.


```html

<div class="box">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

```

```css

.box {
    display: flex;
    border: 1px dashed red;
}

.box div {
    border: 1px solid;
}

.box div:nth-child(2),
.box div:nth-child(3) {
    flex-grow: 1;   /* 0 é padrão (não cresce), 1 pega todo o espaço (caso tenha em mais de um elemento, ele distribui por igual aos elementos) */
}

.box div:nth-child(1) {
    flex-grow: 2;   /* aqui ele vai ocupar dois, pega duas frações */
}

```

```css

.box {
    display: flex;
    flex-direction: column;
    border: 1px dashed red;
    height: 150px;   /* quando inverte para column, só aparece as alterações do flex-grow quando coloca a medida */
}

.box div {
    border: 1px solid;
}

.box div:nth-child(2),
.box div:nth-child(3) {
    flex-grow: 1;
}

.box div:nth-child(1) {
    flex-grow: 2;
}


```

<!-- ---------------------------------------- -->


## flex-shrink

```html

<div class="box">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

```

```css

.box {
    display: flex;
    border: 1px dashed red;
    width: 160px;
}

.box div {
    flex-basis: 100%;
    border: 1px solid;
}

.box div:nth-child(2) {
    flex-shrink: 0;   /* 0 significa que não quero que ele encurta em relação a caixa, empurra todos e deixa com 160px */
    flex-shrink: 1;   /* 1 padrão, mesmo sem ter, ele encurta em relação a caixa */
    flex-shrink: 2;   /* 2 vai manter pelo menos o conteúdo dele, encurta mais */
}

```


```css

.box {
    display: flex;
    border: 1px dashed red;
    width: 160px;
}

.box div {
    flex-basis: 40px;
    border: 1px solid;
}

.box div:nth-child(2),
.box div:nth-child(3) {
    flex-shrink: 2;   /* todos ficam com 40px; totalizando 160px, acaba ficando todos com a mesma medida, não encurta */
}

/* aplicando column, vai acontecer a mesma coisa do flex-grow */

```

<!-- ---------------------------------------- -->


## flex

- shorthand
- flex-grow / flex-shrink / flex-basis
- podem ter 1, 2 ou 3 valores


```html

<div class="box">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

```

```css

.box {
    display: flex;
    border: 1px dashed red;
}

.box div {
    border: 1px solid;
    flex: 1;
    flex: 1 40px;   /* quando a segunda unidade tem propriedade de medida, se transforma em flex-basis */
    flex: 0 0 0;   /* o primeiro valor flex-grow, segundo valor flex-shrink, terceiro valor flex-basis */
}

```

<!-- ---------------------------------------- -->


## Alterando tamanho de múltiplos itens

```html

<div class="page">
    <aside>Aside</aside>
    <main>
        Main
        <section>Content 1</section>
        <section>Content 2</section>
        <section>Content 3</section>
    </main>
</div>

```

```css

.page {
    border: 2px solid;
    min-height: 100vh;

    display: flex;
}

aside {
    background: lightgreen;
    flex: 1;   /* aside já pega todo o espaço vazio */
}

main {
    background: lightblue;
    flex: 2;   /* vai ter duas frações */

    display: flex;    /* vai tornar flex */
    flex-direction: column;    /* fica um embaixo do outro */
}

main section:nth-child(1) {
    background: lightgoldenrodyellow;
    flex: 2;    /* nessa seção ficará 2 frações de espaço */
}

main section:nth-child(2) {
    background: lightsalmon;
    flex: 0 80px;    /* não quero que se adapte, por isso primeiro valor 0, fica com uma altura fixa de 80px, e os demais de adaptam pois são flexíveis */
}

main section:nth-child(3) {
    background: lightpink;
    flex: 1;
}


```

<!-- ---------------------------------------- -->


## Ordenando itens

```html

<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>

```

```css

.box div {
    border: 1px solid;
}

.box div:nth-child(1) {
    order: 1;   /* como ele é o maior dos outros, fica por último */
}

.box div:nth-child(2) {
    order: 0;
}

.box div:nth-child(3) {
    order: 0;
}

.box div:nth-child(4) {
    order: -2;   /* como ele é o menor e negativo, fica no começo */
}

/* por padrão é 0 */
/* serve como maneira visual, e não estrutural pois não altera a sequência html */

```
















