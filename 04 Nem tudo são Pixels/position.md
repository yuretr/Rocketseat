# Posições

<position>

Representa um conjunto de coordenadas 2D:
- top, right, bottom, left e center

* Usado para alguns tipos de propriedades
* Não confundir com a propriedade `position`

```html

<div class="box"> </div>

```


```css

.box {
    height: 300px;
    width: 400px;
    background-image: url(https://img.freepik.com/fotos-gratis/fundo-da-agua-da-piscina_74190-451.jpg?w=2000);
    background-repeat: no-repeat;  /* não repete a imagem */
    background-position: right 50px;  /* pegou a ponta direita da foto e jogou no canto, 50px abaixa do topo */
    /* temos: center, top, bottom, left, right / bottom left, bottom right (consegue combinar)*/
}

```

