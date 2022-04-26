import React from "react";
import styled from "styled-components";
import { filterState } from "../../stores/atom";
import { useRecoilValue } from "recoil";
import {mobile} from "../../responsive";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 100%;
  gap: 5em;
  margin-top: 100px;
  ${mobile({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "5em",
  })}
`;
const ProductCard = styled.div`
flex-direction: row;
display: flex;
  max-width: 40%;
  height: auto;
  padding: 1.5em;
  flex-grow : 1;
  ${mobile({ flex: "40%", minWidth: "100%", flexDirection: "column", })}
`;

const ImageContainer = styled.div`
width: 50%;
height: auto;

${mobile({ margin: "0px", width: "100%",})}
 
`;
const Image = styled.img`
width: 100%;
height: auto;
object-fit: cover;

 
`;
const Info = styled.div`
  z-index: 2;
  width: 50%;
  height: auto;
  ${mobile({ flex: "40%", width: "100%" })}

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
            <Image src={wine.img}></Image>

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
