import React from "react"
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableStyles from "./styles";
import Details from "../Dialog";

export default function TableBeers({ beers }) {
  const classes = TableStyles();

  const row = beers.map((beer) => (
    <TableRow key={beer.id} >
      <TableCell component="th" scope="row">
        {beer.name}
      </TableCell>
      <TableCell align="justify">{beer.description}</TableCell>
      <TableCell align="left">{beer.tagline}</TableCell>
      <TableCell align="justify">{beer.first_brewed}</TableCell>
      <TableCell align="justify">
        <Details beer={beer} />
      </TableCell>
    </TableRow>
  ));

  return (
    <Paper className={classes.paper}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>
            <TableRow>
              <TableCell >Name</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="left">TagLine</TableCell>
              <TableCell align="justify">First Brewed</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.test}>{row}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
