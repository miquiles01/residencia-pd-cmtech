import { useState } from "react";
import { LayoutComponentes } from "../../../componentes/LayoutComponentes"
import {Link} from "react-router-dom"



export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    return(
        <LayoutComponentes>
             <form className="login-form">
            <span className="login-form-title"> Criar Conta </span>

            <span className="login-form-title">
            </span>

            <div className="wrap-input">
              <input
                className={name !== "" ? "has-val input" : "input"}
                type="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Já possui conta? </span>
              <Link className="txt2" to="/login">
                Fazer login
              </Link>
            </div>
           
          </form>
        </LayoutComponentes>
    )
}