function verificarVelocidade() {
    var velocidade = parseFloat(document.getElementById('velocidade').value);
    
    if (isNaN(velocidade) || velocidade < 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira uma velocidade válida.';
        return;
    }

    var situacao;
    if (velocidade <= 80) {
        situacao = 'Dentro do limite de velocidade.';
    } else if (velocidade <= 100) {
        situacao = 'Acima do limite com multa leve.';
    } else {
        situacao = 'Acima do limite com multa grave.';
    }

    document.getElementById('resultado').innerText = `Velocidade: ${velocidade.toFixed(2)} km/h - ${situacao}`;
}