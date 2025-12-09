// Seleciona todos os cards do slider
const cards = document.querySelectorAll('.card');

// Seleciona os botões de navegação (setas)
const leftBtn = document.querySelector('.arrow.left'); 
const rightBtn = document.querySelector('.arrow.right');

let current = 0;

// Função que ativa apenas o card indicado pelo index
function showCard(index) {
  cards.forEach(card => card.classList.remove('active'));  // Remove o "active" de todos os cards
  cards[index].classList.add('active'); // Adiciona "active" apenas ao card atual
}

rightBtn.addEventListener('click', () => { // Quando clica na seta direita → vai para o próximo card
  current = (current + 1) % cards.length; // Incrementa o índice e volta para 0 quando chegar ao final
  showCard(current); // Atualiza o card visível
});

leftBtn.addEventListener('click', () => { // Quando clica na seta esquerda → volta um card
  current = (current - 1 + cards.length) % cards.length; // Decrementa e garante que nunca fique negativo
  showCard(current); // Atualiza o card visível
});

// DROPDOWN DO MENU

const dropBtn = document.querySelector("#dropBtn");  // Botão que abre/fecha o dropdown
const dropdown = document.querySelector(".dropdown"); // Container do dropdown

// Ao clicar no botão, alterna para classe 'open'
dropBtn.addEventListener("click", () => {
    dropdown.classList.toggle("open");
});

