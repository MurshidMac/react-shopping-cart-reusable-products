import React from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import DetailsPage from './components/DetailsPage';
import ErrorPage from './components/ErrorPage'

function App() {
  return (
    <React.Fragment>
       <Navbar></Navbar>
       <Switch>
          <Route path="/" component={ProductList} exact></Route>
          <Route path="/details" component={DetailsPage} ></Route>
          <Route path="/store" component={CartPage} ></Route>
          <Route component={ErrorPage}></Route>
       </Switch>
    </React.Fragment>
  );
}

export default App;
