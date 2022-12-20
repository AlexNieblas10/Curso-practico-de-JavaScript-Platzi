# TEST DE JAVASCRIPT

## variables y operaciones.

> ### 1.  Responde las siguientes preguntas:

1. ¿Qué es una variable y para qué sirve?
	- Una variable es un espacio reservado en memoria para guardar un valor que por defecto responde a ese nombre de tu variable

2. ¿Cuál es la diferencia entre declarar e inicializar una variable?
	- Declarar una variable solo es el hecho de decirle a tu programa que hay un espacio en memoria con el nombre ese, pero no darle un valor inicializar es darle el valor que va a tener ese variable

		Ejemplo en JavaScript:
		declarar variable: `let Nombre;`
		inicializar variable: `Nombre = "Alex"`

3. ¿Cuál es la diferencia entre sumar números y concatenar strings?
	- Al sumar dos números como su nombre lo dice estamos sumando un valor a otro al concatenar dos strings o más lo que hacemos es pegarlos hacer un solo string que incluya los dos

		Ejemplo en JavaScript:
		Suma: `2 + 2 = 4`
		Concatenación: `"Hola " + "Alex" = "Hola Alex`

------------


> ### 2. Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre = String
- Apellido = String
- Nombre de usuario en Platzi = String
- Edad = Number
- Correo electrónico = String 
- Mayor de edad = Boolean
- Dinero ahorrado = Number
- Deudas = Number

------------

> ### 3. Traduce a código JavaScript las variables del ejemplo anterior.

    let nombre = "Alex";
    let apellido = "Nieblas";
    let nombreDeUsuarioEnPlatzi = "Alex Adrian";
    let edad = 18;
    let correoElectronico = "elalexnieblas@gmail.com";
    let mayorDeEdad = true;
    let dineroAhorrado = 0;
    let deudas = 0;

------------

## funciones

> ### 1.  Responde las siguientes preguntas:

1. ¿Qué es una función?
	- Una fracción de programa que hace algo específico y resuelve un problema con varias acciones

2. ¿Cuándo me sirve usar una función en mi código?
	- Cuando tienes un bloque de código que se repite mucho u ocupas usar parámetros en vez de variables

3. ¿Cuál es la diferencia entre parámetros y argumentos de una función?
	- Los parámetros son nuestras condiciones para poder hacer la función (sin declarar) una vez declarados esos parámetros ya se convierten en argumentos

------------

> ### 2.  Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```javascript
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";
console.log("Mi nombre es " + completeName + ", pero prefiero que me 	digas " + nickname + ".");
```

```javascript
function saludar(name, lastname, nickname){
    const completeName = name + lastname;
    console.log("Mi nombre es " + completeName + "pero prefiero que me digas " + nickname + ".") ;
}
```

------------

## condicionales

> ### 1. Responde las siguientes preguntas

1. ¿Qué es un condicional?
	- Algo que se cumplirá si el valor de esa condición es verdadero

2. ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
	- if (else if, else) y switch
	if, else if y else se usan normalmente juntos el if es el principal, ya que sin él no pueden existir los otros el if lo que hace es que pregunta si es verdadero un parámetro que se le pasa si ese parámetro es verdadero entonces hace algo que nosotros le diremos y si no hará otra cosa que es con el else

	Al switch se le pasa un parámetro que si es verdadero va a evaluar el resultado con una cantidad de casos que tiene para evaluar si esa es la respuesta

------------

> ### 2. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if

`const tipoDeSuscripcion = "Basic";`

```javascript
switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}```

```javascript
if(tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if(tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
else{
    console.log("Lo siento no tienes cuenta")
}```

> ###3. Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

```javascript
let miSuscripcion = "Expert"

const Suscripciones = [
    {tipo: "Free", mensaje: "Solo puedes tomar los cursos gratis"},
    {tipo: "Basic", mensaje: "Puedes tomar casi todos los cursos de Platzi durante un mes"}, 
    {tipo: "Expert", mensaje: "Puedes tomar casi todos los cursos de Platzi durante un año"},
    {tipo: "ExpertPlus", mensaje: "Puedes tomar casi todos los cursos de Platzi durante un año"}
];

for (let i = 0; i < Suscripciones.length; i++) {
    if (miSuscripcion === Suscripciones[i].tipo) {
        console.log(Suscripciones[i].mensaje);
    }
}
```

------------

## condicionales

> ### 1. Responde las siguientes preguntas

1. ¿Qué es un ciclo?
	- Una actividad a la que se le pasa un parámetro y cuando se cumpla ese parámetro le ciclo esta en bucle hasta que se deje de cumplir

2. ¿Qué tipos de ciclos existen en JavaScript?
	- For, While, doWhile

3. ¿Qué es un ciclo infinito y por qué es un problema?
	- Un ciclo infinito es un ciclo que nunca para gracias a que su parámetro no cambia cada vuelta y eso hace que no pare, es un problema porque sería un error en el programa que nunca avanzaría de ahí


------------


> ### 2. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```javascript
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

```javascript
let i = 0
let idos = 10
while (i < 5) {
    i++
    console.log("El valor de i es: " + i);
}

while (idos >= 2) {
    idos--
    console.log("El valor de i es: " + idos);
}
```

------------


> ### 3. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

```javascript
function juego(){
    for (let i = 0; i == 0;) {
        let respuesta = parseInt(prompt("¿Cuanto es 2 + 2?"))
        console.log("Intentalo de nuevo");
        if (respuesta === 4) {
            console.log("Correcto");
            break;
        }
   }
}
```

------------

## listas

> ### 1. Responde las siguientes preguntas

1. ¿Qué es un array?
	- Un array es un conjunto de cosas al que le damos el nombre de una variable para después llamar a todo lo que adjunta

2. ¿Qué es un objeto?
	- Un objeto es como un array solo que dentro de cada objeto le das unas características como: `{nombre: "reloj", costo: 2000}`

3. ¿Cuándo es mejor usar objetos o arrays?
	- Es mejor usar objetos cuando tienes listas bastantes grandes y que son de un tema diferente


------------


> ### 2. Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```javascript
const Array = ["Manzana", "Pera", "Uvas", "Platano"]
function primerObjetoDelArray(Array) {
    console.log(Array[0]);
}

primerObjetoDelArray(Array)

function todosObjetoDelArray(Array) {
    for (let i = 0; i < Array.length; i++) {
        console.log(Array[i]);  
    }
}

todosObjetoDelArray(Array)

const objeto1 ={
    nombre: "Alex",
    edad: 18,
    numero: 123
}

function imprimirObjecto(objeto) {
    for (const item in objeto) {
        console.log(objeto.item);
    }
}

imprimirObjecto(objeto1)
```
