window.addEventListener('SKELETON_TRIGGERED', () => {
  if (document.getElementById('skeleton-container')) return;

  const container = document.createElement('div');
  container.id = 'skeleton-container';
  container.className = 'skeleton-overlay';

  const skeleton = document.createElement('img');
  skeleton.className = 'skeleton-img';
  
  // O truque do Date.now() força o GIF a reiniciar do zero sempre!
  const gifUrl = chrome.runtime.getURL("skeleton.gif");
  skeleton.src = `${gifUrl}?t=${Date.now()}`; 

  container.appendChild(skeleton);
  document.body.appendChild(container);

  // Aumentei o tempo para 5 segundos para dar tempo de ver o GIF todo
  setTimeout(() => {
    container.style.opacity = '0';
    setTimeout(() => container.remove(), 400);
  }, 5000); 
});
