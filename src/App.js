import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    //Basic app starter page.
    <div className="App">
      <Router>
        <Switch>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
