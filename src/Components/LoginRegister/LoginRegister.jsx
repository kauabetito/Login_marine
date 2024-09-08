import React, { useState } from "react";
import './LoginRegister.css';
import { FaAnchor } from "react-icons/fa";
import { FaAnchorLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import LogoMarineRecortada from '../Assets/LogoMarineRecortada.png'

const LoginRegister = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('');
    };

    return (
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form action="">
                    <div className="logo-container">
                        <img src={LogoMarineRecortada} alt="Logo" id="img-logo" />
                    </div>
                    <h1>Login</h1>

                    <div className="input-box">
                        <input type="text"
                            placeholder="Nome" required />
                        <FaAnchor className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password"
                            placeholder="Senha" required />
                        <FaAnchorLock className="icon" />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" /> Lembre-se de mim</label>
                        <a href="#"> Esqueceu sua senha?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p> Precisa de uma conta? <a href="#" onClick={registerLink} >Inscrever-se</a></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form action="">
                    <h1>Registrar</h1>
                    <div className="input-box">
                        <input type="text"
                            placeholder="Nome" required />
                        <FaAnchor className="icon" />
                    </div>

                    <div className="input-box">
                        <input type="email" placeholder="Email" required />
                        <MdEmail className="icon" />
                    </div>

                    <div className="input-box">
                        <input type="password"
                            placeholder="Senha" required />
                        <FaAnchorLock className="icon" />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" /> Eu concordo com os termos & condições</label>
                    </div>

                    <button type="submit">Registrar</button>

                    <div className="register-link">
                        <p> Já tenho uma conta <a href="#" onClick={loginLink} >Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister