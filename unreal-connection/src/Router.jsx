import { Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/login';
import Chat from './pages/chat/index';
import Error from './pages/error';

export default function Router() {
    // Veja sobre o errorElement (ele vai mostrar a tela de erro se não temos a rota)
    return(
        <Routes>
            <Route path='/' errorElement={<Error />} element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/chat' element={<Chat />} />
        </Routes>
    )
}