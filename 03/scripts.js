const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

posicaoMaxima = posicao + 3
carrosSelecionados = nomes.slice(posicao, posicaoMaxima).join(', ')

console.log(carrosSelecionados)