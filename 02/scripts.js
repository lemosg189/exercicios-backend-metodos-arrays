const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

let grupo1 = nomes.slice(0, tamanhoDoGrupo).join(', ')
let grupo2 = nomes.slice(tamanhoDoGrupo, nomes.length).join(', ')


console.log(`Grupo 1: ${grupo1}.
Grupo 2: ${grupo2}.`)