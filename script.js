const music = document.getElementById("babyMusic");
const musicBtn = document.getElementById("musicBtn");
const startBtn = document.getElementById("startBtn");

function playMusic() {
  music.play().then(() => {
    musicBtn.textContent = "❚❚";
    musicBtn.setAttribute("aria-label", "Pause music");
  }).catch(() => {
    // Some browsers require another user tap; the button remains available.
  });
}

function pauseMusic() {
  music.pause();
  musicBtn.textContent = "♫";
  musicBtn.setAttribute("aria-label", "Play music");
}

startBtn.addEventListener("click", () => {
  playMusic();
  document.querySelector(".welcome").scrollIntoView({ behavior: "smooth" });
});

musicBtn.addEventListener("click", () => {
  if (music.paused) playMusic();
  else pauseMusic();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
