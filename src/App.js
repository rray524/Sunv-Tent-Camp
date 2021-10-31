import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyBucket from './Pages/MyBucket/MyBucket';
import MyOrders from './Pages/MyOrders/MyOrders';
import AddCamp from './Pages/AddCamp/AddCamp';
import NotFound from './Pages/NotFound/NotFound';
import WayToStay from './Pages/WayToStay/WayToStay';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="main-container">
      <AuthProvider>
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
            <PrivateRoute path="/bucket">
              <MyBucket></MyBucket>
            </PrivateRoute>
            <PrivateRoute path="/manage">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/camp">
              <AddCamp></AddCamp>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
