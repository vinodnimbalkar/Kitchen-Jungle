import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddRecipie from "./components/AddRecipie";
import RecipieList from "./components/RecipieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" component={RecipieList} exact></Route>
        <Route path="/add_recipie" component={AddRecipie} exact></Route>
      </Switch>
    </div>
  );
}

export default App;
