## margin

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left  (Sempre lembrar da ordem do relógio)
- values: `<length>` | `<percentage` | auto

```css

div {
    /* shorthand */
    margin: 12px 16px 10px 4px; /* TOP = 12px | RIGHT = 16px | BOTTOM = 10px | LEFT = 4px */

    margin: 12px 16px 0; /* TOP = 12px | RIGHT = 16px | BOTTOM = 0px | LEFT = 16px */
    /* quando só tem três valores, será considerado primeiro valor top, segundo valor right e left, e terceiro valor bottom */

    margin: 8px 16px; /* TOP = 8px | RIGHT = 16px | BOTTOM = 8px | LEFT = 16px */
    /* quando só tem dois valores, será considerado para cima e para baixo o primeiro valor, e para esquerda e direita o segundo valor */

    margin: 8px; /* TOP = 8px | RIGHT = 8px | BOTTOM = 8px | LEFT = 8px */
    /* quando só tem um valor, será considerado para todos */

}

```

* Cuidado com margin collapsing (top se ajunta ao bottom)



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
    width: 100px;
    height: 100px;
}

div {
    margin-bottom: 8px;   /* afasta um quadrado do outro */
}

section {
    margin-top: 8px;   /* acontece o collapsing, só acontece com bottom e top */
}


div, section {
    border: 1px solid red;
    width: 100px;
    height: 100px;
    margin: auto;   /* calcula automatico nas laterais */
}

```


