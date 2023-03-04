import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import FKLogo from './LogoWhiteResizedMore.png';
import FKLogoSmall from './LogoWhiteSmall.png';

const Nav = styled.nav`
  position: fixed;
  background: #5a5a57;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  z-index: 40;
  color: #F5F6F7;

  .logo {
    padding: 10px 0;

    a {
        color: #F5F6F7;
        text-decoration: none;
    }
  }

  .image1 {
    position: absolute;
    margin-top: 17px;
  }

  .image2{
    display: none;
    position: absolute;
    margin-top: 17px;
 }
 
 @media (max-width: 768px){
    .image1{
      display: none;
    }
 
    .image2{
      display: block;
      position: absolute;
      margin-top: 35px;
      left: 20px;
      top: -8px
    }
 }

`
const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        {/* <Link to='/'>THE FRESH KID</Link> */}
        <Link to='/'><img class="image1" src={FKLogo} alt="Logo"></img></Link>
        {/* <img class="top-right" src={FKLogo} alt="Logo"></img> */}
        {/* <Link to="/" target="_blank" rel="noreferrer">
          <img src="/TheFreshKidLogoEvenSmaller.png" alt="Logo"></img>
        </Link> */}
      </div>
      <div className="logo2">
        <Link to='/'><img class="image2" src={FKLogo} alt="Logo"></img></Link>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar