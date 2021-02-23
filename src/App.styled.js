import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppContainer=styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
`;

export const AppLinkStyled=styled(Link)`
  color: #61dafb;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const AppContent=styled.div`
  flex: 1 1 100%;
  background: #efefef;
`;