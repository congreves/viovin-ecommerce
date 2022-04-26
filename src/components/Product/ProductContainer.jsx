import React from "react";
import styled from "styled-components";
import { filterState } from "../../stores/atom";
import { useRecoilValue } from "recoil";
import {mobile} from "../../responsive";

const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
gap: 2.5em;
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
`;
const Title = styled.h1`
padding-bottom: 1.5em;
`;
const Year = styled.h5`
padding-bottom: 1.5em;
`;
const Sort = styled.h6`
padding-bottom: 1.5em;
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
              <Title>{wine.title}</Title>
              <Year>{wine.year}</Year>
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
