# Atribuindo mais estilos Às fontes

## font-variant

- Faz variações na apresentação da fonte

```css

p {
	font-variant: small-caps;
}
/* ele altera a fonte, por exemplo deixa tudo em CAPSLK, mas as letras menores em relação as maiores */

```

https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant


----------------------------------------------------------------

## font-stretch

- Alargamento ou encolhimento da fonte
- Aceita palavras-chaves como: expanded, condensed, normal
- Aceita porcentagens de 50% a 200%
- Essa propriedade não vai funcionar em todas as fontes

```css

p {
	font-stretch: expanded;
}
/* depende da fonte para funcionar */

```

https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch
Referência

https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals


----------------------------------------------------------------

## letter-spacing

* Define o espaçamento entre os caracteres

```css

p {
	letter-spacing: 4px;       /* pode usar outras unidades de medidas */
}

```

https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing


----------------------------------------------------------------

## word-spacing

* Define o espaçamento entre palavras

```css

p {
	word-spacing: 1em;
}

```

https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing


----------------------------------------------------------------

## line-height

- Define os espaços entre linhas
- Pode ser com unidades ou sem unidades de medida
- Valores comuns: 1.5 ou 2

```css

p {
	line-height: 1.5;
}

```

https://developer.mozilla.org/en-US/docs/Web/CSS/line-height


----------------------------------------------------------------

## text-transform

- Transformação do texto
- Valores podem ser: none | capitalize | uppercase | lowercase | full-width | full-size-kana

```css

p {
	text-transform: uppercase;
}

/*  uppercase, deixa todas as letras maiúsculas
    lowercase, deixa todas as letras minúsculas
    capitalize, letras iniciais serão maiúsculas
    none, não aplica nenhuma transformação de texto */

```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform


----------------------------------------------------------------

## text-decoration

* Aparência decorativa de um texto
* line: underline | overline | line-through
        * podemos aplicar mais de 1 valor
* style: wavy | dotted | double | dashed | solid
* color: <color> values

```css

h1 {
    text-decoration: underline; /* shorthand */
}

p {
    text-decoration: wavy overline blue; /* shorthand */
}

/*  underline, linha fica embaixo das escritas
    overline, linha fica acima das escritas
    line-through, linha fica no meio das escritas */

/*  wavy, muda o estilo da linha, nesse caso ondulada
    dashed, traços sem sequência
    dotted, pontos em sequência
    solid, padrão */
    

h1 {
    text-decoration: underline overline line-through;
}   /* podemos misturar juntas */


h1 {
    text-decoration: underline solid yellow;
}   /* podemos colocar cores */

```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration


----------------------------------------------------------------

## text-align

- Alinhamento de um texto
- Valores: start | end | left | right | center | justify | match-parent

```css

p {
	text-align: center;
}

```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-align


----------------------------------------------------------------

## text-shadow

- Sombra aplicada a um texto
- Permite múltiplos valores

```css

p {
  text-shadow: 1px 1px 1px red,
	       2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}

/* pode deixar somente um, retirar o green por exemplo */

```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow


----------------------------------------------------------------

## Shorthand

Podemos usar o shorthand font para determinar os seguintes valores:
font-style, font-variant, font-weight, font-stretch, font-size, line-height e font-family

```css

p {
    /* -style -variant -weidht -stretch -size -line-height e -family */
    font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}

/* size e line-height são separados por uma barra "/" */

```

