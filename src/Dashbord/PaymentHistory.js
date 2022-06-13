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

const PaymentHistory = () => {
  const { userOrderArray } = useSelector((state) => state.servicePriceReducer);

  console.log(userOrderArray);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Transitions Id</TableCell>
            <TableCell align="center">Card Brand</TableCell>
            <TableCell align="center">Date and Time</TableCell>
            <TableCell align="center">Card Last Number</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        {userOrderArray?.[0]?.email ? (
          <TableBody>
            {userOrderArray
              .slice(0)
              .reverse()
              .map((paymentHistory, index) => (
                <TableRow
                  key={paymentHistory._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    <span style={{ fontWeight: "bold" }}>
                      {"("}
                      {index + 1}
                      {")"}
                    </span>{" "}
                    {paymentHistory.transitions.slice(0, 34)}
                  </TableCell>
                  <TableCell align="center">
                    {paymentHistory.cardBrand}
                  </TableCell>
                  <TableCell align="center">{paymentHistory.time}</TableCell>

                  <TableCell align="center">
                    {paymentHistory.cardLastNumber}
                  </TableCell>
                  <TableCell align="center">
                    ${paymentHistory.amount / 100}
                  </TableCell>
                  <TableCell align="center" sx={{ color: "green" }}>
                    {paymentHistory.status}
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

export default PaymentHistory;
