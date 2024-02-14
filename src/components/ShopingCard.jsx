import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";

import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../configure redux/cart_slice";
import { useState } from "react";
export default function ShopingCard({
  description,
  title,
  price,
  img,
  id,
  left,
}) {
  const Dispatch = useDispatch();

  function addToCart() {
    Dispatch(addItem(id));
  }

  return (
    <>
      <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
        <CardOverflow>
          <AspectRatio sx={{ minWidth: 200 }}>
            <img
              src={img}
              // srcSet={img}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="body-xs">{description}</Typography>

          {title}

          <Typography
            level="title-lg"
            sx={{ mt: 1, fontWeight: "xl" }}
            endDecorator={
              <Chip component="span" size="sm" variant="soft" color="success">
                Lowest price
              </Chip>
            }
          >
            {price}
          </Typography>
          <Typography level="body-sm">
            (Only <b>{left}</b> left in stock!)
          </Typography>
        </CardContent>
        <CardOverflow sx={{ display: "flex", gap: ".5rem" }}>
          <Button onClick={addToCart} variant="solid" color="danger" size="lg">
            Add to cart
          </Button>
          <Link to={`${id}`}>
            <Button
              className="block w-full"
              variant="solid"
              color="primary"
              size="lg"
            >
              <span>Buy Now</span>
            </Button>
          </Link>
        </CardOverflow>
      </Card>
    </>
  );
}
