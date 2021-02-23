import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavStyled = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
  overflow: scroll;
  width: 100%;
`;

export const NavItemStyled = styled.li`
  display: flex;
  width: 100%;
`;

export const NavLinkStyled = styled(Link)`
  padding: .5rem;
  width: 100%;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;