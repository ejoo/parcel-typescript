import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Todos from './components/Todos';
import Posts from './containers/Posts';
import Home from './containers/Home';
import About from './containers/About';
import Services from './containers/Services';
import Nav from './components/Nav';
export default () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Nav />
          <Route path='/about' component={About} />
          <Route path='/posts' component={Posts} />
          <Route path='/services' component={Services} />
          <Route exact path='/' component={Home} />
        </div>
        
      </BrowserRouter>

    </div>

  );
  
};
