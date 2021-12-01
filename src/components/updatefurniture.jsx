import React, { Component } from "react";
import axios from "axios";

class FurnitureUpdate extends React.Component {
  state = {
    furniture: {
      furnitureId: "",
      furnitureName: "",
      furnitureColor: "",
      furnitureModel: "",
      price: "",
    },
  };

  componentDidMount() {
    //this.props.match.params.id;
    axios
      .get(
        `http://localhost:8080//api/displayFurniture/getFurnitureDetalis/${this.props.match.params.furnitureId}`
      )
      .then((res) => this.setState({ furniture: res.data }))
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    const furniture = { ...this.state.furniture }; // copying furniture object
    furniture[event.target.name] = event.target.value;

    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ furniture: furniture });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    axios
      .put(
        `http://localhost:8080//api/displayFurniture/updateFurniture/${this.props.match.params.furnitureId}`,
        this.state.furniture
      )
      .then((res) => {
        this.props.history.push("/furniture");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h3 className="mt-5">Update Furniture</h3>
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3 ">
          <div className="mb-3 ">
            <label for="exampleInputEmail1" className="form-label">
              Furniture Id
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.furniture.furnitureId}
              name="furnitureId"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Furniture Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={this.state.furniture.furnitureName}
              name="furnitureName"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Furniture color
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={this.state.furniture.furnitureColor}
              name="furnitureColor"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Furniture model
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={this.state.furniture.furnitureModel}
              name="furnitureModel"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              price
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={this.state.furniture.price}
              name="price"
              onChange={this.handleChange}
            />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FurnitureUpdate;
