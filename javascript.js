window.addEventListener('pageshow', function (event) {
  const navType = window.performance.getEntriesByType("navigation")[0].type;

  if (event.persisted || navType === "back_forward") {
    // Recarrega a página completamente ao voltar do histórico
    window.location.reload();
  }
});
