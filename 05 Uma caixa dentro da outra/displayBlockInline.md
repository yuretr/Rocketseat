## display: block vs display: inline

- Como as caixas se comportam em relação às outras caixas
- Comportamento externo das caixas

(display é apresentação da caixa)


**block**

- Ocupa toda a linha, colocando o próximo elemento abaixo desse
- width e height são respeitados
- padding, margin, border irão funcionar normalmente


**inline**

- Os elementos ficam ao lado do outro e não empurram outros elementos para baixo
- width e height não funcionam
- Somente valores horizontais de margin


exemplos:

block: `<p> <div> <section>`, todos os headings `<h1> <h2>`...
inline: `<a> <strong> <span> <em>`



```html

<div> Um conteúdo </div> outro conteúdo
<!-- automaticamente esse é block, pois joga o "outro conteúdo" para baixo -->

<p>
    Um <strong> texto </strong> qualquer
    <!-- automaticamente esse é inline, pois permanece o "texto" na mesma linhda -->
</p>

```


```html

<div>
    block
</div>

<span>inline</span>

```


```css

div {    /* div sendo por padrão block, ela respeita a altura de 100px, e a largura de 10px, então reproduz a caixa nesse formato estipulado abaixo */
    height: 100px;
    border: 1px solid red;
    width: 10px;
    display: inline;   /* aqui a gente inverte o padrão block, para inline */
}

span {    /* span sendo por padrão inline, ela não respeita a altura de 100px, e a largura de 10px, então reproduz a caixa no tamanho do conteúdo */
    width: 10px;
    height: 100px;
    border: 1px solid green;
    display: block;   /* aqui a gente inverte o padrão inline, para block */
}


```


```css

div {
    margin: 20px;
}

span {
    margin: 20px;   /* só funciona para as laterais, pra cima e pra baixo não funciona (inline) */
}

```