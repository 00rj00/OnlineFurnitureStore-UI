import React, { Component, useState } from "react";
import axios from "axios";
import { Typography, Box, Button } from "@mui/material";

class Register extends Component {
  state = {
    customer: {
      fullName: "",
      contactNo: "",
      email: "",
      password: "",
      role: "",
      city: "",
      country: "",
      state: "",
      pincode: "",
    },
  };
  handleChange = (event) => {
    const customer = { ...this.state.customer }; // copying customer object
    customer[event.target.name] = event.target.value; // customer[fullName] = "ab"
    //customer.fullName = "ab";

    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ customer: customer });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const customer = {
      fullName: this.state.customer.fullName,
      contactNo: this.state.customer.contactNo,
      address: {
        city: this.state.customer.city,
        country: this.state.customer.country,
        pincode: this.state.customer.pincode,
        state: this.state.customer.state,
      },
      login: {
        email: this.state.customer.email,
        password: this.state.customer.password,
        role: this.state.customer.role,
      },
    };
    axios
      .post("http://localhost:8080/api/customer/addCustomer", customer)
      .then((res) => {
        this.props.history.push("/home");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <>
        <div className="container">
          <Typography variant="h2" style={{ marginTop: "25px" }}>
            Register
          </Typography>

          <form
            className="w-50 m-auto mb-3 mt-3 border border-light border-2 shadow-lg rounded p-3"
            onSubmit={this.handleSubmit}
          >
            <div className="mb-3">
              <label for="exampleInputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                placeholder="Enter Your Full Name"
                value={this.state.customer.fullName}
                name="fullName"
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label ">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="name@example.com"
                aria-describedby="emailHelp"
                value={this.state.customer.email}
                name="email"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label ">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="password should be minimum 8 characters"
                pattern=".{8,}"
                value={this.state.customer.password}
                name="password"
                onChange={this.handleChange}
                required
              />
            </div>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              value={this.state.customer.role}
              name="role"
              onChange={this.handleChange}
            >
              <option selected>Select Role</option>
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
              required
            </select>

            <div className="mb-3">
              <label for="exampleInputName" className="form-label ">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                value={this.state.customer.city}
                name="city"
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputContactNo" className="form-label">
                Contact Number
              </label>
              <input
                type="tel"
                pattern=".{10}"
                className="form-control"
                id="exampleInputContactNo"
                aria-describedby="emailHelp"
                value={this.state.customer.contactNo}
                name="contactNo"
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputName" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                value={this.state.customer.state}
                name="state"
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputName" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                value={this.state.customer.country}
                name="country"
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputName" className="form-label">
                Pincode
              </label>
              <input
                type="tel"
                className="form-control"
                id="exampleInputName"
                value={this.state.customer.pincode}
                name="pincode"
                onChange={this.handleChange}
              />
            </div>

            <Box mt={3}>
              <Button variant="contained" type="submit" fullWidth>
                SUBMIT
              </Button>
            </Box>
          </form>
        </div>
      </>
    );
  }
}

export default Register;
