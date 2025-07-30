let listaNombres = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    }else{
        listaNombres.push(nombre);
        limpiarCaja()
        actualizarLista()

    }

}

function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
 }
 
 function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let index = 0; index < listaNombres.length; index++) {
        const li = document.createElement("li");
        li.textContent = listaNombres[index];
        lista.appendChild(li);
        
    }
    
 }