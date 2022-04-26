import React from "react";
import styled from "styled-components";



const Container = styled.div`
  height: 100%;
  padding: 10% 5% 10% 5%;
  display: flex;
  justify-content: center;
  background-image: url("https://github.com/congreves/viovin-ecommerce/blob/main/src/assets/Benezet%20(22).jpg");
  
`;
const Form = styled.form`
  width: 30%;
  padding: 3em 2em 3em 2em;
  border-radius: 1em 0 0 1em;
  background: rgba(255, 255, 255, 0.25);
 
`;
const Title = styled.h2`
  display: block;
  padding: 1em 1em;
  font-weight: 200;
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  padding: 1em 1em;
`;
const Label = styled.label`
  flex: 1;
  padding: 1em 1em;
  text-align: left;
`;

const Input = styled.input`
  border-style: none;
  width: 100%;
  padding: 1em 1em;
  height: 100%;
`;
const Message = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1em 1em;
 
 
`;
const Button = styled.button`
width: 50%;
background-color: transparent;
border: 0.1px solid #8C7DA2;
border-radius: .25rem;
box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
color: #8C7DA2;
cursor: pointer;
display: flex;
font-size: 16px;
font-weight: 600;
justify-content: center;
line-height: 1.25;
margin-top: 2em;
min-height: 3rem;
align-items: center;
`

const ImageContainer = styled.img`
width: 70%;
border-radius: 0 1em 1em 0 ;
`



function ContactForm() {
  return (
    <div>
      <Container>
      
        <Form action="https://formsubmit.co/congreves3@gmail.com" method="POST" >
          <Title>KONTAKTA OSS</Title>
          <ContactInfo>
            <Label>Namn</Label>
            <Input
              placeholder="Skriv ditt namn.."
              name="förnamn"
              type="text"
            ></Input>
            <Label>Email</Label>
            <Input
              placeholder="Skriv in email"
              type="email"
              name="email"
            ></Input>
            <Label>Företag /Privatperson</Label>
            <Input
              placeholder="Skriv in företag/privatperson"
              type="text"
              name="företag"
            ></Input>
          </ContactInfo>
          <Message>
            <Label>Meddelande</Label>
            <Input placeholder="Lämna ett meddelande här.." type="text" name="meddelande"></Input>
            <Button type="submit" value="Submit">SKICKA</Button>
          </Message>
          
        </Form>
        <ImageContainer src="/src/assets/Benezet (22).jpg"></ImageContainer>
      </Container>
    </div>
  );
}

export default ContactForm;
