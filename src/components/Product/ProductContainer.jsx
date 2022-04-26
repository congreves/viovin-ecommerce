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

`;
const ProductCard = styled.div`

`;

const ImageContainer = styled.div`



 
`;
const Image = styled.img`
width: 100%;
height: auto;
object-fit: cover;

 
`;
const Info = styled.div`



`;
const Subtitle = styled.h4`
padding-bottom: 1.5em;
text-transform: uppercase;
`;
const Title = styled.h1`
padding-bottom: 1.5em;
`;
const Year = styled.h2`
padding-bottom: 1.5em;
gap: 1.5em;

`;
const Sort = styled.h3`
padding-bottom: 1.5em;
font-weight: 300;
`;
const Description = styled.p`
padding-bottom: 1.5em;
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
              <Year><GiFlatfish/><GiRoastChicken/><GiTomato/></Year>
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
