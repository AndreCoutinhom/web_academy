//somente letras minúsculas!!!
function criptografar(texto, deslocamento = 3) {
    texto = texto.toLowerCase(); // deixa tudo minúsculo
    let resultado = "";

    const alfabeto = "abcdefghijklmnopqrstuvwxyz";

    for (let letra of texto) {
        //se não for letra só adiciona e continua
        if (!alfabeto.includes(letra)) {
            resultado += letra;
            continue;
        }

        //pega a posição da letra no alfabeto
        let pos = alfabeto.indexOf(letra);

        //desloca
        let novaPos = (pos + deslocamento) % 26;

        resultado += alfabeto[novaPos];
    }

    return resultado;
}


//descriptografa voltando o deslocamento
function descriptografar(texto, deslocamento = 3) {
    texto = texto.toLowerCase();
    let resultado = "";

    const alfabeto = "abcdefghijklmnopqrstuvwxyz";

    for (let letra of texto) {
        if (!alfabeto.includes(letra)) {
            resultado += letra;
            continue;
        }

        let pos = alfabeto.indexOf(letra);

        //volta no alfabeto
        let novaPos = (pos - deslocamento + 26) % 26;

        resultado += alfabeto[novaPos];
    }

    return resultado;
}


//coloca no localStorage já criptografado
function salvarCriptografado(chave, valor, deslocamento = 3) {

    if (typeof valor === "object") {
        valor = JSON.stringify(valor);
    }

    const cript = criptografar(valor, deslocamento);
    localStorage.setItem(chave, cript);
}


//parte de descriptografia
function lerDescriptografado(chave, deslocamento = 3) {
    const dado = localStorage.getItem(chave);
    if (!dado) return null;

    const texto = descriptografar(dado, deslocamento);

    try {
        return JSON.parse(texto);
    } catch {
        return texto;
    }

}
