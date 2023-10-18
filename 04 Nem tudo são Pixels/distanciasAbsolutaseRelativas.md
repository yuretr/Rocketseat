# Distâncias absolutas <length>

São fixas e não alteram seu valor.

Unidade     Nome                    Equivalência
cm          Centímetros             1cm = 96px/2.54
in          Inches (polegadas)      1in = 2.54cm = 96px
px          Pixels                  1px = 1/96th of 1in

* o mais comum e mais utilizado é o **px**
* não recomendado usar cm


## Distâncias relativas

São relativas a algum outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.

Unidade     Relativo a
em          Tamanho da font do elemento pai
rem         Tamanho da font do elemento raiz (root/html)
vw          1% da viewport wid          (largura)
vh          1% da viewport height       (altura)

```html

<div>
    <p>Parágrafo</p>
</div>

```


```css

div {
    font-size: 18px;  /* fixa */
}

p {
    font-size: 2em;  /* relativo ao elemento pai, nesse caso ficaria 36px, se não definir na div no html, ele busca o raiz padrão. Pode ser 2em, 1.6em, inteiro ou decimal. */
}

p {
    font-size: 2rem;  /* volta pra medida padrão ou definida html conforme abaixo */
}

        :root {
            font-size: 18px;
        }

        /* OU */

        html {
            font-size: 18px;
        }


```