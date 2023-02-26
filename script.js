const textarea = document.querySelector(".text-area"); // Capturar lo que escribimos
const mensaje = document.querySelector(".text-mensaje");
const copia = document.querySelector(".boton-copiar");
copia.style.display = "none"

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"



function botonEncriptar(){
    if(!validarTexto()) {
    const textoEncriptado=encriptar(textarea.value);
    mensaje.value=textoEncriptado;
    textarea.value="";
    mensaje.style.backgroundImage="none";
    copia.style.display = "block"
    }
}

function botonDesencriptar(){
    const textoEncriptado=desencriptar(textarea.value);
    mensaje.value=textoEncriptado;
    textarea.value="";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [ ["e","enter"],
                        ["i","imes"],
                        ["a","ai"],
                        ["o","ober"],
                        ["u","ufat"]];
    stringEncriptado=stringEncriptado.toLowerCase();

    for (let i=0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
            }
    }
    return stringEncriptado;

}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [ ["e","enter"],
                        ["i","imes"],
                        ["a","ai"],
                        ["o","ober"],
                        ["u","ufat"]];
    stringDesencriptado=stringDesencriptado.toLowerCase();

    for (let i=0; i < matrizCodigo.length; i++){
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado=stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
            }
    }
    return stringDesencriptado;

}

function botonCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}