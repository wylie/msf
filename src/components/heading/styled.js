import styled from "styled-components";


export const HeadingStyled = styled.h1`
  display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  padding: 0 1rem;
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 2.4rem;
  color: #fff;
  background-color: #000;
  background: #231f20 url(${props => props.bgImage}) repeat;

  @media (min-width: 600px) {
    min-height: 200px;
  }
`;
