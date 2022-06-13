import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import React from "react";
import { useSelector } from "react-redux";
import useFirebase from "../hooks/useFirebase";
import PaymentTitle from "../Pages/ComonComponent/PaymentTitle";

const Profile = () => {
  const { user } = useFirebase();

  const { userAdressData } = useSelector((state) => state.servicePriceReducer);

  const { address1, address2, city, country, email, state, zip } =
    userAdressData;

  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    createData("Address", `${address1} ${address2}`),
    createData("City", city),
    createData("Country", country),
    createData("State", state),
    createData("Zip Code", zip),
  ];

  return (
    <Container maxWidth="xl">
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={user?.photoURL}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Name: {user?.displayName}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    Email: {user?.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hi, {user?.displayName}. Thank you for joining our company
                    and service. We strive to provide an outstanding service for
                    you
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              {email ? (
                <TableContainer
                  component={Paper}
                  sx={{ bgcolor: "#1D3D47", color: "#fff" }}
                >
                  <PaymentTitle title="Your Information" />
                  <Table
                    sx={{ minWidth: 50, bgcolor: "#0094" }}
                    aria-label="simple table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ color: "#fff" }}>Name</TableCell>
                        <TableCell align="right" sx={{ color: "#fff" }}>
                          Property
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
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ color: "#fff" }}
                          >
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
              ) : (
                "Your Information is Empty"
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default Profile;
