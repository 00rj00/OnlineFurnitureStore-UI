import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Paper } from "@mui/material";

class PaymentWays extends React.Component {
  render() {
    return (
      <div className="mt-5 text-dark">
        <h3>Select a Payment Method</h3>
        <form className="w-50 mx-auto mt-5 border border-light shadow-lg border-4 text-primary rounded p-5 gap-5">
          <div className="form-check ">
            <Button
              color="success"
              variant="outlined"
              component={NavLink}
              to="/netbanking"
              style={{ margin: "20px" }}
            >
              Net Banking
            </Button>
          </div>
          <div className="form-check ">
            <Button
              color="secondary"
              variant="outlined"
              component={NavLink}
              to="/order"
              style={{ margin: "20px" }}
            >
              Cash on delivery
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default PaymentWays;
