import './App.css';
import Welcome from './components/welcome/Welcome.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/notFound/NotFound.js';
  

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <Welcome {...props} name="User" />} />
          <Route path="/welcome/:name" component={Welcome} />
          <Route><NotFound /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
