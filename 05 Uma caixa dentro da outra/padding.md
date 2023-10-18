## padding

- padding-top | padding-right | padding-bottom | padding-left
- values: `<length>` | `<percentage>` | (auto Não tem)

```css

div{
    /* shorthand */
    padding: 12px 16px 10px 4px; /* TOP = 12px | RIGHT = 16px | BOTTOM = 10px | LEFT = 4px */

    padding: 12px 16px 0; /* TOP = 12px | RIGHT = 16px | BOTTOM = 0px | LEFT = 16px */
    /* quando só tem três valores, será considerado primeiro valor top, segundo valor right e left, e terceiro valor bottom */

    padding: 8px 16px; /* TOP = 8px | RIGHT = 16px | BOTTOM = 8px | LEFT = 16px */
    /* quando só tem dois valores, será considerado para cima e para baixo o primeiro valor, e para esquerda e direita o segundo valor */

    padding: 8px; /* TOP = 8px | RIGHT = 8px | BOTTOM = 8px | LEFT = 8px */
    /* quando só tem um valor, será considerado para todos */
}

```

* Padding poderá causar diferença na largura de um elemento

https://app.rocketseat.com.br/node/uma-caixa-dentro-da-outra/lesson/box-sizing



```html

<div>
    block, margin
</div>

<section> Elemento abaixo </section>

```

```css

* {
    margin: 0px;   /* resetou pra ficar tudo 0, pois vem pré definido valores */
}

div, section {
    border: 1px solid red;
    padding: 20px 2em 8px 50%;   /* exemplos de valores */
}

```


