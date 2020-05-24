import React from "react";
import "./App.css";
import {
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import orange from "@material-ui/core/colors/deepOrange";

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Blog from "./components/Blog";

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
  status: {
    danger: "orange",
  },
});

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/blog">
            <ThemeProvider theme={theme}>
              <NavBar />
              <Blog />
            </ThemeProvider>
          </Route>
          <Route path="/register">
            <ThemeProvider theme={theme}>
              <NavBar />
              <Registration />
            </ThemeProvider>
          </Route>
          <Route path="/login">
            <ThemeProvider theme={theme}>
              <NavBar />
            </ThemeProvider>
            <Login />
          </Route>
          <Route path="/">
            <ThemeProvider theme={theme}>
              <NavBar />
              <Landing />
            </ThemeProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
