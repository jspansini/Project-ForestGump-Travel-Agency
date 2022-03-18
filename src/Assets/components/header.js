import * as React from 'react';
import logo from '../img/logo.png'
import { Navbar} from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './header.css'

export default function Header() {
  return (

 <div>
     <header>
        <nav className="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
              <Link className="navbar-brand" to="/">
                  <img src={logo} alt="Logo Forest" width={"250px"} id="Forest Logo" class="imgLogo"/>
                </Link>

                  
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i class="bi bi-list"></i></span>
                
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav text-white h4">
                    <li class="nav-item">
                        <Link className="nav-link" to="/">HOME</Link>
                      </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/destino">DESTINOS</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/promocao">PROMOÇÕES</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/contato">CONTATO</Link>
                  </li>   
                </ul>
              </div>
            </div>
          </nav>
        </header>
            </div>
    
        );
    }
