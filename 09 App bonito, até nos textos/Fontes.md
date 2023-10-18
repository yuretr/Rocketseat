# Trabalhando com fontes

Tipografia transmite mensagem

- negrito
- tamanho
- estilo

----------------------------------------------------------------

## Basic Font Properties

* font-family
* font-weight
* font-style
* font-size

----------------------------------------------------------------

## Font Family

* Tipo de fonte de um elemento
* Lista de fontes e ordem de propriedade
* Inclui *fallback* font    (caso o caminho não dê certo, tem um escape)


```css

p {
  font-family: "Times New Roman", Times, serif;
}
/* será Times New Roman, caso não tenha será Times, e se não conseguir fazer uma fonte serif, essa é a idéia do fallback */

```

    - serif     (tem dobras nas letras na base)
    - sans      (não tem essas dobras na base)

----------------------------------------------------------------

## Font Weight

* Peso da fonte

- Valores: normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
- Dependendo da família da fonte não conseguimos utilizar todos os pesos de fonte

```css

p {
	font-weight: bold;
}

```

Referência: https://www.w3.org/TR/css-fonts-3/

----------------------------------------------------------------

## Font Style

* O estilo da fonte

- Valores: normal | italic | oblique
- Os valores que podem ser aplicados dependem da fonte usada

```css

span {
	font-style: italic;
}

```

----------------------------------------------------------------

## Fonte Size

* O tamanho da fonte

```css

p {
	font-size: 18px;      /* unidades de medidas, mas o mais comum px */
	font-size: 1.2rem;
	font-size: 1.2em;
}

/* 16px padrão chrome */

```

----------------------------------------------------------------

## Web Fonts

- Fontes do sistema x Fontes da web

Fontes do sistema são as fontes que estão instaladas na máquina do usuário e nem sempre o cliente vai ter instalado as fontes usadas no projeto e isso pode fazer com que os estilos dos textos não sejam aplicados corretamente, mas para resolver esses casos podemos preparar nossas fonts para web ou usar fontes da web.

- Como usar fontes para web?

    @font-face
    @import         
    link            (fica no HTML header, e podemos aplicar no CSS)

Referência
https://fonts.google.com/
https://css-tricks.com/snippets/css/using-font-face-in-css/

- Fonts google, ajuda muito, ele disponibiliza a incorporação de código para o projeto.

