import React from "react";
import {
  Container,
  ImageContainer,
  BannerContainer,
  BannerImage,
  BannerTitle,
  BannerText,
  BannerSubtitle,
} from "./About.styles";
import {about} from "../../assets/index"

function AboutContainer() {
  return (
    <div>
      <Container>
        <ImageContainer>
          <BannerImage src={about}></BannerImage>
        </ImageContainer>
        <BannerContainer>
          <BannerTitle>En dröm till verklighet.</BannerTitle>
          <BannerText>
            Vi är ett familjeföretag med familjemedlemmar i både Sverige och
            Frankrike. Våran idé att starta VioVin började med ett stort
            intresse för goda viner och en stor kärlek till landet Frankrike.
            Efter många resor till detta underbara land föddes en tanke att
            presentera dessa goda viner till Sverige.
        <br></br>
        <br></br>
            Nu är våran dröm en verklighet. Företaget har sitt säte i Uppsala
            och Stockholm. Vi har ett fint samarbete med en etablerad vingård i
            södra Frankrike i Saint Gilles. Vinerna vi valt att presentera är
            alla noga utvalda efter kvalitet, smak och hållbar process. VioVin
            är exklusiv leverantör av dessa viner i Sverige.
          </BannerText>
          <BannerSubtitle> Vår affärsidé </BannerSubtitle>
          <BannerText>
            → Presentera goda exklusiva viner. <br></br>→ Leverera i tid.{" "}
            <br></br>→ Ha en god och personlig kontakt med våra medarbetare och
            kunder.
          </BannerText>
          <BannerText>Välkommen till oss !</BannerText>
        </BannerContainer>
      </Container>
    </div>
  );
}

export default AboutContainer;

/* LIFESTYLE
<a href="https://ibb.co/FgNb0RQ"><img src="https://i.ibb.co/9sz9VQx/Benezet-58.jpg" alt="Benezet-58" border="0"></a>
<a href="https://ibb.co/r3ny0Vf"><img src="https://i.ibb.co/W0SK5Lp/Bellefontaine-13.jpg" alt="Bellefontaine-13" border="0"></a>
<a href="https://ibb.co/gzjQsG7"><img src="https://i.ibb.co/RzvtL1S/Benezet-42.jpg" alt="Benezet-42" border="0"></a>

<a href="https://ibb.co/KhG3FpL"><img src="https://i.ibb.co/tKhW8Tx/Photos-Saint-benezet-147.jpg" alt="Photos-Saint-benezet-147" border="0"></a>
<a href="https://ibb.co/ds9Fhmf"><img src="https://i.ibb.co/4wyzQ1F/Benezet-22.jpg" alt="Benezet-22" border="0"></a>
*/
