import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import WayToStay from './Pages/WayToStay/WayToStay';

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Redirect to="/" />
          </Route>
          <Route path="/way">
            <WayToStay></WayToStay>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
