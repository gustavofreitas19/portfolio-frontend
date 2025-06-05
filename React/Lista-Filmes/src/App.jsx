import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './Pages/Home';
import MovieForm from './components/MovieForm';
import EditarFilme from './Pages/EditarFIlme';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="adicionar" element={<MovieForm />} />
        <Route path="editar/:id" element={<EditarFilme />} />
      </Route>
    </Routes>
  );
}

export default App;