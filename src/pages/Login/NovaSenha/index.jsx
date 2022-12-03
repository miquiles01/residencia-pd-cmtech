import { useState } from "react";
import { LayoutComponentes } from "../../../componentes/LayoutComponentes"


export const NovaSenha = () => {
    const [email, setEmail] = useState("");

    return (
        <LayoutComponentes>
        <form className="login-form">
            <span className="login-form-title"> Cadastre uma nova senha </span>

            <span className="login-form-title">
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn">Enviar senha</button>
            </div>

          </form>
          </LayoutComponentes>
    )
}