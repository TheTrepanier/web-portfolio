import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PersonalInfo from "./pages/PersonalInfo/PersonalInfo"
import Cover from "./pages/Cover/Cover";
import Projects from "./pages/Projects/Projects";
import NoMatch from "./pages/NoMatch";

// import Card from "./components/Card/Card";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <PersonalInfo />
          <div className="col ml-md-5 content-box">
            <Switch>
              <Route exact path="/" component={Cover} />
              <Route exact path="/projects" component={Projects} />
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
