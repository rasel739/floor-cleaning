import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { useSelector } from "react-redux";

const OrderHistory = () => {
  const { userOrderArray } = useSelector((state) => state.servicePriceReducer);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">#OrderId</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Date and Time</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Payment Status</TableCell>
          </TableRow>
        </TableHead>
        {userOrderArray?.[0]?.email ? (
          <TableBody>
            {userOrderArray.map((userOrder, index) => (
              <TableRow
                key={userOrder._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  <span style={{ fontWeight: "bold" }}>
                    {"("}
                    {index + 1}
                    {")"}
                  </span>{" "}
                  {"#"}
                  {userOrder.orderId}
                </TableCell>
                <TableCell align="center">{userOrder.title}</TableCell>
                <TableCell align="center">{userOrder.time}</TableCell>
                <TableCell align="center">
                  <img
                    style={{ width: "10%" }}
                    src={userOrder.homeIcon}
                    alt="home-icon"
                  />
                </TableCell>
                <TableCell align="center">${userOrder.price}</TableCell>
                <TableCell
                  align="center"
                  sx={userOrder.status ? { color: "green" } : { color: "red" }}
                >
                  {userOrder.status ? "Paid" : "Unpaid"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <Box
            sx={{
              margin: "auto",

              height: "100vh",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{ marginLeft: "120%", mt: 10, width: "100%" }}
              color="inherit"
              variant="h5"
              component="h1"
            >
              Order is empty
            </Typography>
          </Box>
        )}
      </Table>
    </TableContainer>
  );
};

export default OrderHistory;
