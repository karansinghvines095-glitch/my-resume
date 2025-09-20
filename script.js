document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  let index = 0;

  setInterval(() => {
    // sabse pehle sabka glow hatao
    cards.forEach(card => {
      card.style.boxShadow = "none";
    });

    // ab current card pe yellow glow lagao
    cards[index].style.boxShadow = "0 0 25px 8px rgba(255, 215, 0, 0.9)";

    // next card ki turn
    index = (index + 1) % cards.length; 
  }, 1000); // 1 second ke baad agla card glow karega
});
