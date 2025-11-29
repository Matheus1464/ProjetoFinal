// Dropdown menu
const dropBtn = document.querySelector("#dropBtn");
const dropdown = document.querySelector(".dropdown");

dropBtn.addEventListener("click", () => {
    dropdown.classList.toggle("open");
});

// Newsletter form
const newsletterForm = document.getElementById('newsletterForm');
const successMessage = document.getElementById('successMessage');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Mostrar mensagem de sucesso
    successMessage.classList.add('show');

    // Limpar formulário
    newsletterForm.reset();

    // Esconder mensagem após 5 segundos
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
});