import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getFurnituresAction } from "../actions/furnitures-actions";
import FurnitureCard from "./furniturecard";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class Home extends React.Component {
  componentDidMount() {
    this.props.getFurnituresAction();
  }

  render() {
    return (
      <>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://images.pexels.com/photos/6316067/pexels-photo-6316067.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="d-block w-100"
                style={{ height: 500 }}
                alt="..."
              />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src="https://images.pexels.com/photos/5696273/pexels-photo-5696273.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="d-block w-100"
                style={{ height: 500 }}
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="d-block w-100"
                style={{ height: 500 }}
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div>
          <h2 className="display-4 mt-2">Sofa Sets</h2>
        </div>

        <div className="container">
          <Grid container spacing={2} style={{ marginTop: "15px" }}>
            {this.props.furnitures
              .filter((furniture) => furniture.furnitureModel == "Sofa")
              .map((furniture) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link
                    to={`/furnituredetails/${furniture.furnitureId}`}
                    style={{ textDecoration: "none" }}
                  >
                    <FurnitureCard furniture={furniture} />
                  </Link>
                </Grid>
              ))}
          </Grid>
        </div>
        <div>
          <h2 className="display-4 mt-2">Beds</h2>
        </div>
        <div className="container" style={{ backgroundcolor: "honeydew" }}>
          <Grid container spacing={2} style={{ marginTop: "15px" }}>
            {this.props.furnitures
              .filter((furniture) => furniture.furnitureModel == "Bed")
              .map((furniture) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link
                    to={`/furnituredetails/${furniture.furnitureId}`}
                    style={{ textDecoration: "none" }}
                  >
                    <FurnitureCard furniture={furniture} />
                  </Link>
                </Grid>
              ))}
          </Grid>
        </div>
        <div>
          <h2 className="display-4 mt-2">Storage Spaces</h2>
        </div>
        <div className="container" style={{ backgroundcolor: "honeydew" }}>
          <Grid container spacing={2} style={{ marginTop: "15px" }}>
            {this.props.furnitures
              .filter((furniture) => furniture.furnitureModel == "Storage")
              .map((furniture) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link
                    to={`/furnituredetails/${furniture.furnitureId}`}
                    style={{ textDecoration: "none" }}
                  >
                    <FurnitureCard furniture={furniture} />
                  </Link>
                </Grid>
              ))}
          </Grid>
        </div>
        <div>
          <h2 className="display-4 mt-2">Chairs</h2>
        </div>
        <div className="container" style={{ backgroundcolor: "honeydew" }}>
          <Grid container spacing={2} style={{ marginTop: "15px" }}>
            {this.props.furnitures
              .filter((furniture) => furniture.furnitureModel == "Chair")
              .map((furniture) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link
                    to={`/furnituredetails/${furniture.furnitureId}`}
                    style={{ textDecoration: "none" }}
                  >
                    <FurnitureCard furniture={furniture} />
                  </Link>
                </Grid>
              ))}
          </Grid>
        </div>
      </>
    );
  }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
  //  const { fakestore } = state;
  return {
    furnitures: state.homestore.furnitures,
  };
};

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    getFurnituresAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Home); // connect component to store
