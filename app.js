var cuentas = [
    { nombre: "Pedro", saldo: 200 },
    { nombre: "Isabel", saldo: 290 },
    { nombre: "Lily", saldo: 67 }
];

var cuentaSeleccionada = null;

function iniciarSesion() {
    var seleccion = document.getElementById("cuenta");
    var passwordInput = document.getElementById("password");
    cuentaSeleccionada = seleccion.value;

    if (cuentaSeleccionada >= 0 && cuentaSeleccionada < cuentas.length) {
        var password = prompt("Ingresa tu contraseña:");

        if (password === "1234") { // Contraseña de ejemplo, puedes personalizarla
            document.getElementById("operaciones").style.display = "block";
            alert("¡Inicio de sesión exitoso!");
        } else {
            alert("Contraseña incorrecta. Intenta nuevamente.");
            cuentaSeleccionada = null;
        }
    } else {
        alert("Selecciona una cuenta válida.");
        cuentaSeleccionada = null;
    }
}

function consultarSaldo() {
    mostrarResultado("Saldo actual: $" + cuentas[cuentaSeleccionada].saldo);
}

function ingresarMonto() {
    var monto = parseFloat(prompt("Ingresa el monto a ingresar:"));

    if (!isNaN(monto) && monto > 0) {
        cuentas[cuentaSeleccionada].saldo += monto;
        mostrarResultado("Ingreso exitoso. Nuevo saldo: $" + cuentas[cuentaSeleccionada].saldo);
    } else {
        mostrarResultado("Error: Ingresa un monto válido.");
    }
}

function retirarMonto() {
    var monto = parseFloat(prompt("Ingresa el monto a retirar:"));

    if (!isNaN(monto) && monto > 0) {
        if (cuentas[cuentaSeleccionada].saldo - monto >= 10 && cuentas[cuentaSeleccionada].saldo - monto <= 990) {
            cuentas[cuentaSeleccionada].saldo -= monto;
            mostrarResultado("Retiro exitoso. Nuevo saldo: $" + cuentas[cuentaSeleccionada].saldo);
        } else {
            mostrarResultado("Error: El monto debe estar entre $10 y $990.");
        }
    } else {
        mostrarResultado("Error: Ingresa un monto válido.");
    }
}

function mostrarResultado(mensaje) {
    document.getElementById("resultado").innerHTML = mensaje;
}
