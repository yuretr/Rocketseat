# Terminologia

- Flex Container
    - Flex item
- Nesting
- Axis
    - main
        - start, end
    - cross
        - start, end
- Flex sizing
    - flexível
    - altera width/height dos itens para preenchimento dos espaços do flex container


Exemplos 1:

```html
<div class="container">   <!-- aqui seria o Flex Container, assim que fosse transformado em Flex -->
    <div class="item"></div>   <!-- aqui seria o Flex Item, assim que fosse transformado em Flex -->
    <div class="item"></div>
    <div class="item"></div>
</div>   <!-- Nesting, é quando elementos "vivem" dentro de outro elemento, por exemplo div dentro de div -->
```


Exemplos 2:

```html
<div class="container">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>
```

```css
.container {
    display: flex;
    justify-content: flex-end;   /* aqui alinha no final do eixo main */
}

```
<!-- main (padrão horizontal eixo)
cross (padrão vertical eixo)
obs.: Pode inverter, por exemplo com o flex-direction: column; -->


Exemplos 3:

```html
<div class="container">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>
```

```css
.container {
    display: flex;
    flex-direction: column;   /* fica em coluna */
    justify-content: flex-end;   /* aqui alinha no final do eixo main, como mudou pra coluna, ficará lá embaixo */
    height: 100vh;   /* aumenta a altura da página */
}

```


Exemplos 4:

```html
<div class="container">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>
```

```css
.container {
    display: flex;
    border: 1px solid red;
    height: 80vh;   /* vh é melhor porque considera o tamanho da tela */
}

.item {
    background-color: gray;
    border: 1px solid;
    flex: 1;   /* ajusta todos os itens para preencher toda a página */
}

```

