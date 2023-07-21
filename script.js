const btnNo = document.getElementById("btnNo");

function getRandomPosition() {
  const maxWidth = window.innerWidth - btnNo.clientWidth;
  const maxHeight = window.innerHeight - btnNo.clientHeight;
  const randomX = Math.random() * maxWidth;
  const randomY = Math.random() * maxHeight;

  return { x: randomX, y: randomY };
}

document.addEventListener("mousemove", (event) => {
  const position = getRandomPosition();

  
  const x = Math.min(position.x, 1920 - btnNo.clientWidth);
  const y = Math.min(position.y, 1080 - btnNo.clientHeight);

  btnNo.style.left = x + "px";
  btnNo.style.top = y + "px";
});
