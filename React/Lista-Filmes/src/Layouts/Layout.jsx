import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="p-4">
      <header className="mb-4 border-b pb-2">
        <h1 className="text-3xl font-bold text-gray-800">🎬 Lista de Filmes</h1>
        <nav className="mt-2 flex gap-4">
          <Link to="/" className="text-blue-600 hover:underline">Início</Link>
          <Link to="/adicionar" className="text-blue-600 hover:underline">Adicionar Filme</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
