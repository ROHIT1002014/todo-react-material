import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import LoginView from './views/auth/LoginView';
import RegistrationView from './views/auth/RegistrationView';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme/index';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <header className="App-header">
            {/* <Navbar /> */}
            <Switch>
              <Route exact path='/' component={Home} />
              {/* <Route path='/about' component={About} /> */}
              <Route path='/login' component={LoginView} />
              <Route path='/registration' component={RegistrationView} />
              {/* <Route path='/:post_id' component={Post} /> */}
            </Switch>
          </header>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
