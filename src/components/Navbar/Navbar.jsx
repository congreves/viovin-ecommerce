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
  ${mobile({ paddingLeft: " 0%"})}

`;
const Wrapper = styled.div`
  height: 8em;
  padding: 1em 1em;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #9b753a;
  align-items: center;
  ${mobile({height: "5em", padding: "0.5em 0.5em 0.5em 0em", borderBottom: "none"})}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  ${mobile({ justifyContent: "start"})}
`;
const linkStyle = {
  textDecoration: "none",
  margin: 0,
  letterSpacing: 0.5,
  backgroundColor: "white",
backdropFilter: "blur(50px)",
padding:0,
};

const Logo = styled.img`
  max-height: 10em;
  ${mobile({ maxHeight: "4.3em"})}
`;


const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 8em;
  background-color: white;
  backdrop-filter: blur(50px);
  padding: 1.5em 1.5em;
  gap:1.5em;
  transform: ${({ navbarOpen }) => navbarOpen ? 'translateX(100%)' : 'translateX(250%)'};
  transition: all 0.4s;
  z-index: 100;
  width: 75%;
  height: 100vh;
  ${mobile({width: "50%",
    height: "100vh", overflowX: "hidden"})}
`;

const MenuItem = styled.p`
background-color: white;
backdrop-filter: blur(50px);
  font-size: 2rem;
  cursor: pointer;
  color: #9b753a;
  letter-spacing: 0.05;
  padding: 1em;
  border-bottom: 1px solid #9b753a;
  ${mobile({ fontSize: "1rem", paddingTop: "0.5em", overflowX: "hidden"})}

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
       <GiHamburgerMenu style={{fontWeight: "200" }}size={44}  onClick={handleToggle}/>
        <Menu navbarOpen={navbarOpen}>
          <Link to="/viner" style={linkStyle}>
            <MenuItem>VÅRA VINER</MenuItem>
          </Link>
          <Link to="/viovin" style={linkStyle}>
            <MenuItem>OM OSS</MenuItem>
          </Link>
          <Link to="/#kontakt-page">
          <MenuItem>
            KONTAKT
          </MenuItem>
          </Link>
        </Menu>
     
      </Wrapper>
    </Container>
  );
}

export default Navbar;
