import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";

export default function Player({ match }) {
  // Declares the person ID as the match which is being destrctured from BrowserRouter via props.
  const {
    params: { playerId },
  } = match;

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const response = await axios.get(
        `https://www.balldontlie.io/api/v1/players/${playerId}`
      );
      console.log(response.data);
      setPlayers(response.data);
    };
    getPlayers();
  }, []);
  return (
    <h1>
      {players.first_name} {players.last_name}
    </h1>
  );
}
