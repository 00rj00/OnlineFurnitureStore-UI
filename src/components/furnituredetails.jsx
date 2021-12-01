import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { getFurnitureByIdAction } from "../actions/furnitures-actions";
import {
  Grid,
  Container,
  Box,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const FurnitureDetails = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFurnitureByIdAction(props.match.params.id));
  }, []);
  const furniture = useSelector((state) => state.furniturestore.furniture);

  return (
    <>
      <div className="container mt-3 shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-image m-3 ">
          <img
            src={furniture.image}
            alt={furniture.furnitureName}
            className="img-responsive"
            style={{
              width: "50%",
              height: "50%",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          />
        </div>
        <div className="card-right">
          <h5 className="item-title">{furniture.furnitureName}</h5>
          <p className="item-price">
            <b>Rs: {furniture.price}.00</b>
          </p>
          <p className="item-desc container ">
            Furniture consists of large objects such as tables, chairs, or beds
            that are used in a room for sitting or lying on or for putting
            things on or in. Each piece of furniture in their home suited the
            style of the house
          </p>
          <Button variant="contained" color="primary">
            Add to cart
          </Button>
          <Link to="/paymentways" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="success"
              style={{ marginLeft: "10px" }}
            >
              Buy now
            </Button>
          </Link>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default FurnitureDetails;
