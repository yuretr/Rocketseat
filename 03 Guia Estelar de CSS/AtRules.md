# At-rules 
(at em inglês significa @)

* Está relacionado ao comportamento do CSS
* Começa com o sinal de `@` seguido do identificador e valor

## Exemplos comuns 

- @import       (serve para incluir um CSS externo.)
- @media        (são regras condicionais para vários dispositivos.)
- @font-face    (é para colocar fontes externas.)
- @keyframes    (serve para as animations do CSS.)


```css
    @import url("http://local.com/style.css")

    @media (min-width: 500px) {
        /* rules here */
    }

    @fonte-face {
        /* rules here */
    }

    @keyframes nameofanimation {
        /* rules here */
    }
```