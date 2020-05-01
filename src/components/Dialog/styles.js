import { makeStyles } from "@material-ui/core/styles";

const DialogStyles = makeStyles((theme) => ({
  img: {
    height: "25vh",
    width: "25wh",
  },

  paperContainer: {
    padding: "5px",
    maxWidth: "100%",
  },

  title: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0 0 5px 10px",
    paddingBottom: "5px",
    borderBottom: `2px solid ${theme.palette.divider}`,
    color: "#650000",
  },

  subtitles: {
    fontSize: "14px",
    margin: "0 0 5px 20px",
    paddingBottom: "5px",
  },

  ingredientsContainer: {
    display: "flex",
  },

  button: {
    color: "#fff",
    background: "#e02041",
  },
}));

export default DialogStyles;
