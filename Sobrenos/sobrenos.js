const cards = document.querySelectorAll('.card');
const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');

let current = 0;

function showCard(index) {
  cards.forEach(card => card.classList.remove('active'));
  cards[index].classList.add('active');
}

rightBtn.addEventListener('click', () => {
  current = (current + 1) % cards.length;
  showCard(current);
});

leftBtn.addEventListener('click', () => {
  current = (current - 1 + cards.length) % cards.length;
  showCard(current);
});


const toggleBtn = document.getElementById("toggleBtn");
const drop = document.querySelector(".dropdown");

toggleBtn.addEventListener("click", () => {
  drop.classList.toggle("open");
});
