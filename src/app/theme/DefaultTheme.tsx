'use client';
import { createTheme } from "@mui/material/styles";

const PalleteTheme = createTheme({
    palette: {
      primary: {
        main: '#EB4E4E',
        dark: "#EB0000",
        light: "rgba(235, 78, 78, 0.5)",
      },
      text:{
        primary: "#ffffff",
        secondary: "#EB0000",
      },
      background: {
        paper: "#303030",
        default: "#1f1f1f",
      },
    },
});

const DefaultTheme = createTheme({
    typography: {
        body2:{
            color: PalleteTheme.palette.text.secondary,
        }
    },
    components: {
        MuiPaper: {
            styleOverrides:{
                root:{
                    borderRadius: "25px"
                }
            }
        },
        MuiIconButton: {
            styleOverrides:{
                root: ({}) => ({
                    "&:hover": {
                        backgroundColor: "rgba(235, 78, 78, 0.25)",
                    }
                })
            }
        },
        MuiButtonBase: {
            styleOverrides:{
                root: ({}) => ({
                    "&:hover": {
                        backgroundColor: "rgba(235, 78, 78, 0.25)",
                    }
                })
            }
        }
    }
}, PalleteTheme);

export default DefaultTheme;