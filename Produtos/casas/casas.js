// DROPDOWN DO MENU

const dropBtn = document.querySelector("#dropBtn");  // Botão que abre/fecha o dropdown
const dropdown = document.querySelector(".dropdown"); // Container do dropdown

// Ao clicar no botão, alterna para classe 'open'
dropBtn.addEventListener("click", () => {
    dropdown.classList.toggle("open");
});