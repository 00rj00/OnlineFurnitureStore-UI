import React, { Component } from "react";
import axios from "axios";

class BillReport extends React.Component {
  state = {
    report: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/report/getAllBills")
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
                <th>bill_no</th>
                <th>amount</th>
                <th>price</th>
                <th>quantity</th>
                <th>customer_customerid</th>

                <th>furniture_furnitureid</th>
              </tr>
            </thead>
            <tbody>
              {this.state.report.map((report) => (
                <tr key={report.billNo}>
                  <td>{report.billNo}</td>

                  <td>{report.amount}</td>
                  <td>{report.price}</td>

                  <td>{report.quanity}</td>

                  <td>{report.customers.cid}</td>
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

export default BillReport;
