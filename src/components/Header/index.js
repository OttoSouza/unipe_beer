import React from "react";
import logo from '../../assets/beer.png'
import { Grid, IconButton } from "@material-ui/core";
import { IoMdInformationCircleOutline, IoMdBeer, IoMdHome } from "react-icons/io";
import { Link, useHistory } from "react-router-dom";

import HeaderStyles from "./styles";
export default function Header() {

  const history = useHistory();

  function handleBeer() {
    history.push("/beers");
  }

  const classes = HeaderStyles()
  return (
    <Grid container justify='space-around' alignItems='center'>
      <Grid item >
        <img src={logo} alt='beer' />
      </Grid>
      <Grid item >
        <IconButton component={Link} to='/'>
          <IoMdHome className={classes.homeIcon} />
        </IconButton>
        <IconButton onClick={handleBeer}>
          <IoMdBeer className={classes.beerIcon} />
        </IconButton>
        <IconButton component={Link} to='/about'>
          <IoMdInformationCircleOutline className={classes.aboutIcon} />
        </IconButton>
      </Grid>
    </Grid>
  );
}
