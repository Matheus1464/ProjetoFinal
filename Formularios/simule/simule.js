
const dropBtn = document.querySelector("#dropBtn");
const dropdown = document.querySelector(".dropdown");

dropBtn.addEventListener("click", () => {
    dropdown.classList.toggle("open");
});

// Formulário
const simulacaoForm = document.getElementById('simulacaoForm');

simulacaoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Simulação enviada com sucesso! Entraremos em contato em breve.');
    simulacaoForm.reset();
});