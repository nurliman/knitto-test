import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Switch>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="/karyawan">Karyawan</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
