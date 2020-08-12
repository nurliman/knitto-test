import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Karyawan from "./components/Karyawan";
import EmploymentApplication from "./components/EmploymentApplication";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div className="main-container">
        <Switch>
          <Route path="/" exact component={EmploymentApplication} />
          <Route path="/karyawan" component={Karyawan} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
