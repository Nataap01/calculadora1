var modoOscuro = false;

// Función para cambiar la ruta del CSS y el texto del botón
function cambiarCSS() {
    // Obtenemos el elemento <link> que referencia al archivo CSS
    var cssLink = document.getElementById("css-link");

    // Si estamos en modo oscuro, cambiamos a modo claro
    if (modoOscuro) {
        cssLink.href = "css/style.css"; // Cambiar la ruta al CSS de modo claro
        document.getElementById("D").textContent = "Mood Dark"; // Cambiar el texto del botón
        modoOscuro = false; // Actualizar el estado del modo
    } else {
        // Si no estamos en modo oscuro, cambiamos a modo oscuro
        cssLink.href = "css/styledark.css"; // Cambiar la ruta al CSS de modo oscuro
        document.getElementById("D").textContent = "Mood Light"; // Cambiar el texto del botón
        modoOscuro = true; // Actualizar el estado del modo
    }
}
// funcionalidad

// Variables globales
let operacionActual = '';
let operacionAnterior = '';
let operacion = undefined;

const display = document.getElementById('display');

// Función para limpiar el display
function limpiar() {
    display.value = '';
}

// Función para cambiar el signo del número
function cambiarSigno() {
    if (display.value !== '') {
        display.value = parseFloat(display.value) * -1;
    }
}

// Función para agregar el porcentaje
function agregarPorcentaje() {
    if (display.value !== '') {
        display.value = parseFloat(display.value) / 100;
    }
}

// Función para agregar un dígito al display
function agregarDigito(digito) {
    display.value += digito;
}

// Función para agregar el operador
function agregarOperador(op) {
    if (display.value === '') return;
    if (operacionActual !== '') {
        calcular();
    }
    operacion = op;
    operacionAnterior = display.value;
    display.value = '';
}

// Función para agregar un punto decimal
function agregarPunto() {
    if (display.value.includes('.')) return;
    display.value += '.';
}

// Función para calcular el resultado
function calcular() {
    let resultado;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(display.value);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case '+':
            resultado = anterior + actual;
            break;
        case '-':
            resultado = anterior - actual;
            break;
        case '*':
            resultado = anterior * actual;
            break;
        case '/':
            if (actual === 0) {
                resultado = 'Error';
            } else {
                resultado = anterior / actual;
            }
            break;
        default:
            return;
    }
    display.value = resultado;
    operacionActual = resultado;
    operacionAnterior = '';
    operacion = undefined;
}
