console.log('Aula 16 - 04');
const objetoJogador =[ 
    {
    nome: 'Guilherme',
    idade: 25,
    time: 'flamengo',
    camisa: 1,
    atuando: true
    },

    {
    nome: 'João',
    idade: 37,
    time: 'Vasco',
    camisa: 10,
    atuando: false
    },

    {
    nome: 'marcio',
    idade: 29,
    time: 'bahia',
    camisa: 5,
    atuando: true
    },

    {
    nome: 'José',
    idade: 32,
    time: 'grêmio',
    camisa: 8,
    atuando: true
    },

    {
    nome: 'Pedro',
    idade: 23,
    time: 'Vasco',
    camisa: 11,
    atuando: false
    },

    {
    nome: 'Paulo',
    idade: 30,
    time: 'Vasco',
    camisa: 99,
    atuando: true
    },

    {
    nome: 'Gustavo',
    idade: 19,
    time: 'flamengo',
    camisa: 10,
    atuando: true
    }
]

const ListaJogadores = objetoJogador.map(jogador => {
    return jogador.nome
})
console.log (ListaJogadores)    

const ListaIdades = objetoJogador.map(jogador => {
    return jogador.idade
})
console.log (ListaIdades)


const somaCamisas = objetoJogador.reduce((total, jogador) =>{
    return total + jogador.camisa
},0);
console.log(somaCamisas)

