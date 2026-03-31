chrome.scripting.executeScript({
  target: { tabId: idDaSuaAba },
  world: 'MAIN', // Isso faz o script rodar no contexto da página, não da extensão
  func: () => {
    // Coloque aqui o que estava no injectScript
    console.log("Script injetado com segurança!");
    new Notification("Invasão de Esqueleto!");
  }
});
