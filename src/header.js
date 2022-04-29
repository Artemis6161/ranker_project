import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import logo from "./img/full hd_transparent_logo_white.png"
import "./img/full hd_jpg_logo.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./header.css"
const Header = () => {
  return (
    
          <div class="p-3 bg-dark text-white">
      
      <div class="container-fluid">
         
             
              
                  <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} width="200px" height="40px" />{' '}
         
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
           
          <Nav class="navbar-nav ms-auto mb-lg-0" >
    
            <Nav.Link href="https://rankerdao.com/mint-badge">MINT BADGE</Nav.Link>
            <Nav.Link href="https://t.me/rankerdao">TELEGRAM</Nav.Link>
            <Nav.Link href="http://discord.gg/rankerdao">DISCORD</Nav.Link>
            <Nav.Link href="/about">$RANKER</Nav.Link>
            <Nav.Link  href="https://rankerdao.com/axies/index.html">INVENTORY</Nav.Link>
            <Nav.Link  href="">LITEPAPER</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>

      </Navbar>
      
                  </div>
               
                
           
    </div>
    
  )
}

export default Header

