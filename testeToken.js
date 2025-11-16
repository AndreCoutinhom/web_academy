
    function generateToken() {
        return "token-" + Math.random().toString(36).substring(2) + Date.now().toString(36);
    }

    const btnCadastrar = document.querySelector(".b1");
    const modal = document.querySelector(".modal");
    const modalButton = document.querySelector(".modal-content button");

    btnCadastrar.addEventListener("click", () => {
        const nome = document.querySelector(".in1 input").value.trim();
        const telefone = document.querySelector(".in2 input").value.trim();
        const email = document.querySelector(".in3 input").value.trim();
        const senha = document.querySelectorAll(".in4 input")[0].value;
        const confirmar = document.querySelectorAll(".in4 input")[1].value;

        const errorBox = document.querySelector(".error-message");

        if (!nome || !telefone || !email || !senha || !confirmar) {
            errorBox.style.display = "flex";
            errorBox.querySelector("span").innerText = "Preencha todos os campos!";
            return;
        }

        if (senha !== confirmar) {
            errorBox.style.display = "flex";
            errorBox.querySelector("span").innerText = "As senhas não coincidem!";
            return;
        }

        errorBox.style.display = "none";

        const token = generateToken();
        localStorage.setItem("token", token);

        const user = { nome, telefone, email };
        localStorage.setItem("user", JSON.stringify(user));

        modal.style.display = "flex";
    });

    modalButton.addEventListener("click", () => {
        modal.style.display = "none";
        window.location.href = "/";
    });

