import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Netbanking extends React.Component {
  state = {
    card: {
      cardName: "",
      cardNumber: "",
      cvv: "",
      cardExpiry: "",
    },
  };
  handleChange = (event) => {
    const card = { ...this.state.card }; // copying student object
    card[event.target.name] = event.target.value; // student[fullName] = "ab"
    //student.fullName = "ab";
    //student[fullName]="ab";
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ card: card });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const card = {
      cardName: this.state.card.cardName,
      cardNumber: this.state.card.cardNumber,
      cvv: this.state.card.cvv,
      cardExpiry: this.state.card.cardExpiry,
    };
    axios
      .post("http://localhost:8080/api/payment/payByCard", card)
      .then((res) => {
        this.props.history.push("/home");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <form
          className="w-50 mx-auto mt-4 border border-info border-3 rounded p-3"
          onSubmit={this.handleSubmit}
        >
          <div className="mb-3">
            <label for="exampleInputName" className="form-label text-danger">
              Card Holder Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="Enter Your Name"
              value={this.state.card.cardName}
              name="cardName"
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label
              for="exampleInputCardNumber"
              className="form-label text-danger"
            >
              Card Number
            </label>
            <input
              type="tel"
              pattern=".{12}"
              className="form-control"
              id="exampleInputCardNumber"
              aria-describedby="emailHelp"
              value={this.state.card.cardNumber}
              name="cardNumber"
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label
              for="exampleInputContactNo"
              className="form-label text-danger"
            >
              CVV
            </label>
            <input
              type="tel"
              pattern=".{3}"
              className="form-control"
              id="exampleInputCvv"
              aria-describedby="emailHelp"
              value={this.state.card.cvv}
              name="cvv"
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label
              for="exampleInputCardExpiry"
              className="form-label text-danger"
            >
              Card Expiry
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleInputCardExpiry"
              format={"YYYY-MM-DD"}
              aria-describedby="emailHelp"
              value={this.state.card.cardExpiry}
              name="cardExpiry"
              onChange={this.handleChange}
              required
            />
          </div>

          <div className=" d-grid gap-3">
            <Link to="/order">
              <button type="submit" class="btn btn-success m-3 ">
                Pay
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Netbanking;
