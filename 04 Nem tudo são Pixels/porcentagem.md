# Porcentagens %

* Em muitos casos é tratado da mesma maneira que as distâncias <length>
* Sempre será relativo a algum valor



```html

<p>oi</p>


<ul>
	<li>One</li>
	<li>Two</li>
	<li>Three
		<ul>
			<li>Three A</li>
			<li>Three B</li>
			<ul>
				<li>Three B 2</li>
			</ul>
		</ul>
	</li>
</ul>


<div></div>

```


```css

html {     /* html é a raiz, 50% da raiz (16px) fica em 8px */
    font-size: 50%
}


li {     /* li é o elemento pai, reduzido as fonts para 80%, e os demais dentro em cascata, diminuindo ainda mais cada um deles */
    font-size: 80%
}


body{     /* html é a raiz, 50% da raiz */
    width: 50%;
}

div {     /* body elemento pai, anteriormente já reduziu 50%, agora nesse código reduzindo 50% novamente encima dos 50% restantes */
    background-color: blue;
    width: 50%;
    height: 100%;
}

```

