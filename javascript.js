document.getElementById("meuBotao01", "meuBotao02", "meuBotao03", "meuBotao04").addEventListener("click", function () {
  let botao = this;

  // Adiciona a classe de animação
  botao.classList.add("animar");

  // Espera 300ms (tempo da animação) e só então muda de página
  setTimeout(function () {
    window.location.href = "pagina-seguinte.html";
  }, 900);
});


window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    // Se veio do cache do histórico, recarrega a página
    window.location.reload();
  }
});