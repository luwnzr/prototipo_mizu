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
