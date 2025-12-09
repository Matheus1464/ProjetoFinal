/*  CARROSSEL  */
const track = document.querySelector('.carousel-track');//  Seleciona o container das imagens 
const slides = document.querySelectorAll('.carousel-track img'); //  Seleciona as imagens do carrossel
let index = 0;  // Índice do slide atual 

// Função para avançar para o próximo slide 
function nextSlide() {
    index = (index + 1) % slides.length; /* % impede que o índice ultrapasse o número de slides */
    track.style.transform = `translateX(-${index * 100}%)`; /* Move o carrossel para a esquerda em passos de 100% */
}

// Troca o slide a cada 4 segundos
setInterval(nextSlide, 4000);

// DROPDOWN DO MENU

const dropBtn = document.querySelector("#dropBtn");  // Botão que abre/fecha o dropdown
const dropdown = document.querySelector(".dropdown"); // Container do dropdown

// Ao clicar no botão, alterna para classe 'open'
dropBtn.addEventListener("click", () => {
    dropdown.classList.toggle("open");
});