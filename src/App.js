import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import Header from './components/Header'
import LandingPage from './components/LandingPage';
import BuySomething from './components/BuySomething';
import SellSomething from './components/SellSomething';
import MyBasket from './components/MyBasket'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Header />
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/buy'>
          <BuySomething />
        </Route>
        <Route exact path='/sell'>
          <SellSomething />
        </Route>
        <Route exact path='/basket'>
          <MyBasket />
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
