let listaNombres = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    console.log(nombre)
    if (nombre === "") {
        alert("Debes de proporcionar un nombre válido");
    }else{
        listaNombres.push(nombre);
        console.log(listaNombres);
    }

}
