/* =========================
   PERSONALIZATION — EDIT HERE
   ========================= */
const CRUSH_NAME = "ADRIANA/NANA";
const YOUR_NAME = "Ammeer/Meer";

const PERSONAL_MESSAGE = `Dear ${CRUSH_NAME},

Dont be sad over those bad people that bullies you, mock your cosplays etc their just jealous of you. You are an incredible woman, kind, caring, pretty and with a pure soul. Just remember ill always be
on the sidelines cheering you on!!! like a fan cheering on an idol :3, Anyway i made this cause i felt generous.. or am I? who knows (ゝω・´★), ill let you figure that one out on yourself ;p.`;

const INTRO_MESSAGE =
  `A tiny garden made of pixels, pinks, and a few flowers that represents you to me.`;

/* ========================= */

const openingScreen = document.getElementById("openingScreen");
const unwrapBtn = document.getElementById("unwrapBtn");
const bloomBtn = document.getElementById("bloomBtn");
const bouquet = document.getElementById("bouquet");
const noteCard = document.getElementById("noteCard");
const noteText = document.getElementById("noteText");
const flowerName = document.getElementById("flowerName");
const resetBtn = document.getElementById("resetBtn");
const petals = document.querySelector(".petals");
const flowers = document.querySelectorAll(".flower");

document.getElementById("heroName").textContent = CRUSH_NAME;
document.getElementById("senderName").textContent = YOUR_NAME;
document.getElementById("signatureName").textContent = YOUR_NAME;
document.getElementById("introMessage").textContent = INTRO_MESSAGE;

document.getElementById("personalMessage").innerHTML =
  PERSONAL_MESSAGE.replace(/\n/g, "<br>");

function makePetals(count = 24) {
  petals.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const petal = document.createElement("span");
    petal.className = "petal-fall";
    const size = 8 + Math.random() * 10;
    const left = Math.random() * 100;
    const duration = 4.5 + Math.random() * 4;
    const delay = Math.random() * 1.8;
    const drift = `${-80 + Math.random() * 160}px`;

    petal.style.left = `${left}vw`;
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.35}px`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;
    petal.style.setProperty("--drift", drift);
    petals.appendChild(petal);

    petal.addEventListener("animationend", () => petal.remove());
  }
}

unwrapBtn.addEventListener("click", () => {
  openingScreen.classList.add("opening");
  unwrapBtn.disabled = true;
  unwrapBtn.querySelector("span").textContent = "opening your bouquet…";

  setTimeout(() => {
    openingScreen.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      bouquet.classList.add("ready", "bloom");
      makePetals();
      bloomBtn.querySelector("span").textContent = "bloomed for you";
    }, 350);
  }, 950);
});

bloomBtn.addEventListener("click", () => {
  bouquet.classList.remove("ready", "bloom");
  void bouquet.offsetWidth;
  bouquet.classList.add("ready", "bloom");
  makePetals();
  bloomBtn.querySelector("span").textContent = "bloomed for you";
});

flowers.forEach((flower) => {
  flower.addEventListener("click", () => {
    flowerName.textContent = `${flower.dataset.flower} ♡`;
    noteText.textContent = flower.dataset.meaning || "A tiny flower note, just for you. ♡";
    noteCard.classList.add("show");

    flowers.forEach((item) => item.classList.remove("selected"));
    flower.classList.add("selected");

    noteCard.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

resetBtn.addEventListener("click", () => {
  noteCard.classList.remove("show");
  flowers.forEach((flower) => flower.classList.remove("selected"));
});
