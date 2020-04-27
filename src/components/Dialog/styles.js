import { makeStyles } from "@material-ui/core/styles";

const DialogStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width: '100%'
  },
  img: {
    height: '30vh',
    width: '30wh',
  },
  paperContainer : {
    padding: '10px'
  },

  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginLeft: '10px',
    marginBottom: '5px'
  },

  subtitles: {
    fontSize: '15px',
    marginLeft: '20px',
    marginBottom: '5px'
  }
}));

export default DialogStyles;
