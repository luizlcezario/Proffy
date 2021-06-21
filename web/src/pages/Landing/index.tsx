import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import BG from '../../assets/images/BG.svg';
import './styles.css';
import api from '../../services/api';
function Landing (){
    return( 
    <div id="landing">
        <div id="page-landing">
            
            <div id="page-landing-content" className="container">

                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                </div>
            
        </div>
        <div id="page-login">    
            <div >
                <div className="main-login">
                    <h1>Fazer login</h1>
                    <form className="form-group">
                        <input type="text" placeholder="E-mail" className="login email"/>
                        <input type="password" placeholder="Senha" className="login senha"/>
                        <div className="lembre">
                            <label>
                                <input type="checkbox" className="chekbox"  />
                                Lembrar-me
                            </label>
                            <Link to="/" className="renew-passoword">Esqueci minha senha</Link>
                        </div>
                        <button className="Entrar">Entrar</button>
                    </form>                    
                </div>
                <div className="footer-login">
                    <div className="cadastrar">
                        <h3>Não tem conta?</h3>
                        <Link to="/">Cadastrar-se</Link>
                    </div>
                    <div>
                    <p>É de graça <img src={purpleHeartIcon} /></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Landing;