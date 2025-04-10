let idades = [];

for (let i = 0; i < 5; i++) {
  let entrada = prompt(`Digite a idade do usuário ${i + 1} (ex: 25 anos):`);
  
  let idade = parseInt(entrada);

  if (!isNaN(idade)) {
    idades.push(idade);
  } else {
    alert("Entrada inválida! Por favor, digite no formato '25 anos'.");
    i--; 
  }
}
let idadeMax = Math.max(...idades);
let idadeMin = Math.min(...idades);
let idadeMedia = idades.reduce((acc, curr) => acc + curr, 0) / idades.length;

alert(`Idade máxima: ${idadeMax} anos\nIdade mínima: ${idadeMin} anos\nIdade média: ${idadeMedia.toFixed(1)} anos`);
