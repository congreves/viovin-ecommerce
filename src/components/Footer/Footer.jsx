import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MailOutlined, Phone, Room } from "@mui/icons-material";

const Container = styled.div`
  border-top: 0.5px solid #8c7da2;
  border-bottom: 0.5px solid #8c7da2;
  padding-left: 5%;
  padding-right: 5%;
  background-color: transparent;
`;
const Wrapper = styled.div`
  padding: 4em 1em;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.img`
  max-height: 150px;
`;
const linkStyle = {
  textDecoration: "none",
  margin: 0,
  letterSpacing: 0.5,
};
const Center = styled.div``;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
 
`;
const Title = styled.h2`
  font-weight: 200;
  display: flex;
  padding: 20px 20px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px;
`;
const CompanyInfo = styled.h6`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom:  1em;
 
`;

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={linkStyle}>
            <Logo src="https://i.ibb.co/kDLkfBx/Dore-Baguette-Couronne-Ico-ne-de-Cercle-Clerge-Logo-2-removebg-preview.png"></Logo>
          </Link>
        </Left>
        <Center></Center>
        <Right>
          <Title>KONTAKT</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} />
            address
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} />
            phonenumber
          </ContactItem>
          <ContactItem>
            <MailOutlined style={{ marginRight: "10px" }} />
            email
          </ContactItem>
        </Right>
      </Wrapper>
      <CompanyInfo>
        VioVin AB 
      </CompanyInfo>
      <CompanyInfo>
      © viovin.se 2022
      </CompanyInfo>
    </Container>
  );
}

export default Footer;
