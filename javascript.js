window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    // Se veio do cache do histórico, recarrega a página
    window.location.reload();
  }
});


  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
      location.reload();
    }
  });

  
document.querySelectorAll('.link-com-animacao').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Evita que o link redirecione imediatamente

    const destino = this.getAttribute('href'); // Pega o destino do link
    const conteudo = document.getElementById('butao01', 'butao02', 'butao03', 'butao04');

    // Adiciona a classe de animação de saída
    conteudo.classList.add('animar');

    // Espera o tempo da animação antes de redirecionar
    setTimeout(() => {
      window.location.href = destino;
    }, 500); // Tempo em milissegundos (deve ser igual ao da animação no CSS)
  });
  });