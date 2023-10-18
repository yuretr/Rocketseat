# A Cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo.

É levado em consideração 3 fatores:

1. Origem do estilo
2. Espeficidade
3. Importância


# Origem do estilo

inline > tag style > tag link

(inline mais forte que tag style, tag style mais forte que tag link, essa é a sequência que é considerada)


## Espeficidade

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

0. Universal selector, combinators e negation pseudo-class (:not())
1. Element type selector e pseudo-elements (::before, ::after)
10. Classes e attribute selectors ([type="radio])
100. ID selector
1000. Inline


### A regra !important

* cuidado, evite o uso
* não é considerado uma boa prática
* quebra o fluxo natural da cascata



```html
<h1>Título</h1>
<p>parágrafo</p>
```

```css
h1 {
    color: red;
}
h1 {
    color: blue;  /* o segundo subscreve encima do primeiro, então fica blue, isso é cascata */
}
```



```css
h1 {
    color: red;
}
h1 {
    color: blue;  
}
* {
    color: green;  /* continua blue, pois conforme Espeficidade type selector = 1 (h1) e universal selector = 0 (*), então o h1 é considerado. Isso serve para a ordem dos demais, conforme cálculo */
}
```



```css
h1 {
    color: red;
}
h1 {
    color: blue !important;  /* ele deixa de lado todas as regras, e considera esse, mas não é recomendado. Em ultimo caso, um exemplo quando usamos importação de CSS de outra pessoa e não conseguimos alterar algo de jeito algum */
}
* {
    color: green;
}
```

