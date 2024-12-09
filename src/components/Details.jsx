import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../API";

export default function Details() {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        const getPlayerDetails = async () => {
            const playerData = await fetchSinglePlayer(id);
            setPlayer(playerData);
        };
        getPlayerDetails();
    }, [id]);

    if (!player){
        return <p>Loading player details...</p>;
    }

    return(
    <div className="player-details">
        <img src={player.imageUrl} alt={player.name} />
        <h2>{player.name}</h2>
        <p>ID: {player.id}</p>
        <p>Team ID: {player.teamId}</p>
        <p>Breed: {player.breed}</p>
        <p>Status: {player.status}</p>
    </div>
    )
}