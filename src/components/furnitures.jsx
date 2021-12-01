import axios from "axios";
import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { getFurnituresAction } from "../actions/furnitures-actions";
import FurnitureCard from "./furniturecard";
import { Grid, Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Menu from "./menu";
class Furnitures extends React.Component {
  state = {
    search: "",
    furnitures: [],
    furnitureModel: "All",
    filteredFurnitures: [],
  };
  componentDidMount() {
    this.props.getFurnituresAction();
    setTimeout(() => {
      this.setState({ furnitures: this.props.furnitures });
      this.setState({ filteredFurnitures: this.props.furnitures });
    }, 500);
  }
  handleChange = (event) => {
    this.setState({ search: event.target.value });
    const furnitures = this.props.furnitures.filter((f) =>
      f.furnitureName.toLowerCase().includes(this.state.search)
    );
    this.setState({ filteredFurnitures: furnitures });
  };
  handleCategory = (category) => {
    console.log(category);
    if (category == "All") {
      this.setState({ filteredFurnitures: this.state.furnitures });
    } else {
      const furnitures = this.state.furnitures.filter((prod) =>
        prod.furnitureModel.toLowerCase().includes(category.toLowerCase())
      );
      console.log(furnitures);
      this.setState({ filteredFurnitures: furnitures });
    }
  };

  render() {
    return (
      <>
        <div>
          <Box mt={3}>
            <form>
              <TextField
                id="filled-search"
                label="Search Furnitures"
                type="search"
                variant="outlined"
                name="search"
                value={this.state.search}
                onChange={this.handleChange}
              />
            </form>
          </Box>
          <Grid container spacing={2} style={{ marginTop: "10px" }}>
            <Grid item xs={12} sm={2} style={{ marginTop: "10px" }}>
              <Menu handleCategory={this.handleCategory} />
            </Grid>
            <Grid item xs={12} sm={10}>
              <Grid container spacing={2}>
                {this.state.filteredFurnitures.map((furniture) => (
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
            </Grid>
          </Grid>
          {/* <Grid container spacing={2} style={{ marginTop: "15px" }}>
            {this.props.furnitures.map((furniture) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Link
                  to={`/furnituredetails/${furniture.furnitureId}`}
                  style={{ textDecoration: "none" }}
                >
                  <FurnitureCard furniture={furniture} />
                </Link>
              </Grid>
            ))}
          </Grid> */}
        </div>
      </>
    );
  }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
  //  const { fakestore } = state;
  return {
    furnitures: state.furniturestore.furnitures,
  };
};

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    getFurnituresAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Furnitures); // connect component to store
