function runTypingEffect() {
    const text = 'My Name IS Venos.';
    const typingElement = document.getElementById('typing-text');
    // agar btawe nusenaka hewashtr bnusre nrxe typingDelay zyad dakain bo nmuna daikain ba 300
    const typingDelay = 100;
  
    typeText(text, typingElement, typingDelay);
  }
  
  function typeText(text, typingElement, delay) {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        typingElement.textContent += text.charAt(i);
      }, delay * i);
    }
  }
  
  document.addEventListener('DOMContentLoaded', runTypingEffect);  