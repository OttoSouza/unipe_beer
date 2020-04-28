import React from 'react';
import MainContainer from '../../components/MainContainer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutStyles from '../../pages/About/styles';
import { Paper, Typography } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SchoolIcon from '@material-ui/icons/School';
// import { Container } from './styles';

export default function About() {
  const classes = AboutStyles();
  return (
    <MainContainer>
      <Header />
      <div className={classes.paperContainer}>

        <Paper className={classes.paper}>
          <Typography className={classes.principal}>
            This project was developed in order to encourage students to practice more!!
        </Typography>

        </Paper>

        <Paper className={classes.paper}>
          <Typography className={classes.title}>
            Student
        </Typography>
          <Typography className={classes.subtitles}>
            <PersonOutlineIcon className={classes.icon} /> Otto de Souza Quinho Terceiro Neto
          </Typography>
          <Typography className={classes.subtitles}>
            <MailOutlineIcon className={classes.icon} /> ottos.developer@gmail.com
        </Typography>
        </Paper>

        <Paper className={classes.paper}>
          <Typography className={classes.title}>Instructor</Typography>
          <Typography className={classes.subtitles}>
            <PersonOutlineIcon className={classes.icon} /> Nelio Frazac
          </Typography>

        </Paper>
        <Paper className={classes.paper}>
          <Typography className={classes.title}>
            College
        </Typography>
          <Typography className={classes.subtitles}>
            <SchoolIcon className={classes.icon} /> Unipe - PostGraduate
        </Typography>

        </Paper>
      </div>
      <Footer />
    </MainContainer>
  );
}
