import {
  Box,
  CartAmount,
  CartLik,
  Container,
  Header,
  NavBar,
  StyledLink,
} from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/books/selectors";

export const SharedLayout = () => {
  const cart = useSelector(selectCartItems);

  return (
    <Container>
      <Header>
        <NavBar>
          <StyledLink to="/">Books</StyledLink>
          <StyledLink to="/cart">Cart</StyledLink>
        </NavBar>
        <Box>
          <CartLik to="/cart">
            <ShoppingCartIcon />
            <CartAmount>{cart.length}</CartAmount>
          </CartLik>
        </Box>
      </Header>
      <Outlet />
    </Container>
  );
};
export default SharedLayout;
