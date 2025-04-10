//alterar o texto do h1
const titulo = document.querySelector('h1');
titulo.textContent = 'Lista de Afazeres';
//criar um elemento
const item = document.createElement('li');
item.textContent = 'Estudar javascript'; 
item.classList.add('nao-iniciado'); 

const lista = document.querySelector('#lista');
lista.appendChild(item);
//remover o primeiro elemento
lista.removeChild(lista.children[0]);

//adicionar um 
document.querySelector('#bnt-adicionar').addEventListener('click', () => {
    const novoItem = document.createElement('li');
    novoItem.textContent = querySelector('#novo_item').value;
    
    novoItem.textContent = input
    lista.appendChild(novoItem);
    
}); 