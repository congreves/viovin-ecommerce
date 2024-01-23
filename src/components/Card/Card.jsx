import { MailOutlined, Phone } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { BannerSubtitle, BannerText, BannerTitle } from "../About/About.styles";
import { ContactItem } from "../Footer/Footer.styles";

const Container = styled.div`
  display: flex;
`;
const Column = styled.div`
 display: flex:
 flex-direction: column:
  background: rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: inset -8px -8px 16px rgba(239, 239, 239, 0.35), inset 8px 8px 16px rgba(163, 181, 208, 0.39);
  border-radius: 10px;
  padding: 2em;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  ${mobile({ width: " 100%", padding: "2.5em" })}

 
`;

function Card() {
  return (
    <Container>
      <Column>
        <BannerSubtitle>Önskar du att köpa våra viner?</BannerSubtitle>
        <BannerText>
          → Vi vänder oss till företag inom restaurang, barer och hotell
          verksamhet.
        </BannerText>
        <BannerText>
          {" "}
          → Vi kan nu erbjuda våra viner till privatpersoner via Systembolagets hemsida.
        </BannerText>
        <BannerText>
          Vid övriga frågor är du välkommen att kontakta oss antingen mail eller
          via telefon.
        </BannerText>
        <ContactItem href="mailto: info@viovin.se">
          {" "}
          <MailOutlined
            style={{ marginRight: "0.5em", fontSize: "16px" }}
          />{" "}
          info@viovin.se
        </ContactItem>
        <ContactItem href="tel:+46708890503">
          <Phone style={{ marginRight: "0.5em", fontSize: "16px" }} /> Lisskulla
          Panossian 0708890503
        </ContactItem>
        <ContactItem href="tel:+46708688960">
          <Phone style={{ marginRight: "0.5em", fontSize: "16px" }} /> Nathalie
          Panossian 0708688960
        </ContactItem>
        <BannerText>Välkommen!</BannerText>
      </Column>
    </Container>
  );
}

export default Card;