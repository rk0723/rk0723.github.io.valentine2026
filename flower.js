onload = () => {
  document.body.classList.remove("container");
};

window.addEventListener("load", () => {
  const music = document.getElementById("flowerMusic");

  if (!music) return;

  document.body.addEventListener("click", () => {
    music.volume = 1;
    music.play().catch(() => {});
  }, { once: true });
});
