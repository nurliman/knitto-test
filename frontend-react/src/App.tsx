import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/karyawan">
          Karyawan
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
