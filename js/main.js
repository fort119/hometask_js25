let offset = 0;
const line = document.querySelector('.line');
const nextBtn = document.querySelector('.slider-next')
const prevBtn = document.querySelector('.slider-prev')

function checkOffSet() {
  if (offset < 256) {
    prevBtn.classList.add("-hidden");
  }
  if (offset > 0) {
    prevBtn.classList.remove("-hidden");
    if (offset > 512) {
      nextBtn.classList.add("-hidden");
    }
  }
  if (offset < 768) {
    nextBtn.classList.remove("-hidden");
  }
}

checkOffSet();

document.querySelector('.slider-next').addEventListener('click', function () {
  offset = offset + 256;
  checkOffSet();
  line.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
  offset = offset - 256;
  checkOffSet();
  line.style.left = -offset + 'px';
});
