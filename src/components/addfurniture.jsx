import axios from "axios";
import React, { Component } from "react";
import { Typography } from "@mui/material";
import Joi from "joi-browser";

class FurnitureForm extends React.Component {
  state = {
    furniture: {
      furnitureName: "",
      furnitureModel: "",
      furnitureColor: "",
      furnitureId: 0,
      image: "",
      price: "",
    },
  };

  handleChange = (event) => {
    const furniture = { ...this.state.furniture };
    furniture[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ furniture: furniture });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Clicked");
    const furniture = {
      furnitureName: this.state.furniture.furnitureName,
      furnitureModel: this.state.furniture.furnitureModel,
      furnitureColor: this.state.furniture.furnitureColor,
      furnitureId: this.state.furniture.furnitureId,
      image: this.state.furniture.image,
      price: this.state.furniture.price,
    };
    axios
      .post(
        "http://localhost:8080/api/displayFurniture/addfurniture",
        furniture
      )
      .then((res) => {
        this.props.history.push("/furniture");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <h3 class="text-center">Add Furniture</h3>
        <form className="w-50 mx-auto border p-3" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Furniture Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={this.state.furniture.furnitureName}
              name="furnitureName"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputContactNo" className="form-label">
              Furniture Model
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              value={this.state.furniture.furnitureModel}
              name="furnitureModel"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Furniture Color
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              value={this.state.furniture.furnitureColor}
              name="furnitureColor"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInput" className="form-label">
              Furniture Image
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              value={this.state.furniture.image}
              name="image"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              aria-describedby="emailHelp"
              value={this.state.furniture.price}
              name="price"
              onChange={this.handleChange}
            />
          </div>

          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FurnitureForm;
