import React from "react";
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Right,
  Title,
  ContactItem,
  CompanyInfo,
} from "./Footer.styles";
import { Link } from "react-router-dom";
import { MailOutlined, Phone, Room } from "@mui/icons-material";

export const linkStyle = {
  textDecoration: "none",
  margin: 0,
  letterSpacing: 0.5,
};
function Footer() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={linkStyle}>
            <Logo src="https://i.ibb.co/4s13XB2/Dore-Baguette-Couronne-Ico-ne-de-Cercle-Clerge-Logo-2-1.png"></Logo>
          </Link>
        </Left>

        <Right>
          <Title>KONTAKT</Title>
          <ContactItem href="tel:+46708890503">
            <Phone style={{ marginRight: "10px" }} />
            Lisskulla Panossian: 0708890503
          </ContactItem>
          <ContactItem href="tel:+46708688960">
            <Phone style={{ marginRight: "10px" }} />
            Nathalie Panossian: 0708688960
          </ContactItem>
          <ContactItem href="mailto: info@viovin.se">
            <MailOutlined style={{ marginRight: "10px" }} />
            info@viovin.se
          </ContactItem>
        </Right>
      </Wrapper>
      <CompanyInfo>VioVin AB</CompanyInfo>
      <CompanyInfo>© viovin.se 2022</CompanyInfo>
    </Container>
  );
}

export default Footer;
