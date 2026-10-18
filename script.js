
const form = document.getElementById("chatForm");
const input = document.getElementById("userInput");
const messages = document.getElementById("messages");
const clearButton = document.getElementById("clear");

function normalize(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[؟?!.,،؛]/g, "")
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک");
}

function getReply(message) {
  const text = normalize(message);

  if (text.includes("سلام") || text.includes("درود")) {
    return "سلام رفیق! 😎 خوش اومدی به پیکان. چطور می‌تونم کمکت کنم؟";
  }

  if (
    text.includes("خوبی") ||
    text.includes("چطوری") ||
    text.includes("حالت چطوره")
  ) {
    return "ممنون که پرسیدی! 💙 من آماده‌ام باهات گفتگو کنم. تو چطوری؟";
  }

  if (
    text.includes("خودت رو معرفی") ||
    text.includes("اسم") ||
    text.includes("کی هستی") ||
    text.includes("معرفی")
  ) {
    return "من PEYKAN AI هستم؛ یک دستیار گفتگویی آزمایشی که با HTML، CSS و JavaScript ساخته شده. 🚀";
  }

  if (
    text.includes("کمک") ||
    text.includes("چه کار") ||
    text.includes("قابلیت") ||
    text.includes("بلدی")
  ) {
    return "در این نسخه می‌تونم به بعضی سؤال‌های ساده جواب بدم، احوال‌پرسی کنم و چند موضوع آموزشی رو توضیح بدم. برای پاسخ‌های هوشمندتر باید یک مدل هوش مصنوعی واقعی به من متصل بشه.";
  }

  if (text.includes("پایتون")) {
    return "پایتون یکی از زبان‌های محبوب برنامه‌نویسی برای ساخت هوش مصنوعیه. 🐍 باهاش می‌تونیم نسخه پیشرفته‌تری از پیکان بسازیم.";
  }

  if (
    text.includes("دانستنی") ||
    text.includes("حقیقت") ||
    text.includes("جالب")
  ) {
    return "یک دانستنی جالب! 🪐 سیاره زهره برای یک دور چرخش کامل به دور خودش، زمان بیشتری از یک دور گردش به دور خورشید نیاز داره.";
  }

  if (
    text.includes("ممنون") ||
    text.includes("مرسی") ||
    text.includes("متشکرم")
  ) {
    return "خواهش می‌کنم رفیق! 💙 هر وقت کمکی خواستی، من اینجام.";
  }

  if (
    text.includes("خداحافظ") ||
    text.includes("فعلا") ||
    text.includes("بای")
  ) {
    return "فعلاً رفیق! 👋 امیدوارم روز خوبی داشته باشی.";
  }

  if (
    text.includes("هوش مصنوعی") ||
    text.includes("هوشمند")
  ) {
    return "برای تبدیل پیکان به یک دستیار هوشمند واقعی، باید یک مدل زبانی رو از طریق یک سرور به سایت وصل کنیم. این نسخه فعلاً نمایشی و قانون‌محوره.";
  }

  if (
    text.includes("سایت") ||
    text.includes("برنامه نویسی") ||
    text.includes("برنامه‌نویسی") ||
    text.includes("کد")
  ) {
    return "این سایت با سه فناوری ساخته شده: HTML برای ساختار، CSS برای طراحی و JavaScript برای عملکرد و پاسخ‌گویی چت. 💻";
  }

  return "سؤال جالبیه! ✨ هنوز جواب همه سؤال‌ها رو نمی‌دونم. می‌تونی درباره پایتون، برنامه‌نویسی یا قابلیت‌های من سؤال بپرسی.";
}

function addMessage(text, type) {
  const row = document.createElement("div");
  row.className = `message-row ${type}-row`;

  const avatar = document.createElement("div");
  avatar.className = "message-avatar";
  avatar.textContent = type === "bot" ? "P" : "شما";

  const content = document.createElement("div");
  content.className = "message-content";

  const sender = document.createElement("span");
  sender.className = "sender";
  sender.textContent = type === "bot" ? "PEYKAN AI" : "شما";

  const bubble = document.createElement("div");
  bubble.className = `message ${type}`;
  bubble.textContent = text;

  content.append(sender, bubble);
  row.append(avatar, content);
  messages.appendChild(row);

  messages.scrollTop = messages.scrollHeight;
}

function sendMessage(text) {
  const value = text.trim();

  if (!value) return;

  const suggestions = document.getElementById("suggestions");
  if (suggestions) suggestions.remove();

  addMessage(value, "user");
  input.value = "";
  input.focus();

  setTimeout(() => {
    addMessage(getReply(value), "bot");
  }, 350);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  sendMessage(input.value);
});

document.querySelectorAll("[data-message]").forEach(button => {
  button.addEventListener("click", function() {
    sendMessage(button.dataset.message);
  });
});

clearButton.addEventListener("click", function() {
  messages.replaceChildren();

  const dateLabel = document.createElement("div");
  dateLabel.className = "date-label";
  dateLabel.textContent = "شروع گفتگوی جدید";
  messages.appendChild(dateLabel);

  addMessage(
    "سلام رفیق! 👋 من پیکان هستم. چه چیزی دوست داری بدونی؟",
    "bot"
  );

  input.focus();
});
