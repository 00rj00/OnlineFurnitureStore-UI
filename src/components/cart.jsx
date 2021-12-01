import React, { Component } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  render() {
    return (
      <div>
        <Box mt={3}>
          <Container>
            <Grid container>
              <Grid item xs={12} sm={9}>
                <Paper elevation={3}>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Product Name</TableCell>
                          <TableCell>Quantity</TableCell>
                          <TableCell>Remove</TableCell>
                          <TableCell>Price</TableCell>
                          <TableCell>Total Price</TableCell>
                        </TableRow>
                      </TableHead>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box ml={3} textAlign="left">
                  <Paper elevation={3}>
                    <Box p={3}>
                      <Typography variant={"h6"}>Price Details</Typography>
                    </Box>
                    <Box my={3} mt={2}>
                      <Divider></Divider>
                    </Box>
                    <Box pl={3}>
                      <Typography>Total Amount: </Typography>
                    </Box>
                    <Box p={3} mt={3} textAlign="center">
                      <Button
                        color="primary"
                        variant={"contained"}
                        component={Link}
                        to="/payment"
                      >
                        Checkout
                      </Button>
                    </Box>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    );
  }
}

export default Cart;
