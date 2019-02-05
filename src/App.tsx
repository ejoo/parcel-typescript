import * as React from "react";
import Todos from './components/Todos';

import Forms from './components/Forms'
import Header from './components/Header'

export default () => {
  return (
    <div>
      <h1>Day 3</h1>
      <Header Todos={Todos}>
        <p>Facebook</p>
        <p>Google</p>
        <p>Twitter</p>

      </Header>

    </div>

  );
  
};
