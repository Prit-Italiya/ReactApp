import React from 'react';
import ReactDom from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Welcome from "./components/Welcome/Welcome";
import "../src/assets/main.css"

const App = () => {
    return(
        <React.Fragment>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
