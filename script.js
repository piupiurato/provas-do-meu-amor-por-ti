const frases = document.querySelectorAll(".frase");
let delay = 4000;

frases.forEach((frase, index) => {
  setTimeout(() => {
    frase.style.display = "block";
  }, delay * (index + 1));
});

document.getElementById("botao-final").addEventListener("click", () => {
  document.getElementById("mensagem-final").style.display = "block";
});
