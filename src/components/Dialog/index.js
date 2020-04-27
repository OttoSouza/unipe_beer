import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { IconButton, InputAdornment, makeStyles } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width: '100%'
  },
  img: {
    height: '30vh',
    width: '30wh',
  }
}));

export default function Details({ beer }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [oneBeer] = useState({
    name: beer.name,
    description: beer.description,
    tagline: beer.tagline,
    first_brewed: beer.first_brewed,
    yeast: beer.ingredients.yeast,
    imagem: beer.image_url,
  })

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleClickOpen}>
        <MoreHorizIcon style={{ color: "#e02041" }} />
      </IconButton>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle style={{ textAlign: 'center' }}><img className={classes.img} src={oneBeer.imagem} alt={oneBeer.name} /></DialogTitle>
        <DialogContent>
          <DialogContentText>
            {oneBeer.description}
          </DialogContentText>
          <TextField
            className={classes.margin}
            label='Name'
            placeholder={oneBeer.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={classes.margin}
            label='TagLine'
            placeholder={oneBeer.tagline}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={classes.margin}
            label='First Brewed'
            placeholder={oneBeer.first_brewed}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={classes.margin}
            label='Yeast'
            placeholder={oneBeer.yeast}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
