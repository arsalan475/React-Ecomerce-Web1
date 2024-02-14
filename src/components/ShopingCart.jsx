import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { ShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ShopingCart() {
  // const item = useSelector((state) => state.cart.cartItem);
  const numOfItems = useSelector((state) => state.cart.numOfItems);

  const items = useSelector((state) => state.cart.cartItem);
  const ids = useSelector((state) => state.cart.ItemId);

  console.log(ids);
  return (
    <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
      <Badge color="error" badgeContent={items} showZero>
        <Link to="/products/cart">
          <ShoppingCart sx={{ cursor: "pointer" }} />
        </Link>
      </Badge>
    </Stack>
  );
}
