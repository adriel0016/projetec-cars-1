import { ThemeProvider, createTheme } from "@mui/material";
import "./App.scss";
import Homepage from "./pages/Homepage/Homepage";
import { useEffect, useState } from "react";
import { StyleProvider } from "./providers/StyleProvider";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1c69d4',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyleProvider>
        <Homepage />
      </StyleProvider>
    </ThemeProvider>
  );
}

export default App;
