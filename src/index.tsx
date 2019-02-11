import * as ReactDOM from "react-dom";
import * as React from "react";
import { Provider } from "react-redux";

import App from "./App";
import store from './store';
import * as a from './store/actions'; 

const id = document.querySelector("#app");

const WithProvider = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

ReactDOM.render(<WithProvider />, id);
