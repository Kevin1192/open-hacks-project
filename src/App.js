import React from "react";
import "./App.css";
import {
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import orange from "@material-ui/core/colors/deepOrange";

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
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <Landing />
      </ThemeProvider>
    </div>
  );
}

export default App;
