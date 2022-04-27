import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { mobile } from "../../responsive";

const Container = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  background-color: transparent;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  backdrop-filter: blur(50px);
  ${mobile({ padding: " 0% 2%"})}

`;
const Wrapper = styled.div`
  height: 8em;
  padding: 1em 1em;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #9b753a;
  align-items: center;
  ${mobile({ padding: "0.5em 0.5em 0.5em 0em"})}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  ${mobile({ justifyContent: "start", paddingTop: "0.5em"})}
`;
const linkStyle = {
  textDecoration: "none",
  margin: 0,
  letterSpacing: 0.5,
};

const Logo = styled.img`
  max-height: 10em;
  ${mobile({ maxHeight: "8em"})}
`;


const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 8em;
  background-color: white;
  backdrop-filter: blur(50px);
  padding: 3.5em 1.5em;
  gap:3.5em;
  transform: ${({ navbarOpen }) => navbarOpen ? 'translateX(100%)' : 'translateX(250%)'};
  transition: all 0.4s;
  z-index: 100;
  width: 50%;
  height: 100vh;
  ${mobile({ width: "100%", })}
`;

const MenuItem = styled.p`
  font-size: 2.5rem;
  cursor: pointer;
  color: #9b753a;
  letter-spacing: 0.05;
  padding: 1em;
  border-bottom: 1px solid #9b753a;
  ${mobile({ fontSize: "2rem", paddingTop: "0.5em"})}

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
            <Logo src="https://i.ibb.co/4s13XB2/Dore-Baguette-Couronne-Ico-ne-de-Cercle-Clerge-Logo-2-1.png"></Logo>
          </Link>
        </Center>
       <GiHamburgerMenu style={{fontWeight: "200"}}size={44}  onClick={handleToggle}/>
        <Menu navbarOpen={navbarOpen}>
          <Link to="/viner" style={linkStyle}>
            <MenuItem>VÅRA VINER</MenuItem>
          </Link>
          <Link to="/viovin" style={linkStyle}>
            <MenuItem>OM OSS</MenuItem>
          </Link>
          <MenuItem>
            KONTAKT
          </MenuItem>
        </Menu>
     
      </Wrapper>
    </Container>
  );
}

export default Navbar;
