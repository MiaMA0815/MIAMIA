// script.js — Mia Ma Portfolio

function showMessage() {
  const message = document.getElementById("message");
  const messages = [
    "Thanks for stopping by! 😊",
    "Hope you enjoyed learning about me!",
    "Let's stay in touch!",
    "Wishing you a wonderful day! 🌸"
  ];

  // Pick a random friendly message each time the button is clicked
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  message.textContent = randomMessage;
  message.classList.remove("hidden");
}
