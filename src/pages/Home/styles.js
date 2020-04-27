import { makeStyles } from "@material-ui/core/styles";

const HomeStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    maxWidth: '1180px',
    padding: '0 30px',
    margin: '32px auto'
  },
  paper: {
    marginTop: '20px',
    marginBottom: '20px'
  },
  paperTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    padding: '5px'
  },
  paperDescription: {
    paddingLeft: '20px',
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingBottom: '10px',
  }
}));

export default HomeStyles;
