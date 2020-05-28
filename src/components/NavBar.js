import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
/**
import Link from '@material-ui/core/Link'
**/
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
<<<<<<< HEAD
      justifyContent: 'space-between'
  },
  navLink: {
      color: 'white',
      textTransform: 'capitalize',
  },
  btn: {
      color: 'white !important' ,
=======
    justifyContent: "space-between"
  },
  logoLink: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold"
>>>>>>> 735b67ac1a29c219da92b44246d29f811217d4d8
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}> 
<<<<<<< HEAD
            <Typography variant="h6">
              <Link href='/' style={{color: 'white', textDecoration: 'none'}}>Torch</Link>
=======
          <Typography variant="h6">
            <Link className={classes.logoLink} to="/">
              Torch
            </Link>
    /**
>>>>>>> 735b67ac1a29c219da92b44246d29f811217d4d8
            </Typography>
            <div>
            <Link href='/blog'><Button className={classes.btn}>Blog</Button></Link>
            <Link href='/chat'><Button className={classes.btn}>Chat</Button></Link>
            <Link href='/'><Button className={classes.btn}>Facebook</Button></Link>
            {props.auth === true ? <Button color="inherit" onClick={props.handleLogout}>Logout</Button> : [
                <Link href='/login' ><Button className={classes.btn} color="inherit">Login</Button></Link>,
                <Link href='/signup' ><Button className={classes.btn} color="inherit">Signup</Button></Link>]
                }
            </div>
            </Link>
          </Typography>
          **/
        </Toolbar>
      </AppBar>
    </div>
  );
}
