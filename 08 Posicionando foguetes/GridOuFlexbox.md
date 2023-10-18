# Grid ou Flexbox

Podemos usar o Display Flex e Display Grid ao mesmo tempo.

```html

<body>
    <header>
        <div>Logo</div>
        <div>Menu</div>
    </header>
    <main>Conteúdo</main>
    <aside>Infos adicionais</aside>
    <footer>Rodapé</footer>
</body>

```


```css

body {
    margin: 0;
    height: 100vh;
    display: grid;
    grid-template-areas: 
    "header header"
    "main aside"
    "footer footer";
    grid-template-rows: 30px 1fr 40px;
    grid-template-columns: 1fr 80px;
}

header {
    grid-area: header;
    background-color: green;
    display: flex;   /* aplica flex nesse, e grid no body */
    justify-content: space-between;   /* aplica espaço entre os elementos */
    align-items: center;   /* os elementos e se alinham no centro da linha */
    padding: 0 8px;   /* espaçamento entre o conteúdo e as bordas */
}

main {
    grid-area: main;
    background-color: red;
}

aside {
    grid-area: aside;
    background-color: blue;
}

footer {
    grid-area: footer;
    background-color: gray;
}

```