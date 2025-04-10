const listaSeries = [
    ['Inuyasha', 167, 20],
    ['Naruto', 220, 20],
    ['Sword Art', 25, 25],
    ['Game of Thrones', 73, 50],
    ['The Mandalorian', 16, 45],
];

// Solicita o nome da série ao usuário
let nomeSerie = prompt("Digite o nome da série:");

// Procura a série na lista (case insensitive)
let serieEncontrada = listaSeries.find(serie => serie[0].toLowerCase() === nomeSerie.toLowerCase());

if (serieEncontrada) {
    let episodiosAssistidos = parseInt(prompt(`Quantos episódios de "${serieEncontrada[0]}" você já assistiu?`));

    if (!isNaN(episodiosAssistidos) && episodiosAssistidos <= serieEncontrada[1]) {
        let episodiosRestantes = serieEncontrada[1] - episodiosAssistidos;
        let minutosRestantes = episodiosRestantes * serieEncontrada[2];
        let horasRestantes = (minutosRestantes / 60).toFixed(1);

        alert(`Você precisa de ${horasRestantes} horas para terminar de assistir essa série.`);
    } else {
        alert("Número de episódios assistidos inválido!");
    }
} else {
    alert("Série não encontrada na lista!");
}
