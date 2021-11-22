import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-browser-router";
import "./App.css";
import Home from "./components/Home";
import Player from "./components/Player";

export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/player/:playerId" component={Player} />
      </div>
    </Router>
  );
}
