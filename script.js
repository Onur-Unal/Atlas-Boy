
document.addEventListener("DOMContentLoaded", () => {
  const text = "Atlas 1 Yaşında!";
  const target = document.getElementById("animated-text");
  let index = 0;

  const type = () => {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(type, 150);
    }
  };

  type();

  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 90,
      spread: 360,
      origin: { x: Math.random(), y: 0 },
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
});
