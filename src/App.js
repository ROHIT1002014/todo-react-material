import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme/index';
import Routes from './routes/index';
import NotificationSnackbar from './components/NotificationSnackbar';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <header className="App-header">
            <NotificationSnackbar />
            <Routes />
          </header>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
