import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '*': {
            margin: 0,
            padding: 0
          },
          body: {
            color: "var(--dark)",
            backgroundColor: "var(--white)",
            minHeight: "100vh",
            fontFamily: 'Roboto, sans-serif',
          },
          html: {
            fontSize: '10px'
          },
          '.darkBackground': {
            
          },
          ':root': {
            '--dark': '#2F4F4F',
            '--white': 'white',
            '--yellow': '#FFD700'
        }
        }
      }
    }
  })