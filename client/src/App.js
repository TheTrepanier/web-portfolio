import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PersonalInfo from "./pages/PersonalInfo/PersonalInfo"
import Cover from "./pages/Cover/Cover";
import NoMatch from "./pages/NoMatch";

// import Card from "./components/Card/Card";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <PersonalInfo />
          <div className="col ml-5">
            <Switch>
              <Route exact path="/" component={Cover} />
              {/* No Match */}
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
