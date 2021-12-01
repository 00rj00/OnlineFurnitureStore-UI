import React, { Component } from "react";
import axios from "axios";
class CartReport extends React.Component {
  state = {
    report: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/report/getAllCartDetails")
      .then((res) => {
        console.log(res);
        this.setState({ report: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="container-fluid ">
        <div class="table-responsive">
          <h5>Cart Table</h5>
          <table class="table table-dark table-striped w-50 mx-auto">
            <thead>
              <tr>
                <th>cart_id</th>
                <th>order_num</th>
                <th>quantity</th>
                <th>customer_cid</th>
                <th>furniture_furnitureid</th>
              </tr>
            </thead>
            <tbody>
              {this.state.report.map((report) => (
                <tr key={report.cartId}>
                  <td>{report.cartId}</td>

                  <td>{report.orderNum}</td>
                  <td>{report.quantity}</td>

                  <td>{report.customer.cid}</td>
                  <td>{report.furniture.furnitureId}</td>

                  {/* <td>{bookissued.bookid}</td>
                <td>{bookissued.userid}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default CartReport;
