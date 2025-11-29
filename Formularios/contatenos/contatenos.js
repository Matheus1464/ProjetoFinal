// Dropdown menu
        const dropBtn = document.querySelector("#dropBtn");
        const dropdown = document.querySelector(".dropdown");

        dropBtn.addEventListener("click", () => {
            dropdown.classList.toggle("open");
        });

        // Mostrar/ocultar campo de data da reunião
        const reuniaoCheckbox = document.getElementById('reuniao');
        const dataReuniaoGroup = document.getElementById('dataReuniaoGroup');
        const dataReuniaoInput = document.getElementById('dataReuniao');

        reuniaoCheckbox.addEventListener('change', () => {
            if (reuniaoCheckbox.checked) {
                dataReuniaoGroup.style.display = 'block';
                dataReuniaoInput.required = true;
            } else {
                dataReuniaoGroup.style.display = 'none';
                dataReuniaoInput.required = false;
                dataReuniaoInput.value = '';
            }
        });

        // Formulário de contato
        const contactForm = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Mostrar mensagem de sucesso
            successMessage.classList.add('show');

            // Limpar formulário
            contactForm.reset();
            dataReuniaoGroup.style.display = 'none';

            // Rolar para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Esconder mensagem após 5 segundos
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
        });