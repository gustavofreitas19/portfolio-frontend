import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditarFilme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/filmes/${id}`)
      .then(res => res.json())
      .then(setFilme);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilme(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3001/filmes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filme)
    });
    navigate('/');
  };

  if (!filme) return <p>Carregando...</p>;

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Editar Filme</h2>
      <input
        name="titulo"
        value={filme.titulo}
        onChange={handleChange}
        placeholder="Título"
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        name="ano"
        value={filme.ano}
        onChange={handleChange}
        placeholder="Ano"
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        name="genero"
        value={filme.genero}
        onChange={handleChange}
        placeholder="Gênero"
        className="block w-full mb-4 p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Salvar</button>
    </form>
  );
}

export default EditarFilme;