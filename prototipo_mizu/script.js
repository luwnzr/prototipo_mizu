document.getElementById("contato-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome && email && mensagem) {
        alert("Mensagem enviada com sucesso! Agradecemos pelo seu contato.");
        // Aqui você pode fazer uma requisição AJAX para enviar os dados para o servidor
        document.getElementById("contato-form").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Script para efeito de rolagem suave nas âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Script para alternar a visibilidade do menu hambúrguer
const navbarHamburger = document.getElementById('navbar-hamburger');
const navbar = document.querySelector('.navbar');

navbarHamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
