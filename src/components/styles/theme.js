import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#BBDEFB', 
    },
    secondary: {
      main: '#29B6F6', 
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '--TextField-brandBorderColor': '#2271D1',
          '--TextField-brandBorderHoverColor': '#29B6F6',
          '--TextField-brandBorderFocusedColor': '#BBDEFB',
          '--TextField-brandTextColor': '#F06292',
          '--TextField-brandTextHoverColor': '#000000',
          '--TextField-brandLabelColor': '#BBDEFB',
          '& "label.Mui-focused"': {
            color: 'var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
    MuiInputLabel: {
        styleOverrides: {
          root: {
            color: 'var(--TextField-brandLabelColor)',
        },
    },
  },
    MuiInputBase: {
        styleOverrides: {
          input: {
            color: '#F5F5F5',
          },
        },
      },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--TextField-brandBorderHoverColor)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
  },
});

export default customTheme;
