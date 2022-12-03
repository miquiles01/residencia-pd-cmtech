import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Login } from '../Login'
import { NovaSenha } from '../NovaSenha'
import { Register } from '../Register'


    export const AppRouter = () => {
    return (
    
        <Router>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/novasenha" exact element={<NovaSenha />} >

                </Route>
            </Routes>
        </Router>
    )
    }