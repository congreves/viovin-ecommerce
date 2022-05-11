import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive"



const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 3.5em 0em;
  margin-top: 3.5em;
  border-top: 1px solid #9b753a;
  ${mobile({ marginTop: "0.5", padding: "0.5em"})}
`;
const Form = styled.form`
 display: flex:
 flex-direction: column:
  background: rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: inset -8px -8px 16px rgba(239, 239, 239, 0.35), inset 8px 8px 16px rgba(163, 181, 208, 0.39);
  border-radius: 40px;
  width: 50%;
  padding: 2em;
  justify-content: center;
  align-items: center;
  ${mobile({ width: " 100%", padding: "0.5em"})}

 
`;
const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  margin: 0;
  ${mobile({ paddingTop: "1.5em"})}
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  padding: 1em 1em;
  ${mobile({ padding: "0.5em"})}
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
  background: rgba(255, 255, 255, 0.1);
box-shadow: inset -8px -8px 16px rgba(239, 239, 239, 0.35), inset 8px 8px 16px rgba(163, 181, 208, 0.39);
border-radius: 40px;
`;
const Message = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1em 1em;
  ${mobile({ width: " 100%", paddingTop: "0.5em"})}
 
 
`;
const MessageInput = styled.textarea`
border-style: none;
width: 100%;
padding: 1em 1em;
height: 100%;
background: rgba(255, 255, 255, 0.1);
box-shadow: inset -8px -8px 16px rgba(239, 239, 239, 0.35), inset 8px 8px 16px rgba(163, 181, 208, 0.39);
border-radius: 40px;
`
const Button = styled.button`
width: 50%;
background-color: transparent;
border: 0.1px solid #9b753a;
border-radius: .25rem;
box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
cursor: pointer;
display: flex;
font-size: 16px;
font-weight: 600;
justify-content: center;
line-height: 1.25;
margin-top: 2em;
min-height: 3rem;
align-items: center;
color: #9b753a;
padding: 1em 1em;
&:hover,
&:focus {
  background-color: #8c7b61;
  color: white;
}
&:active {
  color: white;
${mobile({ width: " 70%", margin: "1em"})}
`;





function ContactForm() {
  return (
    <div>
      <Container>
      
        <Form action="https://formsubmit.co/info@viovin.se" method="POST" >
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
            <MessageInput placeholder="Lämna ett meddelande här.." type="text" name="meddelande"></MessageInput>
            
          </Message>
          <Button type="submit" value="Submit">SKICKA</Button>
        </Form>
       
      </Container>
    </div>
  );
}

export default ContactForm;
 /*<ImageContainer src="https://i.ibb.co/3RbSwLY/Benezet-42.jpg" alt="Benezet-42" border="0">
          </ImageContainer> */