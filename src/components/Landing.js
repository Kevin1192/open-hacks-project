import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NavBar from './NavBar';
import LandingImg from "../img/undraw_Group_chat_unwm.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    margin: "100px auto",
  },
  img: {
    width: "400px",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 50px",
  },
  btn: {
    width: "100px",
    backgroundColor: "black",
    margin: "10px",
    borderRadius: "100px",
  },
  text1: {
    textTransform: "capitalize",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  text2: {
    textTransform: "capitalize",
    background:
      "linear-gradient(-45deg, rgba(208, 163, 245), rgba(117, 19, 93));",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <NavBar />
      <div className={classes.left}>
        <Typography className={classes.text1} variant="h5">
          Helping students connect with professionals working in the tech
          industry.
        </Typography>
        <Typography className={classes.text2} variant="h6">
          Join Today to Learn from the experienced.
          <br />
           Or become a torch that light others'
          future
        </Typography>
        <div>
          <Button
            color="primary"
            size="small"
            variant="contained"
            className={classes.btn}
          >
            Sign Up
          </Button>
          <Button
            color="primary"
            size="small"
            variant="contained"
            className={classes.btn}
          >
            Sign In
          </Button>
        </div>
      </div>
      <img src={LandingImg} alt="Landing" className={classes.img} />
    </div>
  );
}
