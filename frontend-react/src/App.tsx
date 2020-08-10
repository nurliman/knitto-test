import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Karyawan from "./components/Karyawan";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="main-container">
        <Switch>
          <Route path="/" exact>
            <h4>Home</h4>
          </Route>
          <Route path="/karyawan" component={Karyawan} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
