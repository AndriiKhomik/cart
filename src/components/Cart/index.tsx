import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../redux/books/selectors";
import {
  Box,
  Button,
  List,
  ListItem,
  PriceBox,
  QuantityWrapper,
  TitleBox,
  TotalPriceBox,
} from "./Cart.styled";
import { Book } from "../../types";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from "../../redux/books/cartSlice";

const Cart: FC = () => {
  const cart = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const total = cart.reduce(
    // @ts-ignore
    (acc, bookValue) => acc + bookValue.quantity * bookValue.id,
    0
  );

  return (
    <>
      {cart.length === 0 && <Box>Your shopping cart is empty</Box>}
      <TotalPriceBox>Total Price: {total} UAH</TotalPriceBox>
      <List>
        {cart.map((cartItem: Book) => (
          <ListItem key={cartItem.id}>
            <TitleBox>{cartItem.title}</TitleBox>
            <img
              src={cartItem.formats["image/jpeg"]}
              alt={cartItem.formats["image/jpeg"]}
            />
            <QuantityWrapper>
              <Button onClick={() => dispatch(increaseQuantity(cartItem))}>
                <AddCircleOutlineIcon />
              </Button>
              <Box>{cartItem?.quantity}</Box>
              <Button onClick={() => dispatch(decreaseQuantity(cartItem))}>
                <RemoveCircleOutlineIcon />
              </Button>
            </QuantityWrapper>
            {/*@ts-ignore*/}
            <PriceBox>{cartItem.id * cartItem?.quantity} UAH</PriceBox>
            <Button onClick={() => dispatch(deleteItem(cartItem))}>
              <DeleteOutlineIcon />
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Cart;
