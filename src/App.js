import React from "react";
import "./App.css";
import {
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import orange from "@material-ui/core/colors/deepOrange";

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import Chat from './components/Chat';
import Signup from './components/Signup';
import Login from './components/Login';

import { auth } from './services/firebase';
const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
  status: {
    danger: "orange",
  },
});
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      authenticated: false,
      loading : false,
    }
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        })
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        })
      }
    })
  }
  render() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        {this.state.loading === true ? <h2>Loading...</h2> : (
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}></Route>
             <PrivateRoute
              path="/chat"
              authenticated={this.state.authenticated}
              component={Chat}
            ></PrivateRoute>
            <PublicRoute
              path="/signup"
              authenticated={this.state.authenticated}
              component={Signup}
            ></PublicRoute>
            <PublicRoute
              path="/login"
              authenticated={this.state.authenticated}
              component={Login}
            ></PublicRoute>
          </Switch>
        </Router>
        )}
      </ThemeProvider>
    </div>
  );
}
}

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/chat" />
        )
      }
    />
  );
}

export default App;
