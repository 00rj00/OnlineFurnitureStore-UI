import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { CardActionArea, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FurnitureCard = (props) => {
  const { furniture } = props;
  return (
    <div>
      <Card
        style={{
          margin: "auto",
          height: "260px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={furniture.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              textAlign="left"
            >
              {furniture.furnitureName}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography gutterBottom variant="caption" component="div">
                Color: {furniture.furnitureColor}
              </Typography>
              <Typography gutterBottom variant="button" component="div">
                Rs: {furniture.price}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default FurnitureCard;
