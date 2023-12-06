/*é colocado dentro dos parenteses do querySelector oq queremos selecionar,
neste caso sendo o .result(ponto usado por se referir a uma classe), a mesma coisa com o .igual*/
const resultado = document.querySelector(".result");
const conta = document.getElementById("conta");
const confirmar = document.querySelector(".igual");

/*O insert significa que eu quero inserir aluma coisa. */
function insert(valor) {
  conta.innerHTML += valor;
}

/*A função clean é usada para limpar tudo que tá dentro do <p> */
function clean() {
  resultado.innerHTML = " ";
  conta.innerHTML = " ";
}

/*backspace é para qunado eu quero apagar somente o ultimo digito */
function backspace() {
  if (conta.textContent) {
    let result = document.getElementById("conta").innerHTML;
    conta.innerHTML = result.substring(0, result.length - 1);
  }
}

/*confirma é para enviar o resultado final ao p quando clicar no = */
function confirma() {
  if (resultado.textContent != "Erro") {
    document.getElementById("resultado").innerHTML = eval(conta.innerHTML);
  }
}

/*verifica se uma tecla é apertada*/
document.addEventListener("keydown", (event) => {
  const keyName = event.key;

  if (!isNaN(keyName)) {
    insert(keyName);
  }

  if (
    keyName == "/" ||
    keyName == "*" ||
    keyName == "+" ||
    keyName == "-" ||
    keyName == "."
  ) {
    insert(keyName);
  }

  if (keyName == "Enter") {
    confirma();
  }

  if (keyName == "Delete") {
    clean();
  }

  if (keyName == "Backspace") {
    backspace();
  }
});