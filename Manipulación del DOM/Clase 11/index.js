const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafo = document.querySelector('.parrafito')
const pid = document.getElementById('pid')
const input = document.querySelector('input')

//h1.innerHTML = 'patito <br> feo' Agrega codigo html si ingresamos una etiqueta
//h1.innerText = 'patito <br> feo' Agrega solo texto dentro de la etiqueta


/*
console.log(h1.getAttribute('atributoAleatorio')); Imprimo en consola el valor de atriboAleatorio de mi elemento h1
console.log(h1.getAttribute('class')); Imprimo en consola el valor de class de mi elemento h1 que es verde
h1.setAttribute('class', 'rojo')   Cambio el valor del atributo class que era "verde" a "rojo"
console.log(h1.getAttribute('class')); Imprimo en consola el valor de class de mi elemento h1 que es rojo ahora
*/
/*  
        *h1.classList classList nos ayuda con todo lo que tenga que ver con clases
h1.classList.add       Añade una clase a mi elemento
h1.classList.remove    Remueve un clase de mi elemento
h1.classList.toggle    Si mi elemento ya tiene ese clase la quita y si no la tiene la añade (se usa mucho con eventos)
h1.classList.contains  Devuelve true si mi elemento tiene ese clase y false si no
*/

input.value = '1234'

/*  
        *document.createElement Nos permite crear un elemento HTML que queramos
*/
const imagen = document.createElement('img')
imagen.setAttribute('src', 'https://images.pexels.com/photos/3972156/pexels-photo-3972156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

pid.append(imagen)

//pid.replaceWith(imagen) Remplace todo el contenido de mi elemento por la imagen

/* 
Primero en la linea 29 creamos el elemento img y lo guardamos en una constante,
despues en la linea 30 le pusimos el atributo src con el valor src (tambien se podia hacer con imagen.src)
y por ultimo en la linea 32 le añadimos la imagen a nuestro elemento pid 
*/