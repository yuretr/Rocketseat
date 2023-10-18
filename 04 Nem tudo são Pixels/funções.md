# Funções

Em programação, funções são reconhecidas por causar um reaproveitamento de código.


Exemplos de funções do CSS:

* rgb()
* hsl()
* url()
* calc()


Dentro dos parêntesis são passados argumentos

Link da documentação do MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions


```html

<div class="box"> </div>

```


```css

body{  /* body não tem medidas pré definidas */
    height: 100vh;
    margin: 0;
}

.box {
    height: calc(100% - 20px);   /* essa função está calculando a medida, de acordo determinada anteriormente no body */
    width: 100px;
    background-image: url(https://img.freepik.com/fotos-gratis/fundo-da-agua-da-piscina_74190-451.jpg?w=2000);
    background-repeat: no-repeat;
    background-position: right 50px;
}

```


