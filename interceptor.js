(function() {
  const OriginalNotification = window.Notification;

  window.Notification = function(title, options) {
    // Avisa ao resto da extensão que uma notificação foi disparada
    window.dispatchEvent(new CustomEvent('SKELETON_TRIGGERED'));
    
    // Executa a notificação original para o site não travar
    return new OriginalNotification(title, options);
  };

  // Mantém as propriedades da API original (importante para sites de teste)
  Object.assign(window.Notification, OriginalNotification);
  console.log("💀 Interceptor do Skeleton Shield Ativado!");
})();