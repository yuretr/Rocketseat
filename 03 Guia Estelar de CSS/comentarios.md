# Comentários

    * Não irá afetar seu código
    * Ajuda a lembrar blocos de códigos
    * Deixa dicas para leitura
    * Ajuda outros a entenderem
    * Nunca esqueça de fechar um comentário aberto

Comentários começam com `/*` e terminam com `*/` 

````css

/* Básico */

/*------------------------------------*/

body {
    font: lem/150% Helvetica, Arial, sans-serif;
    padding: lem;
    margin: 0 auto;
    max-width: 33em;
}

@media (min-width: 70em) {
    body {
        font-size: 130%;
    }
}

h1 {fonte-size: 1.5em;}

/* Elementos Específicos */

/*------------------------------------*/

div p, #id:first-line {
    background-color:red;
    border-radius: 3px;
}

div p {
    margin: 0;
    padding: 1em;
}

div p + p {
    padding-top: 0;
}

/* Pode habilitar ou desabilitar partes do seu código */

/* .especial {
    color:red;
} */

p {
    color: blue;
}



