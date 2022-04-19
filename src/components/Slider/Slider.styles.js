import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;

`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  z-index: 2;
  opacity: 0.5;
`;

export const Wrapper = styled.div`
  display: flex;
  transition: all 0.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
export const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
/* */
export const ImgContainer = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: 700px;
  mix-blend-mode: multiply;
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;

  border-bottom: 1px solid #9b753a;
`;

export const Subtitle = styled.h4`
  font-size: 1.2em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #9b753a;
`;
export const Title = styled.h1`
  font-size: 3.5em;
  font-weight: 600;
  font-family: "Fraunces", serif;
  padding-top: 0.5em;
  letter-spacing: 2px;
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  padding-top: 2.5em;
  padding-bottom: 2em;
  color: #8c7b61;
`;
export const Button = styled.button`
  padding: 20px;
  letter-spacing: 1.5px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #8c7b61;
  color: #8c7b61;
`;