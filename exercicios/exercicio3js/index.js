const candidatos = ["Daenerys", "Jon Snow", "Cersei", "Stannis"];
const votos = [5, 8, 8, 4];

let maxVotos = 0;
let vencedores = []; // Tornar vencedores um array

for (let i = 0; i < votos.length; i++) {  // Corrigir o índice
    if (votos[i] > maxVotos) {
        maxVotos = votos[i];
        vencedores = [candidatos[i]];  // Reiniciar a lista de vencedores
    } else if (votos[i] === maxVotos) {
        vencedores.push(candidatos[i]);  // Adicionar ao array
    }
}

if (vencedores.length === 1) {  // Usar comparação correta
    console.log(`O dono do Trono de Ferro é ${vencedores[0]}!`);  // Usar crase para interpolação
} else {
    console.log("Há um empate entre: " + vencedores.join(", "));
}
