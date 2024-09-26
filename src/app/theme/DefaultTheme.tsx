'use client';
import { createTheme } from "@mui/material/styles";

const PalleteTheme = createTheme({
    palette: {
      primary: {
        main: '#EB4E4E',
        dark: "#EB0000",
        light: "rgba(235, 78, 78, 0.25)",
      },
      text:{
        primary: "#ffffff",
        secondary: "#EB0000",
      },
      background: {
        paper: "#303030",
        default: "#454545",
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
                    borderRadius: "50px"
                }
            }
        },
        MuiIconButton: {
            styleOverrides:{
                root: ({}) => ({
                    "&:hover": {
                        backgroundColor: PalleteTheme.palette.primary.light,
                    }
                })
            }
        },
        MuiButtonBase: {
            styleOverrides:{
                root: ({}) => ({
                    "&:hover": {
                        backgroundColor: PalleteTheme.palette.primary.light,
                    }
                })
            }
        }
    }
}, PalleteTheme);

export default DefaultTheme;