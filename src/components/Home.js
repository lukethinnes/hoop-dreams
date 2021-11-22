import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-browser-router";
import "../App.css";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getPlayers = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://www.balldontlie.io/api/v1/players"
      );
      console.log(response.data.data);
      setPlayers(response.data.data);
      setLoading(false);
    };
    getPlayers();
  }, []);
  return (
    <>
      <div className="App">
        <h1>BALL DONT LIE</h1>
        <img
          className="ballin"
          src="https://clipartart.com/images/basketball-ball-over-court-clipart-15.gif"
          alt="ballin"
        />
        <h4>Select your legend:</h4>
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Name..."
          type="text"
        />
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          players
            .filter((player) => {
              if (search === "") {
                return player;
              } else if (
                player.first_name.toLowerCase().includes(search.toLowerCase())
              ) {
                return player;
              }
            })
            .map((player) => {
              return (
                <h4>
                  <Link to="/{player.id}">
                    {player.first_name} {player.last_name}
                  </Link>
                </h4>
              );
            })
        )}
      </div>
    </>
  );
}
