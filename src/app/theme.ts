"use client"
import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1a237e", // Azul marinho escuro
      light: "#3f51b5",
      dark: "#000051",
    },
    secondary: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#cccccc",
    },
    background: {
      default: "#000000",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#cccccc",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontSize: "1rem",
          fontWeight: 600,
          padding: "12px 32px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          border: "1px solid #333",
        },
      },
    },
  },
})
