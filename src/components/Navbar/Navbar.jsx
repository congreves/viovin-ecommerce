import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Container = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  background-color: transparent;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  backdrop-filter: blur(50px);

`;
const Wrapper = styled.div`
  height: 8em;
  padding: 1em 1em;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #9b753a;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
const linkStyle = {
  textDecoration: "none",
  margin: 0,
  letterSpacing: 0.5,
};

const Logo = styled.img`
  max-height: 10em;
`;


const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 8em;
  background-color: white;
  backdrop-filter: blur(50px);
  padding: 1.5em;
  gap:1.5em;
  opacity:${props => props.navbarOpen ? '100%' : '0%' };
  transition: all 0.2s;
  z-index: 100;
`;

const MenuItem = styled.p`
  font-size: 18px;
  cursor: pointer;
  color: #9b753a;
  letter-spacing: 0.05;
  padding-left: 1em;
  padding-right: 1em;
`;
const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0.1px solid #9b753a;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  color: #9b753a;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
`;

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  function handleToggle(){
setNavbarOpen(!navbarOpen)

  }

  return (
    <Container>
      <Wrapper>
        <Center>
          <Link to="/" style={linkStyle}>
            <Logo src="https://i.ibb.co/kDLkfBx/Dore-Baguette-Couronne-Ico-ne-de-Cercle-Clerge-Logo-2-removebg-preview.png"></Logo>
          </Link>
        </Center>
       <GiHamburgerMenu size={44}  onClick={handleToggle}/>
        <Menu navbarOpen={navbarOpen}>
          <Link to="/viner" style={linkStyle}>
            <MenuItem>VÅRA VINER</MenuItem>
          </Link>
          <Link to="/viovin" style={linkStyle}>
            <MenuItem>OM OSS</MenuItem>
          </Link>
          <MenuItem>
            <Button>KONTAKTA</Button>
          </MenuItem>
        </Menu>
     
      </Wrapper>
    </Container>
  );
}

export default Navbar;
