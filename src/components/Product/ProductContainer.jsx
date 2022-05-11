import React from "react";
import styled from "styled-components";
import { filterState } from "../../stores/atom";
import { useRecoilValue } from "recoil";
import {mobile} from "../../responsive";
import { GiFlatfish, GiRoastChicken, GiTomato } from "react-icons/gi";

const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 10.5em;
padding: 0 5%;
${mobile({ gap: "0", padding: "0.5em 0.5em", borderBottom: "1px solid #8c7b61"})}
`;
const ProductCard = styled.div`
border-bottom: 1px solid #8c7b61;
${mobile({borderBottom: "1px solid #8c7b61"})}
`;

const ImageContainer = styled.div`



 
`;
const Image = styled.img`
width: 100%;
height: auto;
object-fit: cover;
${mobile({ width: "80%"})}
 
`;
const Info = styled.div`



`;
const Subtitle = styled.h4`
padding-bottom: 1em;
text-transform: uppercase;
`;
const Title = styled.h1`
font-family: "Fraunces", serif;
${mobile({ fontSize: "24px", textAlign: "left" })}
`;
const Year = styled.h2`

`;
const Sort = styled.h3`
padding-bottom: 1.5em;
font-weight: 300;
${mobile({ padding: "0", })}
`;
const Description = styled.p`
padding-bottom: 1.5em;
${mobile({ fontSize: "16px", })}
`;

function ProductContainer() {
  const filteredWines = useRecoilValue(filterState);

  return (
    <Container>
      {filteredWines.map((wine) => {
        return (
          <ProductCard key={wine.id}>
            <ImageContainer>
            <Image src={wine.img}></Image>
            </ImageContainer>
            <Info>
              <Subtitle>{wine.subtitle}</Subtitle>
              <Title>{wine.title}, {wine.year}</Title>
              <Year></Year>
              <Sort>{wine.sort}</Sort>
              <Description>{wine.desc}</Description>
            </Info>
          </ProductCard>
        );
      })}
    </Container>
  );
}

export default ProductContainer;
