const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

let frutasInverso = frutas.reverse().join(', ')

console.log(frutasInverso)

let fatia = frutas.slice(1, frutas.length - 1)
fatia.push('Melão')

console.log(fatia)