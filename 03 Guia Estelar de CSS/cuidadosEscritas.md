# Cuidados com escritas em CSS

```html
<h1>Aprendendo CSS</h1>
<p>É muito legal estilizar a página</p>
```


```css

p {
    margin: 0 auto;
}

p {
    margin: 0auto; /* incorreto, não é junto */
}

p {margin: 0auto;} /* incorreto, cuidado com as identações, estrutura */



p {
    margin: 0 auto;
    padding-left: 15px;
}

p {
    margin: 0 auto;
    padding - left: 15px; /* incorreto, espaçamentos incorretos */
}


```