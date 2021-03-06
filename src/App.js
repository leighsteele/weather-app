import React from "react";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import WeatherPage from "./pages/Weather";
import FavoritesPage from "./pages/Favorites";

function App() {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={WeatherPage} />
          <Route path="/favorites" component={FavoritesPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
