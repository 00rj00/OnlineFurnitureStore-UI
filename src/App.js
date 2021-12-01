import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home";
import Nav from "./components/nav";
import Furnitures from "./components/furnitures";
import FurnitureDetails from "./components/furnituredetails";
import Login from "./components/login";
import Logout from "./components/logout";
import Payment from "./components/payment";
import CustReport from "./components/custreport";
import CartReport from "./components/cartreport";
import BillReport from "./components/billreport";
import OrderReport from "./components/orderreport";
import { Route, Redirect, Switch } from "react-router-dom";
import Report from "./components/report";
import Register from "./components/register";
import Cart from "./components/cart";
import Admin from "./components/admin";
import FurnitureForm from "./components/addfurniture";
import FurnitureUpdate from "./components/updatefurniture";
import PaymentWays from "./components/paymentways";
import Netbanking from "./components/netbanking";
import Order from "./components/order";

function App() {
  return (
    <div className="App">
      <Nav />
      
      <Switch>
        <Route path="/order" component={Order} />
        <Route path="/furnitures" component={Furnitures} />
        <Route path="/furnituredetails/:id" component={FurnitureDetails} />
        <Route path="/paymentways" component={PaymentWays} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/cart" component={Cart} />
        <Route path="/admin" component={Admin} />
        <Route path="/addfurniture" component={FurnitureForm} />
        <Route path="/updatefurniture" component={FurnitureUpdate} />
        <Route path="/netbanking" component={Netbanking} />
        <Route path="/logout" component={Logout} />
        <Route path="/report" component={Report} />
        <Route path="/custreport" component={CustReport} />
        <Route path="/cartreport" component={CartReport} />
        <Route path="/billreport" component={BillReport} />
        <Route path="/orderreport" component={OrderReport} />
        <Route path="/" component={Home} />
        <Redirect from="/home" to="/" />
      </Switch>
    </div>
  );
}

export default App;