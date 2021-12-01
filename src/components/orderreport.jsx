import React, { Component } from "react";
import axios from "axios";
class OrderReport extends React.Component {
  state = {
    report: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/report/getAllOrderDetails")
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
          <h5>Orders Table</h5>
          <table class="table table-dark table-striped w-50 mx-auto">
            <thead>
              <tr>
                <th>order_id</th>
                <th>amount</th>
                <th>order_date</th>
                <th>price</th>
                <th>quantity</th>
                <th>status</th>
                <th>customer_cid</th>
                <th>furniture_furnitureid</th>
              </tr>
            </thead>
            <tbody>
              {this.state.report.map((report) => (
                <tr key={report.orderId}>
                  <td>{report.orderId}</td>
                  <td>{report.amount}</td>

                  <td>{report.orderDate}</td>
                  <td>{report.price}</td>
                  <td>{report.quanity}</td>
                  <td>{report.status}</td>
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

export default OrderReport;
