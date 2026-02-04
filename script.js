let yesScale = 1;
document.getElementById("noBtn").onclick = () => {
 yesScale += 0.25;
 document.getElementById("yesBtn").style.transform = `scale(${yesScale})`;
};

const musicSlide2 = document.getElementById("musicSlide2");

function goToSlide(slideNumber) {
  document.querySelectorAll(".slide").forEach(slide =>
    slide.classList.remove("active")
  );

  const targetSlide = document.getElementById("slide" + slideNumber);
  if (!targetSlide) return;

  targetSlide.classList.add("active");

  // ❄️ matikan foto jatuh saat pindah
  if (slideNumber !== 1) {
    const falling = document.querySelector(".falling-photos");
    if (falling) falling.style.display = "none";
  }

  if (slideNumber === 2) {
    startTyping();
    if (musicSlide2) musicSlide2.play().catch(()=>{});
  }
}

function startTyping(){
  const el = document.getElementById("typingText");
  if (!el) return; // ⛑️ anti error

  const text = "Happy Valentine day sayanggku!💖\nTap a photo and read my feelings 💌";

  el.innerHTML = "";
  let i = 0;

  const interval = setInterval(() => {
    el.innerHTML += text[i++];
    if (i >= text.length) clearInterval(interval);
  }, 80);
}

function selectPhoto(img,text){
  document.querySelectorAll('.photos img').forEach(i=>i.classList.remove('active'));
  img.classList.add('active');

  const el=document.getElementById("photoMessage");
  el.innerHTML="";
  let i=0;
  const interval=setInterval(()=>{
    el.innerHTML+=text[i++];
    if(i>=text.length) clearInterval(interval);
  },60);
}

const nextPageButton = document.getElementById("nextPageButton");

nextPageButton.addEventListener("click", () => {
  const musicSurprise = document.getElementById("musicSurprise");
  musicSurprise.volume = 1;
  musicSurprise.play(); // ✅ DI SINI DIIZINKAN

  setTimeout(() => {
    window.location.href = "flower.html";
  }, 500);
});
