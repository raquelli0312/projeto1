// Função para calcular a média e exibir o resultado
document.getElementById('form-notas').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter as notas do formulário
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    // Validar as notas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        alert('Por favor, insira todas as notas corretamente!');
        return;
    }

    // Calcular a média
    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Determinar se o aluno está aprovado ou reprovado
    const resultadoElement = document.getElementById('resultado');
    const mensagemElement = document.getElementById('mensagem');

    if (media >= 7) {
        resultadoElement.className = 'resultado aprovado';
        mensagemElement.textContent = `Aprovado! Sua média foi: ${media.toFixed(2)}`;
    } else {
        resultadoElement.className = 'resultado reprovado';
        mensagemElement.textContent = `Reprovado! Sua média foi: ${media.toFixed(2)}`;
    }
});
