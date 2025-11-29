const dropBtn = document.querySelector("#dropBtn");
        const dropdown = document.querySelector(".dropdown");

        dropBtn.addEventListener("click", () => {
            dropdown.classList.toggle("open");
        });