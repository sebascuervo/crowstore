import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Products from "./Components/Products/Products";

function App() {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${search}&limit=10`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [search]);

  return (
    <Router>
      <div className="app">
        <NavBar setSearch={setSearch} />
        <Switch>
          <Route path="/products">
            <Products data={data} />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
