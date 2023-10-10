function calcularDestino() {
    const origemInput = document.getElementById("origem").value.toLowerCase(); // Converta para minúsculas
    const destinoInput = document.getElementById("destino").value.toLowerCase(); // Converta para minúsculas

    // Verifique se a origem é "caixa d'água" e o destino é "paralela"
    if (origemInput === "caixa d'água" && destinoInput === "paralela") {
        // Se sim, defina a mensagem personalizada e exiba a imagem
        const mensagem = `A melhor rota de ${origemInput} a ${destinoInput} é via Av. Luís Viana. Demorará apenas 16 minutos de carro e motocicleta, e a distância é de 13,1 km.`;
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `<p>${mensagem}</p><img src="imagens/img.png" alt="Imagem do destino">`;
    } else {
        // Caso contrário, gere uma distância aleatória
        const distanciaAleatoriaKm = Math.random() * 500; // Gere uma distância aleatória de até 500 km
        const mensagem = `A distância entre ${origemInput} e ${destinoInput} é de ${distanciaAleatoriaKm.toFixed(2)} km.`;
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `<p>${mensagem}</p>`;
    }
}
