import MovieList from '../components/MovieList';
import { useEffect, useState } from 'react';

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/filmes')
      .then(res => res.json())
      .then(setFilmes);
  }, []);

  const atualizarStatus = async (id, novoStatus) => {
    const filme = filmes.find(f => f.id === id);
    const atualizado = { ...filme, status: novoStatus };
    await fetch(`http://localhost:3001/filmes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(atualizado)
    });
    setFilmes(filmes.map(f => f.id === id ? atualizado : f));
  };

  const removerFilme = async (id) => {
    const confirm = window.confirm("Deseja realmente remover este filme?");
    if (!confirm) return;
    await fetch(`http://localhost:3001/filmes/${id}`, { method: 'DELETE' });
    setFilmes(filmes.filter(f => f.id !== id));
  };

  return (
    <>
      <MovieList titulo="Assistidos" filmes={filmes.filter(f => f.status === 'assistido')} onStatusChange={atualizarStatus} onDelete={removerFilme} />
      <MovieList titulo="Favoritos" filmes={filmes.filter(f => f.status === 'favorito')} onStatusChange={atualizarStatus} onDelete={removerFilme} />
      <MovieList titulo="Pendentes" filmes={filmes.filter(f => f.status === 'pendente')} onStatusChange={atualizarStatus} onDelete={removerFilme} />
    </>
  );
}

export default Home;