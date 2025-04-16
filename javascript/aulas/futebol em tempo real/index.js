const timeASelect = document.getElementById('timeA');
const timeBSelect = document.getElementById('timeB');
const form = document.getElementById('formularioPartida');
const resultadosDiv = document.getElementById('resultados');

const times = [
    { nome: 'Flamengo', logo: 'https://i.imgur.com/G1yKP5r.png' },
    { nome: 'Palmeiras', logo: 'https://i.imgur.com/L4PEyUq.png' },
    { nome: 'Corinthians', logo: 'https://i.imgur.com/DXzT8wc.png' },
    { nome: 'São Paulo', logo: 'https://i.imgur.com/dPMUDo3.png' },
    { nome: 'Grêmio', logo: 'https://i.imgur.com/1ZbN1Tw.png' },
    { nome: 'Internacional', logo: 'https://i.imgur.com/VTVUuHq.png' },
    { nome: 'Cruzeiro', logo: 'https://i.imgur.com/gK7B4OQ.png' },
    { nome: 'Atlético-MG', logo: 'https://i.imgur.com/ptbLZ63.png' },
    { nome: 'Vasco', logo: 'https://i.imgur.com/h9B5Xmy.png' },
    { nome: 'Botafogo', logo: 'https://i.imgur.com/O9S0CkF.png' }
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
