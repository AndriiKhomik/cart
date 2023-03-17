import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Header = styled.header`
  padding: 12px 0;
  border-bottom: 2px solid #ffe6f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;
export const StyledLink = styled(NavLink)`
  color: #343434;
  position: relative;
  padding: 8px 12px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: border-width 500ms linear;
  text-transform: uppercase;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #e6b31e;
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: opacity 500ms ease-out, transform 500ms ease-out;
  }
  &.active {
    color: #e6b31e;
  }

  &.active::after,
  &:hover::after {
    opacity: 1;
    transform: scaleX(1);
  }
`;

export const NavBar = styled.nav`
  display: inline-block;
`;

export const Container = styled.div`
  padding: 32px;
  max-width: 1120px;
  margin: 0 auto;
`;

export const Box = styled.div`
  position: relative;
`;

export const CartAmount = styled.span`
  position: absolute;
  top: -8px;
  right: -6px;
  font-weight: bold;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  width: 18px;
`;

export const CartLik = styled(Link)`
  color: black;
`;
