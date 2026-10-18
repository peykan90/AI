
const form = document.getElementById("chatForm");
const input = document.getElementById("userInput");
const messages = document.getElementById("messages");
const suggestions = document.querySelector(".suggestions");

function normalize(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[؟?!.,،؛]/g, "");
}

function getReply(message) {
  const m = normalize(message);

  if (
    m.includes("salam") ||
    m.includes("slm") ||
    m.includes("سلام")
  ) {
    return "Salam rafiq! 😎 Khoobi? Che komaki az dastam bar miad?";
  }

  if (
    m.includes("khobi") ||
    m.includes("khoobi") ||
    m.includes("خوبی") ||
    m.includes("chetori")
  ) {
    return "Man khoobam, merci! 💙 To chetori?";
  }

  if (
    m.includes("اسم") ||
    m.includes("کی هستی") ||
    m.includes("who are you") ||
    m.includes("name")
  ) {
    return "Man PEYKAN AI hastam! Yek chatbot demo ke ba HTML, CSS va JavaScript sakhtim. 🚀";
  }

  if (
    m.includes("کمک") ||
    m.includes("help") ||
    m.includes("چه کار")
  ) {
    return "Mitunam ba soalhaye sade, salam-o-ahvalporsi va chand soal-e amuzeshi komaket konam. Baraye javabaye pishrafte bayad yek model-e AI vasl konim.";
  }

  if (
    m.includes("python") ||
    m.includes("پایتون")
  ) {
    return "Python yek zabane programming-e kheili khoob baraye yadgiri AI hast! 🐍";
  }

  if (
    m.includes("حقیقت") ||
    m.includes("جالب") ||
    m.includes("fact")
  ) {
    return "Yek fact-e jaleb: rooz-e sayyare Venus az sal-e an toolani-tare! 🪐";
  }

  if (
    m.includes("ممنون") ||
    m.includes("مرسی") ||
    m.includes("merci") ||
    m.includes("thanks")
  ) {
    return "Ghorboonet rafiq! 💙";
  }

  if (
    m.includes("خداحافظ") ||
    m.includes("bye")
  ) {
    return "Ta bad rafiq! Movafagh bashi. 👋";
  }

  return "Jalebe! ✨ Mituni soal ro sade-tar beporsi. In noskhe demo hast va hanooz be yek model-e AI-e vagheyi vasl nashode.";
}

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = `message ${type}`;

  // متن کاربر به‌صورت امن نمایش داده می‌شود.
  message.textContent = text;
  messages.appendChild(message);

  messages.scrollTop = messages.scrollHeight;
}

function sendMessage(text) {
  const value = text.trim();
  if (!value) return;

  if (suggestions) {
    suggestions.remove();
  }

  addMessage(value, "user");
  input.value = "";
  input.focus();

  setTimeout(() => {
    addMessage(getReply(value), "bot");
  }, 350);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage(input.value);
});

document.querySelectorAll("[data-message]").forEach((button) => {
  button.addEventListener("click", () => {
    sendMessage(button.dataset.message);
  });
});

document.getElementById("clear").addEventListener("click", () => {
  messages.replaceChildren();
  addMessage(
    "Salam rafiq! 👋 من PEYKAN AI هستم. از کجا شروع کنیم؟",
    "bot"
  );
  input.focus();
});
