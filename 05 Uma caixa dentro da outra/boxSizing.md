# box-sizing

Como será calculado o tamanho total da caixa?

- content-box | border-box


```html

<div>
    <strong>CSS</strong> é incrível!
</div>

```


```css

div {
    width: 100px;   /* essa largura está ligada ao conteúdo da caixa, lá embaixo no padding acaba aumentando mais 20px na largura total da caixa */
    height: 100px;
    border: 1px solid red;
    margin: 10%;
    padding: 0 20px;
    box-sizing: border-box;   /* faz com que mantenha a medida estipulada de 100px, recalcula internamente a adição do padding, sem alterar a largura determinada em width de 100px */
}

```



```css

div {
    box-sizing: border-box;
}

```



```css

* {   /* tem gente que aplica essa configuração, assim já fica para todas as caixas */
    box-sizing: border-box;
}

```