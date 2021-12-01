import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Report extends React.Component {
  render() {
    return (
      <div>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/custreport">
              CustReport
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/cartreport">
              CartReport
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/orderreport">
              OrderReport
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/billreport">
              BillReport
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Report;
