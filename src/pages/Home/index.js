import React from "react";
import Header from "../../components/Header";
import { Paper, Typography, Link } from "@material-ui/core";
import HomeStyles from './styles.js'
import TableDependicies from "../../components/TableDependencies";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";

export default function Home() {

  const classes = HomeStyles();
  return (

    <MainContainer>
      <Header />
      <Paper className={classes.paper} >
        <Typography className={classes.paperTitle}>What's it?</Typography>
        <Typography className={classes.paperDescription}>This's a small project about basic concepts of JavaScript and ReactJs. 
        <Link href='/beers'> Start here</Link> or click on the beer button above.</Typography>
      </Paper>

      <Paper className={classes.paper} >
        <Typography className={classes.paperTitle}>Dependencies</Typography>
        <Typography className={classes.paperDescription} > Some dependencies used in this project.</Typography>
        <TableDependicies />
      </Paper>

      <Paper className={classes.paper} >
        <Typography className={classes.paperTitle}>Api</Typography>
        <Typography className={classes.paperDescription}>
          We used this api <Link href="https://punkapi.com/documentation/v2">Ckeck it out.</Link>
        </Typography>
      </Paper>
      <Footer />
    </MainContainer>
  );
}
