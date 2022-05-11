import styled from "styled-components";

export const Container = styled.div`
  border-top: 0.5px solid #8c7da2;
  border-bottom: 0.5px solid #8c7da2;
  padding-left: 5%;
  padding-right: 5%;
  background-color: transparent;
`;
export const Wrapper = styled.div`
  padding: 4em 1em;
  display: flex;
  justify-content: space-between;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.img`
  max-height: 150px;
`;

export const Center = styled.div``;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
 
`;
export const Title = styled.h2`
  font-weight: 200;
  display: flex;
  padding: 20px 20px;
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
