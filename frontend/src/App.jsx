import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import '@fontsource/poppins';
import './styles/global.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3B71F3',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h3: {
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  spacing: 8,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ 
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Routes>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/" element={<SignInPage />} /> {/* Default route */}
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;