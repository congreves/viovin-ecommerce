import React, { useState }  from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";




const Container = styled.div`
padding-left: 5%;
padding-right: 5%;
background-color: transparent;
position: sticky;
overflow: hidden;
top: 0;
width: 100%;
z-index: 10;
backdrop-filter: blur(50px); 
`;
const Wrapper = styled.div`
  height: 8em;
  padding: 1em 1em;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #9B753A;
`;
const Left = styled.div`
  flex: 1;

`;
const Center = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
`
const linkStyle = {
  textDecoration: "none",
  margin: 0,
  letterSpacing: 0.5,
 
};

const Logo = styled.img`
 max-height: 10em;
 

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
 
`;

const MenuItem = styled.p`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  color: #9B753A;
  letter-spacing: 0.05;
  padding-left: 1em;
  padding-right: 1em;
  
`;
const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0.1px solid #9B753A;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  color: #9B753A;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);



`



function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  
  return (
    <Container>
      <Wrapper>
        <Left>
      
        </Left>
       <Center>
       <Link to="/" style={linkStyle}>
        
        <Logo src="https://i.ibb.co/kDLkfBx/Dore-Baguette-Couronne-Ico-ne-de-Cercle-Clerge-Logo-2-removebg-preview.png"></Logo>
        </Link>
       </Center>
        <Right>
        <Link to="/viner" style={linkStyle}>
            <MenuItem>VÅRA VINER</MenuItem>
          </Link>
          <Link to="/viovin" style={linkStyle}>
            <MenuItem >OM OSS</MenuItem>
          </Link>
         <MenuItem>
          <Button>KONTAKTA</Button>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
