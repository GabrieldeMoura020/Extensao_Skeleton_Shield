// Exemplo de como disparar a ação após o contador
chrome.scripting.executeScript({
  target: { tabId: details.tabId },
  world: 'MAIN', // Isso permite que o script acesse funções do próprio site se necessário
  func: () => {
    // O código que você quer rodar na página vai aqui
    new Notification("Invasão de Esqueleto!"); 
  }
});

            // Mantém as propriedades originais intactas
            MockNotification.prototype = originalNotification.prototype;
            Object.assign(MockNotification, originalNotification);
            MockNotification.requestPermission = originalNotification.requestPermission.bind(originalNotification);
            
            window.Notification = MockNotification;
        })();
    `;
    
    // Tenta anexar de forma segura esperando o documento existir
    const appendToDOM = () => {
        const target = document.head || document.documentElement;
        if (target) {
            target.appendChild(script);
            script.remove();
        } else {
            setTimeout(appendToDOM, 1);
        }
    };
    appendToDOM();
}

// 2. Escuta o aviso e bota o esqueleto na tela
window.addEventListener('skeletonIntercepted', () => {
    // Evita acumular vários na tela ao mesmo tempo
    if (document.querySelector('.skeleton-overlay')) return;

    const overlay = document.createElement("div");
    overlay.className = "skeleton-overlay";
    
    // O ?t= força o GIF a reiniciar toda vez
    // Troque a linha do gifUrl por esta:
const gifUrl = "https://imgur.com/a/8Zn9go4";
    overlay.innerHTML = `<img src="${gifUrl}" class="skeleton-img"/>`;

    (document.body || document.documentElement).appendChild(overlay);

    // Some após 3 segundos
    setTimeout(() => {
        overlay.style.opacity = "0";
        setTimeout(() => overlay.remove(), 300);
    }, 3000);
});

injectScript();