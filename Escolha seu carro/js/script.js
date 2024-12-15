function trocarImagem() {
    // Captura o valor do campo de texto
    const carro = document.getElementById('flor').value.trim().toLowerCase();
    
    // Captura a referência do contêiner de imagem e da mensagem
    const imagemContainer = document.getElementById('imagem-container');
    const mensagem = document.getElementById('mensagem');

    // Verifica se o nome foi preenchido
    if (flor === "") {
        alert("Por favor, digite o nome da flor.");
        return;
    }

    // Lógica para trocar a imagem com base no nome da flor
    if (flor === "rosa") {
        imagemContainer.innerHTML = `<img id="imagem" width="300" src="img/rosa.jpeg" alt="Imagem da Rosa">`;
        mensagem.innerHTML = "Sua flor favorita é a Rosa!";
    } else if (flor === "tulipa") {
        imagemContainer.innerHTML = `<img id="imagem" width="300" src="img/tulipa.jpeg" alt="Imagem da Tulipa">`;
        mensagem.innerHTML = "Sua flor fvaorita é a Tulipa!";
    } else if (flor === "girassol") {
        imagemContainer.innerHTML = `<img id="imagem" width="300" src="img/girassol.jpeg" alt="Imagem do Girassol">`;
        mensagem.innerHTML = "Sua flor fvaorita é o Girassol!";
    } else if (flor === "margarita") {
        imagemContainer.innerHTML = `<img id="imagem" width="300" src="img/margarita.jpeg" alt="Imagem da Margarita">`;
        mensagem.innerHTML = "Sua flor fvaorita é a Margarita!";
    } else if (flor === "lavanda") {
        imagemContainer.innerHTML = `<img id="imagem" width="300" src="img/lavanda.jpeg" alt="Imagem da Lavanda">`;
        mensagem.innerHTML = "Sua flor fvaorita é a Lavanda!";
    } else {
        imagemContainer.innerHTML = `<img id="imagem" src="img/Error.gif" alt="Imagem de erro" width="300">`;
        mensagem.innerHTML = "Nome da flor não identificada! Tente novamente.";
    }
}
