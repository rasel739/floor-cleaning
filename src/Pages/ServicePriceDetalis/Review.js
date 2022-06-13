import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { useSelector } from "react-redux";
import PaymentTitle from "../ComonComponent/PaymentTitle";

const Review = () => {
  const { userAdressData } = useSelector((state) => state.servicePriceReducer);

  const {
    title,
    price,
    address1,
    address2,
    city,
    country,
    firstName,
    lastName,
    email,
    state,
    zip,
  } = userAdressData;

  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    createData("Service Name", title),
    createData("Price", "$" + price),
    createData("User Name", `${firstName} ${lastName}`),
    createData("Email", email),
    createData("Address", `${address1} ${address2}`),
    createData("City", city),
    createData("Country", country),
    createData("State", state),
    createData("Zip Code", zip),
  ];

  return (
    <Container maxWidth="xl">
      <Container>
        <TableContainer
          component={Paper}
          sx={{ bgcolor: "#1D3D47", color: "#fff" }}
        >
          <PaymentTitle title="Order Review" />
          <Table
            sx={{ minWidth: 50, bgcolor: "#1D3D47" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Name</TableCell>
                <TableCell align="right" sx={{ color: "#fff" }}>
                  Value
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                >
                  <TableCell component="th" scope="row" sx={{ color: "#fff" }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="right" sx={{ color: "#fff" }}>
                    {row.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Container>
  );
};

export default Review;
