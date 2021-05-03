import React from "react";
import { Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Form from "./components/Form/Form";
import CardDetail from "./components/CardDetail/CardDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={NavBar} />
      <Route path="/home" component={Home} />
      <Route path="/activity" component={Form} />
      <Route path="/detail/:id" component={CardDetail} />
    </div>
  );
}

export default App;
