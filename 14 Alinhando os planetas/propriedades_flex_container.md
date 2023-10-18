# Propriedades do Flex Container

* Direção dos itens
* Multi linhas
* Alinhamento
    * Principal
    * Cruzado
* Espaços entre os itens


## Direção dos Itens

- Flex é uma dimensão somente (horizontal ou vertical)
- Podemos mudar a direção com `flex-direction`
- Valores: (row | row-reverse | column | column-reverse)

row linha
column coluna


```html

<div class="flexbox">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

```

```css

.flexbox {
    display: flex;
    flex-direction: row;   /* por padrão é row, da esquerda para a direita */
    flex-direction: row-reverse;   /* de trás pra frente, da direita para esquerda */
    flex-direction: column;   /* muda o eixo principal, fica em coluna, de cima para baixo */
    flex-direction: column-reverse;   /* muda o eixo principal, fica em coluna, de baixo para cima */
    height: 80vh;   /* aumenta a altura, para ver o column-reverse */
}

```

<!-- ---------------------------------- -->


## Flex-wrap

- Podemos usar multi linhas.
- Cada nova linha, um novo flex container


```html

<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>

```

```css

.box {
    display: flex;
    flex-wrap: wrap;   /* da a possibilidade de criar novas linhas se necessário na tela para caber o conteúdo */
    justify-content: center;   /* centraliza todos os eixos, quando gera uma nova linha, cria um novo eixo também */
    border: 1px dashed red;

    flex-wrap: wrap-reverse;   /* quando gerar/quebrar linhas irá para cima */
}

.box div {
    border: 1px solid;
    width: 80px;
}

```

<!-- ---------------------------------- -->


# Flex-flow

- Shorthand
- Flex-direction || Flex-wrap

```html

<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>

```

```css

.box {
    display: flex;
    flex-flow: column wrap;   /* a primeira é direction, a segunda é wrap */
    flex-flow: wrap;   /* mas podemos deixar só wrap */
    border: 1px dashed red;
}

.box div {
    border: 1px solid;
    width: 80px;
}

```

<!-- ---------------------------------- -->


# Justify-content

- Alinhamento dos elementos dentro do container
- Distribuição dos elementos


## Valores

- flex-start
- flex-end
- center
- space-around
- space-between
- space-evenly


```html

<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>

```

```css

.box {
    display: flex;
    justify-content: flex-start;   /* padrão, começa pela esquerda, início do eixo main */
    justify-content: flex-end;   /* começa pelo final direita */
    justify-content: center;   /* centralizado */
    justify-content: space-around;   /* espaço ao redor, antes e depois */
    justify-content: space-between;   /* espaço entre, somente entre eles */
    justify-content: space-evenly;   /* espaço constante, espaços por iguais desde começo ao fim */
    border: 1px dashed red;
}

.box div {
    border: 1px solid;
}

```

<!-- ---------------------------------- -->


# Align-items

- Alinhamento dos elementos no eixo cruzado


## Valores

- stretch
- flex-start
- flex-end
- center


```html

<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>

```

```css

.box {
    display: flex;
    align-items: stretch;   /* esticado */
    align-items: flex-start;   /* deixa padrão sem esticar, no começo */
    align-items: flex-end;   /* deixa sem esticar, no final */
    align-items: center;   /* deixa sem esticar, no centro */
    border: 1px dashed red;
    height: 150px;   /* como tem a altura, fica esticado */
}   /* pode deixar column, muda as características, mas pode ser aplicado todas */

.box div {
    border: 1px solid;
}

```

<!-- ---------------------------------- -->


# Gap

- Espaços entre os elementos


## Valores

Unidades de medidas
- fixas: px, pt
- flexíveis: %, em, rem


```html

<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>

```

```css

.box {
    display: flex;

    border: 1px dashed red;
    gap: 2px;   /* coloca espaçamento entre os elementos */
    gap: 2%;
    gap: 2rem;
    gap: 2pt;
}

.box div {
    border: 1px solid;
}

```

