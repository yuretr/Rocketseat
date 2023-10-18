# Vendor Prefixes

Permite que browsers adicione `features` (novidades do CSS) a fim de colocar em uso alguma novidade que vemos no CSS

(Se os navegadores já dão suporte, não precisa usar, mas caso ainda seja algo novo e não tenha suporte precisa utilizar)

## Exemplo

```css

p {

	-webkit-background-clip: text; /* Chrome, Safari, iOS e Android */
	-moz-background-clip: text; /* Mozilla (Firefox) */
	-ms-background-clip: text; /* Internet Explorer ou Edge */
	-o-background-clip: text; /* Opera */

}

```

# Consultas

https://ireade.github.io/which-vendor-prefix

https://caniuse.com