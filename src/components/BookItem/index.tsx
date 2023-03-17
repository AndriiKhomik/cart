import { Book } from "../../types";
import { Box, BuyButton, ImgBox, ListItem } from "./BookItem.styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/books/cartSlice";
import { selectCartItems } from "../../redux/books/selectors";

const BookItem = ({ book }: { book: Book }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);

  const isBought = cart.findIndex((bookItem) => bookItem.id === book.id);

  const handleBuy = () => {
    return dispatch(addToCart(book));
  };

  return (
    <ListItem>
      <Box>{book.title}</Box>
      <Box>
        Sold <b>{book.download_count}</b>
      </Box>
      {book.authors.map((author, index) => (
        <Box key={`${author}-${index}`}>{author.name}</Box>
      ))}
      <Box>
        Price: <b>{book.id} UAH</b>
      </Box>
      <ImgBox>
        <img
          src={book.formats["image/jpeg"]}
          alt={book.formats["image/jpeg"]}
        />
      </ImgBox>
      <BuyButton onClick={handleBuy}>
        <ShoppingCartIcon />
        {isBought >= 0 ? "Added to cart" : "Buy Now"}
      </BuyButton>
    </ListItem>
  );
};

export default BookItem;
