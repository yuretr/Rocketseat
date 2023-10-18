# Grid

- Posicionamento dos elementos dentro da caixa
- Posocionamento horizontal e vertical ao mesmo tempo  (diferente do Flex, que faz ou um ou outro)
- Pode ser flexível ou fixo
- Cria espaços para os elementos filhos habitarem


```html

<body>

    <header>Topo</header>

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
    grid-template-areas:   /* grid-template-areas, define as áreas que serão definidas */
        "header header"
        "main aside"
        "footer footer";
    
    grid-template-rows: 40px 1fr 40px; /* rows (linha), essa fração é uma idéia flexível, preenche toda altura */
    grid-template-columns: 1fr 80px;   /* columns (coluna), primeira coluna fica flexível, segunda fica fixa 80px; */
}


header {
    grid-area: header;
    background-color: red;
}
/* grid-area, define o nome para linkar com a configuração do grid-template-areas */

main {
    grid-area: main;
    background-color: blue;
}

aside {
    grid-area: aside;
    background-color: green;
}

footer {
    grid-area: footer;
    background-color: gray;
}





```






