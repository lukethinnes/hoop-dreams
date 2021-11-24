import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";

export default function Player({ match }) {
  // Declares the person ID as the match which is being destrctured from BrowserRouter via props.
  const {
    params: { playerId },
  } = match;

  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const response = await axios.get(
        `http://www.balldontlie.io/api/v1/players/${playerId}`
      );
      console.log(Object.values(response.data.team)[1]);
      setPlayer(response.data);
    };
    getPlayers();
  }, []);
  return (
    <div className="App">
      <h1>
        {player.first_name} {player.last_name}
      </h1>
      <h2>Player Stats:</h2>
      <h3>Position: {player.position}</h3>
      <h3>City: {Object.values(player.team)[1]}</h3>
      <h3>Team Name:: {Object.values(player.team)[6]}</h3>
    </div>
  );
}
