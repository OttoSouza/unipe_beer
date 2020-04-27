import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { IconButton, Paper, Typography } from '@material-ui/core';
import DialogStyles from './styles';



export default function Details({ beer }) {
  const classes = DialogStyles();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const malts = beer.ingredients.malt.map((malt, index) => (
    <React.Fragment key={index}>
      <Typography className={classes.subtitles}>{malt.name}</Typography>
      <Typography className={classes.subtitles}>{malt.amount.value} {malt.amount.unit}</Typography>
    </React.Fragment>
  ))

  const hops = beer.ingredients.hops.map((hops, index) => (
    <React.Fragment key={index}>
      <Typography className={classes.subtitles}>{hops.name}</Typography>
      <Typography className={classes.subtitles}>{hops.amount.value} {hops.amount.unit}</Typography>
      <Typography className={classes.subtitles}>{hops.add} </Typography>
      <Typography className={classes.subtitles}>{hops.attribute} </Typography>
    </React.Fragment>
  ))

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <>
      <IconButton color="inherit" onClick={handleClickOpen('paper')}>
        <MoreHorizIcon style={{ color: "#e02041" }} />
      </IconButton>
      <Dialog open={open} onClose={handleClose} scroll={scroll}>
        <DialogTitle style={{ textAlign: 'center' }}><img className={classes.img} src={beer.image_url} alt={beer.name} /></DialogTitle>
        <DialogContent>
          <DialogContentText>
            {beer.description}
          </DialogContentText>
          <Paper className={classes.paperContainer}>
            <Typography className={classes.title}>Basic Informations</Typography>
            <Typography className={classes.subtitles}> <strong>Name</strong> {beer.name}</Typography>
            <Typography className={classes.subtitles}> <strong>TagLine</strong> {beer.tagline}</Typography>
            <Typography className={classes.subtitles}> <strong>First Brewed</strong> {beer.first_brewed}</Typography>
            <Typography className={classes.title}>Malts</Typography>
            {malts}
            <Typography className={classes.title}>Holps</Typography>
            {hops}
            <Typography className={classes.subtitles}>{beer.ingredients.yeast}</Typography>
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
