const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleIcone = document.querySelector(".theme-toggle-icone");
const themeToggleTexto = document.querySelector(".theme-toggle-texto");
const logoTechPulse = document.querySelector("#logo-tech-pulse");
const formLogin = document.querySelector("#form-login");
const linkCadastro = document.querySelector("#link-cadastro");
const linkRecuperarSenha = document.querySelector("#link-recuperar-senha");

// Atualiza o tema da interface e a logo correta
function atualizarTema(theme) {
    const modoClaro = theme === "light";

    document.body.classList.toggle("light-mode", modoClaro);
    document.body.setAttribute("data-theme", theme);

    if (themeToggle) {
        themeToggle.setAttribute("aria-pressed", String(modoClaro));
        themeToggle.setAttribute("aria-label", modoClaro ? "Alternar para modo escuro" : "Alternar para modo claro");
    }

    if (themeToggleIcone) {
        themeToggleIcone.textContent = modoClaro ? "☾" : "☀";
    }

    if (themeToggleTexto) {
        themeToggleTexto.textContent = modoClaro ? "Dark" : "Light";
    }

    if (logoTechPulse) {
        logoTechPulse.src = modoClaro ? logoTechPulse.dataset.logoLight : logoTechPulse.dataset.logoDark;
    }
}

// Mantem o tema escolhido mesmo ao recarregar a pagina
const temaSalvo = localStorage.getItem("techpulse-theme");
atualizarTema(temaSalvo === "light" ? "light" : "dark");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const novoTema = document.body.classList.contains("light-mode") ? "dark" : "light";
        atualizarTema(novoTema);
        localStorage.setItem("techpulse-theme", novoTema);
    });
}

// Controla a abertura e o fechamento do menu dropdown
if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const menuAberto = navMenu.classList.toggle("ativo");
        menuToggle.setAttribute("aria-expanded", String(menuAberto));
    });

    document.addEventListener("click", (event) => {
        const cliqueNoMenu = navMenu.contains(event.target);
        const cliqueNoBotao = menuToggle.contains(event.target);

        if (!cliqueNoMenu && !cliqueNoBotao) {
            navMenu.classList.remove("ativo");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}

// Simula o envio do formulario sem backend real
if (formLogin) {
    formLogin.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.querySelector("#email").value.trim();
        const senha = document.querySelector("#senha").value.trim();

        if (!email || !senha) {
            alert("Preencha o e-mail e a senha para continuar.");
            return;
        }

        alert("Login demonstrativo realizado com sucesso.");
    });
}

// Exibe acoes auxiliares apenas como demonstracao visual
if (linkCadastro) {
    linkCadastro.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Area de cadastro em construcao.");
    });
}

if (linkRecuperarSenha) {
    linkRecuperarSenha.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Recuperacao de senha em construcao.");
    });
}
