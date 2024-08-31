import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import Card from "../Card/Card";


const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 3.5em;
  margin-top: 3.5em;
  border-top: 1px solid #9b753a;
  align-items: center;
  ${mobile({
    marginTop: "3.5",
    padding: "0.5em",
    flexWrap: "wrap",
    gap: "2em",
  })}
`;

function ContactForm() {
  return (
    <div>
      <Container>
        <Card />
      </Container>
    </div>
  );
}

export default ContactForm;
