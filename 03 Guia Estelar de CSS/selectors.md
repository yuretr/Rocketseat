# Selectos

Conecta um elemento HTML com o CSS

## Tipos

* Global selector `*`  (todos tem a alteração)
* Element/Type selector `h1, h2, p, div`
* ID Selector `#box, #container`
* Class Selector `.red, .m-4`
* Attribute selector, Pseudo-class, Pseudo-element,  e outros

```css

* {
    margin: 0;
}

h1 {
    color: green;
    font-size 60px;
    background: gray;
}

h1, h2 {        /* (posso colocar mais de um) */
    color: green;
    font-size 60px;
    background: gray;
}

#container {
    width: 200px;
}

.m40 {
    margin: 40px;
}

