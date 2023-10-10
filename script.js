function calcularDestino() {
    const origemInput = document.getElementById("origem").value.toLowerCase(); 
    const destinoInput = document.getElementById("destino").value.toLowerCase(); 

    
    if (origemInput === "caixa d'água" && destinoInput === "paralela") {
      
        const mensagem = `A rota mais eficiente ${origemInput} à ${destinoInput} é via Av. Luís Viana Filho. O percurso de carro ou motocicleta levará apenas 16 minutos, cobrindo uma distância de 13,1 km.`;
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
