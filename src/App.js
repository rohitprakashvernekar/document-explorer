import React from "react";
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Heading from "./component/Heading";
import Content from "./component/Content";
import Leftpanel from "./component/Leftpanel";
import Home from './component/Home';
import "./App.css";
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
      <div className="Header">
        <Heading />
      </div>
      <div className="main">
        <Leftpanel />
        <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/:topdirectory" component={Content}/>
          </Switch> 
      </div>
    </div>
  );
}

export default App;
