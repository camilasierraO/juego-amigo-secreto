let listaNombres = [];
const lista = document.getElementById("listaAmigos");
const valorCaja = document.getElementById("amigo");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
    const nombre = valorCaja.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    listaNombres.push(nombre);
    limpiarCaja();
    actualizarLista();
}

function limpiarCaja() {
    valorCaja.value = "";
    resultado.innerHTML = "";
}

function actualizarLista() {
    lista.innerHTML = ""; // solo limpia la lista, no el resultado

    listaNombres.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert("Debes ingresar nombres para el sorteo");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaNombres.length);
    lista.innerHTML = "";
    resultado.innerHTML = `🎉 El amigo secreto es: ${listaNombres[indiceSorteado]}`;
}
