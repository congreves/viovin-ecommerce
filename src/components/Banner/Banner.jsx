import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";


const BannerContainer = styled.div`
  height: 70vh;
  background: url("https://i.ibb.co/5LQK0bf/martin-katler-n-Wx-Up-Ryxs0-unsplash.jpg");
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerImage = styled.div`
  max-width: 50%;
  ${mobile({ display: "block" })}
`;

const BannerText = styled.h1`
  margin-left: 5%;
  margin-right: 5%;
  font-family: "Fraunces", serif;
  color: white;
  font-size: 2.5rem;
  font-weight: 200;
  font-style: italic;
  text-align: center;
  ${mobile({ display: "block", fontSize: "1.5rem", paddingTop: "2.5em" })}
`;

function Banner() {
  return (
    <div>
      <BannerContainer>
        <BannerImage>
          <BannerText>
            Vi distribuerar vin av finaste kvalitet, noga utvalda från södra
            Frankrike
          </BannerText>
        </BannerImage>
      </BannerContainer>
    </div>
  );
}

export default Banner;
