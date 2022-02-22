import React from 'react'

import {Switch , Route} from "react-router-dom";

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Products from '../pages/Products';
import Cart from '../pages/Cart';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalog/:slug"  component={Products} />
      <Route path="/catalog"  component={Catalog} />
      <Route path="/cart"  component={Cart} />
    </Switch>
  )
}

export default Routes   