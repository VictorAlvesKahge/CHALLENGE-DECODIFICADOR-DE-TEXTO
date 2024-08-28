function botaoCriptografar() {
  const inputValue = document.getElementById('entrada').value;
  let palavraCriptografada = '';
  const resultado = criptografar(inputValue);
  document.getElementById('imagem-conteudo').hidden = true;
  document.getElementById('titulo-texto').hidden = true;
  document.getElementById("texto").innerText = resultado;
  document.getElementById('botao-copiar').hidden = false;
}

async function receberPalavraCriptografada() {
  const palavraCriptografada = document.getElementById('entrada').value;
  const resultadoDescriptografado = await descriptografar(palavraCriptografada);
  document.getElementById("texto").innerText = resultadoDescriptografado;
  document.getElementById('imagem-conteudo').hidden = true;
  document.getElementById('titulo-texto').hidden = true;
  document.getElementById('botao-copiar').hidden = false;
}

function copiar() {
  let textCopy = document.getElementById('texto');
  navigator.clipboard.writeText(textCopy.innerText);
  document.getElementById("texto").innerText = "Nenhuma Mensagem";
}

function criptografar(string) {
  const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (string.includes(matrizCodigo[i][0])) {
      string = string.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    } 
  }
  return string;
}

async function descriptografar(stringEncriptada) {
  const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][1])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    } 
  }
  return stringEncriptada;
}
