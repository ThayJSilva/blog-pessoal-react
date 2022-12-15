import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/Store';
import Navbar from './navbar/Navbar';
import CadastroUsuario from './paginas/cadastroUsuario/cadastroUsuario';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagem/listapostagem/ListaPostagem';
import CadastroPost from './components/postagem/cadastroPosts/CadastroPost';
import DeletarPostagem from './components/postagem/deletarPostagem/DeletarPostagem';
import Footer from './estaticos/footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <Provider store={store}>
      <ToastContainer />

      <Router>
        <Navbar />

        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />

            <Route path="/home" element={<Home />} />

            <Route path="/cadastrousuario" element={<CadastroUsuario />} />

            <Route path="/temas" element={<ListaTema />} />

            <Route path="/posts" element={<ListaPostagem />} />

            <Route path="/formularioPostagem" element={<CadastroPost />} />

            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

            <Route path="/formularioTema" element={<CadastroTema />} />

            <Route path="/formularioTema/:id" element={<CadastroTema />} />

            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

            <Route path="/deletarTema/:id" element={<DeletarTema />} />


          </Routes>
        </div>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;