const timeASelect = document.getElementById('timeA');
const timeBSelect = document.getElementById('timeB');
const form = document.getElementById('formularioPartida');
const resultadosDiv = document.getElementById('resultados');

const times = [
  { nome: 'Flamengo', logo: './imagens/Flamengo.png' },
  { nome: 'Atlético-MG', logo: './imagens/AtleticoMG.png' },
  { nome: 'Bahia', logo: './imagens/Bahia.png' },
  { nome: 'Botafogo', logo: './imagens/Botafogo.png' },
  { nome: 'Red Bull Bragantino', logo: './imagens/Bragantino.png' },
  { nome: 'Ceará', logo: './imagens/Ceara.png' },
  { nome: 'Corinthians', logo: './imagens/Corinthians.png' },
  { nome: 'Cruzeiro', logo: './imagens/Cruzeiro.png' },
  { nome: 'Fluminense', logo: './imagens/Fluminense.png' },
  { nome: 'Fortaleza', logo: './imagens/Fortaleza.png' },
  { nome: 'Grêmio', logo: './imagens/Grêmio.png' },
  { nome: 'Internacional', logo: './imagens/Internacional.png' },
  { nome: 'Juventude', logo: './imagens/Juventude.png' },
  { nome: 'Mirassol', logo: './imagens/Mirassol.png' },
  { nome: 'Palmeiras', logo: './imagens/Palmeiras.png' },
  { nome: 'Santos', logo: './imagens/Santos.png' },
  { nome: 'São Paulo', logo: './imagens/SãoPaulo.png' },
  { nome: 'Sport', logo: './imagens/SportRecife.png' },
  { nome: 'Vasco', logo: './imagens/Vasco.png' },
  { nome: 'Vitória', logo: './imagens/Vitória.png' }
];

function carregarTimes() {
  times.forEach(time => {
    const optionA = document.createElement('option');
    optionA.value = time.nome;
    optionA.textContent = time.nome;

    const optionB = optionA.cloneNode(true);

    timeASelect.appendChild(optionA);
    timeBSelect.appendChild(optionB);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const timeA = timeASelect.value;
  const timeB = timeBSelect.value;

  if (timeA === timeB) {
    alert("Os times devem ser diferentes!");
    return;
  }

  const status = document.createElement('p');
  status.textContent = `Simulando partida entre ${timeA} e ${timeB}...`;
  resultadosDiv.appendChild(status);

  await new Promise(resolve => setTimeout(resolve, 5000));

  const placarA = Math.floor(Math.random() * 5);
  const placarB = Math.floor(Math.random() * 5);

  const vencedor =
    placarA > placarB ? timeA :
    placarB > placarA ? timeB :
    "Empate";

  const timeAData = times.find(t => t.nome === timeA);
  const timeBData = times.find(t => t.nome === timeB);

  const resultadoPartida = document.createElement('div');
  resultadoPartida.className = 'partida';
  resultadoPartida.innerHTML = `
    <div class="placar">
      <div class="time">
        <img src="${timeAData.logo}" alt="${timeA}" class="logo">
        <span>${timeA}</span>
      </div>
      <div class="gols">
        <strong>${placarA} x ${placarB}</strong>
      </div>
      <div class="time">
        <img src="${timeBData.logo}" alt="${timeB}" class="logo">
        <span>${timeB}</span>
      </div>
    </div>
    <p class="vencedor">
      ${vencedor === "Empate" ? "A partida terminou empatada!" : `Vencedor: ${vencedor}`}
    </p>
  `;

  status.remove();
  resultadosDiv.appendChild(resultadoPartida);
});

carregarTimes();
