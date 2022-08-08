import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  padding-top: 2.5em;
  display: flex;
  flex-direction: row;
  gap: 2em;

  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

export const CategoryContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding: 2.5em 0em;
  justify-content: space-between;
  gap: 2em;

  ${mobile({ padding: "0px", flexDirection: "column", gap: "0em" })}
`;
export const CategoryItem = styled.div`

  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  opacity: 1;

 
}
  
  &:hover{
    transform: scale(1.02);
    transition: all .2s ease-in-out;
    -webkit-filter: brightness(50%);
   z-index: 100;
  
}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left-top;


  ${mobile({ height: "20vh", flexDirection: "column" })}
`;
export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: grey;
  cursor: pointer;
  font-weight: 600;


 

  opacity: 0.8;

  &:hover,
  &:focus {
    background-color: #8c7b61;
    color: white;
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    z-index: 1000;
  }
  &:active {
    color: white;
  }
`;
