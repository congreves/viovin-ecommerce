import {
    ArrowBackIosNewRounded,
    ArrowForwardIosRounded,
  } from "@mui/icons-material";
  import {
    Container,
    Arrow,
    Wrapper,
    Slide,
    ImgContainer,
    Image,
    InfoContainer,
    Subtitle,
    Title,
    Description,
    Button,
  } from "./Slider.styles";
  import { useState } from "react";
 import { sliderItems } from "../../data";
  import React from "react";
  import { Link } from "react-router-dom";
  
  
  
  function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };
  
    return (
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowBackIosNewRounded sx={{color: "shadow"}}/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          
          {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
              <Subtitle>{item.subtitle}</Subtitle>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Link to="/viner">
                  <Button>LÄS MER</Button>
                </Link>
              </InfoContainer>
            </Slide>
          ))}
          ;
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowForwardIosRounded />
        </Arrow>
      </Container>
    );
  }
  
  export default Slider;