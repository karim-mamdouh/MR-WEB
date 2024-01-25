import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./common/styles/theme";
import AppRoute from "./common/routes/Route";
import { ScrollToTop } from "./common/components/ScrollToTop/ScrollToTop";
import AlertProvider from "./components/Atoms/Alerts/ToastifyAlert";
const App = () => {
  const custom_theme = theme;

  return (
    <ThemeProvider theme={custom_theme}>
      <AlertProvider>
        <ScrollToTop />

        <AppRoute />
      </AlertProvider>
    </ThemeProvider>
  );
};
export default App;
