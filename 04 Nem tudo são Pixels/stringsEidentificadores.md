# Strings e Identificadores

* Strings: Texto envolto em aspas
* Identificadores: red, black, gold;



```html

<div class="box"> </div>

```


```css

body{
    height: 100vh;
    margin: 0;
}

.box {
    height: calc(100% - 20px);
    width: 100px;
    background-image: url(https://img.freepik.com/fotos-gratis/fundo-da-agua-da-piscina_74190-451.jpg?w=2000);
    background-repeat: no-repeat;
    background-position: right 50px;
}

.box::after {
    content: "Aqui vem uma mensagem";   /* adicionando uma mensagem pelo CSS */
    color: red;
}

```