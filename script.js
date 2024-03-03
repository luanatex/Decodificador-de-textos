

const textArea = document.querySelector(".textarea");
const mensagem = document.querySelector(".textarea2");
const botaoCopiar = document.querySelector(".botao_copiar");

// Chaves:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";

}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }

    return stringEncriptada;

}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";

}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }

    }

    return stringDesencriptada;

}

// function copiarTexto() {
//     let textoCopiado = mensagem;
//     textoCopiado.Select();
//     document.execCommand("copy");
//     console.log(textoCopiado.value);
// }
function copiarTexto() {
    navigator.clipboard.writeText(mensagem.value)
  .then(() => {
    console.log(`Texto copiado para a área de transferência! Texto copiado: ${mensagem.value}`);
  })
  .catch((error) => {
    console.error('Falha ao copiar texto para a área de transferência:', error);
  });
}
