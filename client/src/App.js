import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cover from "./pages/Cover/Cover";

// import Card from "./components/Card/Card";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Cover} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
