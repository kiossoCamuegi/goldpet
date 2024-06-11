import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { useEffect } from 'react';


function Footer() {


   useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <footer>
            <div className="links">
                <div className="box bxb">
                    <Link to="/"><Logo type={1} /></Link>
                    <ul>
                    <li className="cplocation">Portugal - Lisboa - Amadora, Caldelas, Caldas da Rainha, M.ª Grande e Pombal </li>
                    <li className="cpphone">+20 000 000</li>
                    <li><a to="mailto:#comercial@comercial.pt" className="cpemail">comercial@goldpet.pt</a></li> 
                    <li><a to="mailto:#geral@goldpet.pt" className="cpemail">geral@goldpet.pt</a></li>
                        <div className="flex social-links">
                            <li><Link to="#"><FaFacebook/></Link></li>
                            <li><Link to="#"><FaLinkedin/></Link></li>
                            <li><Link to="#"><RiTwitterXFill/></Link></li>
                            <li><Link to="#"><RiInstagramFill/></Link></li>
                            <li><Link to="#"><FaYoutube/></Link></li> 
                        </div>
                    </ul>
                </div>
                <div className="box">
                    <h5>Empresa</h5>
                    <ul>
                        <li><Link to="about.html">Sobre nós</Link></li>
                        <li><Link to="#">Menbros da empresa</Link></li>
                        <li><Link to="#">Carreiras</Link></li>
                        <li><Link to="#">Contatos</Link></li>
                        <li><Link to="#">Produtos</Link></li>
                        <li><Link to="#">Dashboard</Link></li>
                    </ul>
                </div>
                <div className="box">
                    <h5>Minha conta</h5>
                    <ul>
                        <li><Link to="cart.html">Carrinho</Link></li>
                        <li><Link to="#">Controlar pedidos</Link></li>
                        <li><Link to="login.html">Entrar</Link></li>
                        <li><Link to="#">Lista de desejos</Link></li>
                        <li><Link to="#">Ajuda</Link></li>
                    </ul>
                </div>
                <div className="box">
                    <h5>Serviços de clientes</h5>
                    <ul>
                        <li><Link to="#">Metodos de pagamento</Link></li>
                        <li><Link to="#">Garantia de devolução !</Link></li>
                        <li><Link to="#">Retorno de produtos</Link></li>
                        <li><Link to="#">Centro de suporte </Link></li> 
                        <li><Link to="#">Termos e Condições</Link></li>
                    </ul>
                </div>
            </div> 
            <div className="copyright">
                <div><p>Copyright © 2024 Goldpet loja online. All Rights Reserved. </p></div>
            </div>
      </footer>
    </div>
  )
}

export default Footer