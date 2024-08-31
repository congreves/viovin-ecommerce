import React from 'react'
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  border-top: 1px solid #9b753a;
 margin-top: 2.5em;
 width: 30%;


  ${mobile({ width: "100%",padding: "0px", flexDirection: "column" , alignContent: "center", justifyContent: "center", alignItems: "center"})}
  
`;

export const Title = styled.h2`
  
font-size: 2.5em;
  font-weight: 200;
  margin: 0;
  padding-top: 1em;
  color: #9b753a;
  
  margin-left: 5%;
  
  ${mobile({display: "flex", justifyContent: "center",  fontSize: "24px",paddingTop: "1.5em", paddingBottom: "1.5em" })}
`;
export const Text = styled.p`
font-size: 20px;
letter-spacing: 1.1px;
padding-top: 1em;
padding-bottom: 2em;
color: #8c7b61;
margin-left: 5%;
display: flex;
 
  ${mobile({ display: "none"})}
`;
const linkStyle = {
    textDecoration: "none",
 
  };
export const Button = styled.button`
  padding: 0.5em;
  letter-spacing: 1.5px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
  border: 1px solid #8c7b61;
  color: #8c7b61;
  opacity: 0.8;
  margin-left: 5%;
  white-space: nowrap;

  &:hover,
  &:focus {
    background-color: #8c7b61;
    color: white;
    transform: scale(1.02);
    transition: all .2s ease-in-out;
  }
  &:active {
    color: white;

  }
  ${mobile({ margin: "0"})}
`;

function Description() {
  return (
    <Container>
        <Title>VÅRA VINER</Title>
        <Text>Vi distribuerar vin av finaste kvalitet, noga utvalda från södra Frankrike</Text>
        <Link to="/viner" style={linkStyle}>
        <Button>SE VÅR VINLISTA</Button>
        </Link>
    </Container>
  )
}

export default Description