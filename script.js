const mensajes = [
    "Bloque 1: Si fueras parte de este mundo, serías el corazón del servidor.",
    "Bloque 2: No necesito brújula… contigo, siempre encuentro el camino.",
    "Bloque 3: Hay muchos mundos, pero en ninguno hay otro Maxwell.",
    "Bloque 4: Cada clic es como hablar contigo: inesperado y especial.",
    "Bloque 5: ¿Sabías que este juego lo hice solo para ti? Gracias por existir."
  ];
  
  function revealMessage(index) {
    const box = document.getElementById("messageBox");
    box.innerText = mensajes[index];
  
    // Efecto visual al hacer clic
    box.style.animation = "flash 0.5s ease";
    setTimeout(() => (box.style.animation = ""), 500);
  
    // Efecto de sonido al hacer clic
    playClickSound();
  
    // Partículas al hacer clic en un bloque
    showParticles(event.clientX, event.clientY);
  
    // Final secreto si hace clic en todos
    clicked[index] = true;
    if (clicked.every(val => val)) {
      setTimeout(() => {
        showHeartAnimation();
        alert("Maxwell… tú eres el bloque más valioso de este mundo.");
      }, 600);
    }
  }
  
  let clicked = [false, false, false, false, false];
  
  // Reproduce un sonido de clic
  function playClickSound() {
    const audio = new Audio('All Minecraft Creeper Sounds Sound Effects for Editing.mp3');
    audio.play();
  }
  
  // Mostrar partículas al hacer clic
  function showParticles(x, y) {
    for (let i = 0; i < 10; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = `${x + Math.random() * 50 - 25}px`;
      particle.style.top = `${y + Math.random() * 50 - 25}px`;
      document.body.appendChild(particle);
      setTimeout(() => document.body.removeChild(particle), 1000);
    }
  }
  
  // Mostrar la animación de corazón
  function showHeartAnimation() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.top = "50%";
    heart.style.left = "50%";
    heart.style.transform = "translate(-50%, -50%)";
    heart.style.fontSize = "50px";
    heart.style.animation = "heartPulse 1.5s infinite";
    document.body.appendChild(heart);
  
    setTimeout(() => document.body.removeChild(heart), 3000); // Eliminar después de 3 segundos
  }
  
  // Reiniciar el juego
  function restartGame() {
    clicked = [false, false, false, false, false];
    document.getElementById("messageBox").innerText = "";
    alert("¡Empezando de nuevo, Maxwell!");
  }
  