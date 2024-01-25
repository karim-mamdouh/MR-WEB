import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontWeight: 500,
      color: "#333",
    },
    h2: {
      fontWeight: 700,
      color: "#333",
    },
    h3: {
      fontWeight: 600,
      color: "#333",
    },
    h4: {
      fontWeight: 500,
      color: "#333",
    },
    p: {
      fontFamily: "Arial, sans-serif",
      fontWeight: 400,
    },
    button: {
      fontFamily: "Arial, sans-serif",
      textTransform: "none",
      boxShadow: 0,
      margin: 0,
    },
  },
  palette: {
    primary: {
      main: "#344C68",
    },
    secondary: {
      main: "#66C8CE",
    },
  },
  theme_palette: {
    primaryColor: "#344C68",
    secondaryColor: "#66C8CE",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "fill" },
          style: {
            "&.Mui-disabled": {
              background: "#E9E9E9",
              color: "#6E7A8A",
            },
            fontSize: "20px",
            color: "#fff",
            fontWeight: 500,
            borderRadius: "0",
            backgroundColor: "#0de3e6",
            height: "fit-content",
            lineHeight: "inherit",
            ":hover": {
              backgroundColor: "#3898ec",
            },
          },
        },
      ],
    },
  },
});
