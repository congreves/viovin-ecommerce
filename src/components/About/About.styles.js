import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  ${mobile({
    width: "100%",
    padding: "0px",
    flexWrap: "wrap",
    flexDirection: "column-reverse",
    alignItems: "center",
    justifyContent: "center",
  })}
`;
export const ImageContainer = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ margin: "0px", maxWidth: "100%" })}
`;
export const BannerImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 50em;
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-right: 5%;
  width: 100%;
  height: auto;
  padding: 1.5em 1.5em;
  ${mobile({ margin: "0px", padding: "1em 1em", flexWrap: "wrap" })}
`;

export const BannerTitle = styled.h1`
  font-family: "Fraunces", serif;
  color: #9b753a;
  font-size: 3.5em;
  font-weight: 400;
  text-align: center;
  ${mobile({ fontSize: "24px", textAlign: "left" })}
`;

export const BannerText = styled.h4`
  color: #9b753a;
  font-size: 1.1em;
  font-weight: 400;
  text-align: left;
  letter-spacing: 1.5px;
  line-height: 1.5;
  padding-top: 1em;
  ${mobile({ fontSize: "16px" })}
`;
export const BannerSubtitle = styled.h3`
  font-family: "Fraunces", serif;
  color: #9b753a;
  font-size: 1.5em;
  font-weight: 400;
  text-align: center;
  ${mobile({ fontSize: "20px", textAlign: "left" })}
`;
