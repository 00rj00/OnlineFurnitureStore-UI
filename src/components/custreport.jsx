import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class CustReport extends React.Component {
  state = {
    report: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/report/getAllCustomers")
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
          <h5>Customers Table</h5>
          <table class="table table-dark table-striped w-50 mx-auto">
            <thead>
              <tr>
                <th>cid</th>
                <th>contact_no</th>
                <th>name</th>
                <th>address_addressid</th>
              </tr>
            </thead>
            <tbody>
              {this.state.report.map((report) => (
                <tr key={report.cid}>
                  <td>{report.cid}</td>
                  <td>{report.contactNo}</td>
                  <td>{report.name}</td>
                  <td>{report.address.addressId}</td>
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

export default CustReport;
