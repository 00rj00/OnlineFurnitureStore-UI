import { NavLink } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
} from "@mui/material";

import { useSelector } from "react-redux";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));
const Nav = () => {
  //const classes = useStyles();
  const count = useSelector((state) => state.counter);
  const login = useSelector((state) => state.login);
  console.log(count);
  console.log(login);
  return (
    <div>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography
            variant="h6"
            style={{
              border: "2px solid honeydew",
              padding: "5px",
            }}
          >
            OnlineFurnitureStore
          </Typography>
          <Button color="inherit" component={NavLink} to="/">
            Home
          </Button>

          <Button
            color="inherit"
            style={{ marginRight: "auto" }}
            component={NavLink}
            to="/furnitures"
          >
            Products
          </Button>
          {login.loggedIn && login.role == "admin" && (
            <>
              <Button color="inherit" component={NavLink} to="/admin">
                Admin
              </Button>
              <Button color="inherit" component={NavLink} to="/report">
                Report
              </Button>
            </>
          )}

          {login.loggedIn ? (
            <>
              <Button color="inherit" component={NavLink} to="/logout">
                Logout
              </Button>
              <IconButton
                color="inherit"
                aria-label="add to shopping cart"
                component={NavLink}
                to="/cart"
              >
                <Badge color="secondary" badgeContent={count}>
                  <AddShoppingCartIcon />
                </Badge>
              </IconButton>
            </>
          ) : (
            <>
              <Button color="inherit" component={NavLink} to="/login">
                Login
              </Button>
              <Button color="inherit" component={NavLink} to="/register">
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
