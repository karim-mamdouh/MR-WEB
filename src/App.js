import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./common/styles/theme";
import AppRoute from "./common/routes/Route";
const App = () => {
  const custom_theme = theme;

  return (
    <ThemeProvider theme={custom_theme}>
      <AppRoute />
    </ThemeProvider>
  );
};
export default App;
