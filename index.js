const sounds = {
  w: "tom-1.mp3",
  a: "tom-2.mp3",
  s: "tom-3.mp3",
  d: "tom-4.mp3",
  j: "snare.mp3",
  k: "crash.mp3",
  l: "kick-bass.mp3"
};

function makeSound(key) {
  if (!sounds[key]) return;
  new Audio(sounds[key]).play();
}

function buttonAnimation(key) {
  const btn = document.querySelector("." + key);
  if (!btn) return;
  btn.classList.add("pressed");
  setTimeout(() => btn.classList.remove("pressed"), 100);
}

// Mouse clicks
document.querySelectorAll(".drum").forEach(btn => {
  btn.addEventListener("click", function () {
    const key = this.innerHTML.trim().toLowerCase();
    makeSound(key);
    buttonAnimation(key);
  });
});

// Keyboard presses
document.addEventListener("keydown", e => {
  const key = e.key.toLowerCase();
  makeSound(key);
  buttonAnimation(key);
});