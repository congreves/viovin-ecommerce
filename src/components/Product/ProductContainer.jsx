import React from "react";
import styled from "styled-components";
// import { wineList } from "../../data";
import { filterState } from "../../stores/atom";
import { useRecoilValue } from "recoil";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const ProductCard = styled.div`
  height: 100%;
  padding: 10% 5% 10% 5%;
  display: flex;
  justify-content: center;
  background-image: url("https://github.com/congreves/viovin-ecommerce/blob/main/src/assets/Benezet%20(22).jpg");
`;

const Image = styled.img`
  height: 55%;
  max-width: 75%;
  z-index: 2;
`;
const Info = styled.div`
  height: 55%;
  max-width: 75%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 1.5em;
`;
const Subtitle = styled.h4`
  padding: 1.5em;
`;
const Title = styled.h1`
  padding: 1.5em;
`;
const Year = styled.h5`
  padding: 1.5em;
`;
const Sort = styled.h6`
  padding: 1.5em;
`;
const Description = styled.p`
  padding: 1.5em;
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