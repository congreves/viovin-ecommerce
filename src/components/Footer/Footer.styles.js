import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  border-top: 0.5px solid #8c7da2;
  border-bottom: 0.5px solid #8c7da2;
  padding-left: 5%;
  padding-right: 5%;
  background-color: transparent;
  ${mobile({padding: "1em"})}
`;
export const Wrapper = styled.div`
  padding: 4em 1em;
  display: flex;
  justify-content: space-between;
  ${mobile({padding: "3em 1em", flexWrap: " wrap-reverse"})}
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.img`
  max-height: 150px;
  ${mobile({ maxHeight: " 75px"})}
`;



export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${mobile({padding: "3em 1em", flexWrap: " wrap-reverse"})}
 
`;
export const Title = styled.h2`
  font-weight: 200;
  display: flex;
  padding: 20px 20px;
  ${mobile({padding: "0"})}
`;
export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  padding: 20px 20px;
`;
export const CompanyInfo = styled.h6`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom:  1em;
 
`;
