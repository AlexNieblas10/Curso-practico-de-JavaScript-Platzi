const h1 = document.querySelector('h1')
let input1 = document.querySelector('#calculo1')
let input2 = document.querySelector('#calculo2')
const boton = document.getElementById('btnCalcular')
let parrafo = document.getElementById('resultado')


function clickAlBoton() {
    if (isNaN(input1.value) || isNaN(input2.value)) {
        parrafo.textContent = 'Ingrese un numero valido en los inputs';
    } else {
        parrafo.textContent = 'Tu resultado es: ' + (parseInt(input1.value)+ parseInt(input2.value))
    }
}

boton.addEventListener('click', clickAlBoton)