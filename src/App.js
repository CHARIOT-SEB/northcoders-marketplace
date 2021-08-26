import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import BuySomething from './components/BuySomething';
import SellSomething from './components/SellSomething';
import MyBasket from './components/MyBasket';
import { useState } from 'react';

function App() {
  const [basket, setBasket] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Header />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/buy">
            <BuySomething setBasket={setBasket} basket={basket} />
          </Route>
          <Route exact path="/sell">
            <SellSomething />
          </Route>
          <Route exact path="/basket">
            <MyBasket setBasket={setBasket} basket={basket} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
