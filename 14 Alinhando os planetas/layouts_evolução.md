# Layouts e evolução

Layout tem a ver com a maneira que os elementos estão dsitribuidos na tela


## Normal flow

Ou Flow Layout é a maneira que os elementos `block` e `inline` ficam na página

```html
<p> Text block com <strong>inline</strong> dentro </p>
```


## Tables

É a maneira de tabelas onde a tag `table` recebe um display `table` fazendo com que os elementos internos como `td` e `tr` possam ser usados para mostrar uma tabela.

```html
<table>
    <tr>
        <td>Hora</td>
        <td>20:00</td>
    </tr>
    <tr>
        <td>Hora</td>
        <td>20:37</td>
    </tr>

<!-- tr -> linha
     td -> coluna -->

</table>
```


## Tabless

Uso das propriedades `float`, `clear` para que os elementos possam mudar de posição na tela.

```html
<div style="float: left">
    esquerda
</div>

<div style="float: right">
    direita
</div>

<div style="clear: both">
    normal
</div> <!-- A partir desse volta ao normal, ele limpa o float left e right -->

```


## Flexbox

A caixa se torna flex, fazendo com que os elementos internos possam receber melhor:

- Alinhamento
- Ordenação
- Tamanhos flexíveis


```html

<div class="flexbox">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

```

```css

.flexbox {
    display: flex;   /* permite essa flexibilidade */
    justify-content: space-around;   /* espaços entre os elementos */
    flex-direction: column;   /* fica como coluna ao invés de linha */
}

.item:nth-child(1) {
    order: 1;
}   /* reordena */

```

