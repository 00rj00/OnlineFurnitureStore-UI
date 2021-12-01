import React, { Component } from "react";
import { Typography } from "@mui/material";
class Order extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h2" style={{ marginTop: "100px" }}>
          Order placed successfully!!!
        </Typography>
      </div>
    );
  }
}

export default Order;
