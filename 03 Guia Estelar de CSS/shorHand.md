# Shorthand

* junção de propriedades
* resumido
* legível


```css

/* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /* background shorthand , junta todos os códigos de forma resumida */
    background: #000 url(images/bg.gif) no-repeat left top;


    /* font properties */
    font-style: italic;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.2;
    font-family: Arial, sans-serif;

    /* font shorthand , junta todos os códigos de forma resumida */ 
    font: bold italic .8em/1.2 Arial, sans-serif;


    /* a segunda, subscreve a primeira, e os valores que não tem, ele deixa padrão */

```

## Detalhes

* não irá considerar propriedades anteriores
* valors não especificados irão assumir o valor padrão
* geralmente, a ordem descrita não importa, mas, se houve muitas propriedades com valores semelhantes, poderemos encontrar problemas


***https://developer.mozilla.org/pt-BR/docs/Web/CSS/Shorthand_properties



