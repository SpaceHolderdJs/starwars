import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/">main</Link>
          <Link to="/people">peole</Link>
          <Link to="/starships">starships</Link>
          <Link to="/planets">planets</Link>
        </header>

        <Switch>
          <Route path="/" exact>
            <h1>Main</h1>
          </Route>
          <Route path="/people">
            <h1>People</h1>
          </Route>
          <Route path="/starships">
            <h1>Starships</h1>
          </Route>
          <Route path="/planets">
            <h1>Planets</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
