/*é colocado dentro dos parenteses do querySelector o que queremos selecionar,
neste caso sendo o .result(ponto usado por se referir a uma classe) a mesma coisa com o .igual*/
const resultado = document.querySelector(".result");
const conta = document.getElementById("conta");
const confirmar = document.querySelector(".igual");


function insert(valor) {
  conta.innerHTML += valor;
}

function clean() {
  resultado.innerHTML = " ";
  conta.innerHTML = " ";
}

function backspace() {
  if (conta.textContent) {
    let result = document.getElementById("conta").innerHTML;
    conta.innerHTML = result.substring(0, result.length - 1);
  }
}

function confirma() {
  if (resultado.textContent != "Erro") {
    document.getElementById("resultado").innerHTML = eval(conta.innerHTML);
  }
}

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