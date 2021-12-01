import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Admin extends Component {
  state = {
    furnitures: [],
    furniture: {
      furnitureName: "",
      furnitureColor: "",
      furnitureModel: "",
      image: "",
      price: "",
    },
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/displayFurniture/getAllFurnitureDetails")
      .then((res) => {
        console.log(res);
        this.setState({ furnitures: res.data });
      })
      .catch((err) => console.log(err));
  }
  handleDelete = (id) => {
    axios
      .delete(
        `http://localhost:8080/api/displayFurniture/deleteFurniture/${id}`
      )
      .then((res) => {
        const furnitures = this.state.furnitures.filter(
          (std) => std.furnitureId != id
        );
        this.setState({ furnitures: furnitures });
      });
  };
  render() {
    return (
      <div className="container mt-5">
        <Link
          to="/addfurniture"
          className="btn btn-info btn-large mb-1 float-end"
        >
          Add
        </Link>
        <table className="table table-info">
          <thead>
            <tr>
              <th>FurnitureId</th>
              <th>FurnitureName</th>
              <th>FurnitureColor</th>
              <th>FurnitureModel</th>
              <th>FurnitureImage</th>
              <th>FurniturePrice</th>
            </tr>
          </thead>
          <tbody>
            {this.state.furnitures.map((furniture) => (
              <tr>
                <td>{furniture.furnitureId}</td>
                <td>{furniture.furnitureName}</td>
                <td>{furniture.furnitureColor}</td>
                <td>{furniture.furnitureModel}</td>
                <td>{furniture.image}</td>
                <td>{furniture.price}</td>
                <td>
                  <Link to={`/updatefurniture/${furniture.furnitureId}`}>
                    <input
                      type="button"
                      value="Update"
                      className="btn btn-outline-primary me-2"
                    />
                  </Link>
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-outline-danger"
                    onClick={() => this.handleDelete(furniture.furnitureId)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Admin;
