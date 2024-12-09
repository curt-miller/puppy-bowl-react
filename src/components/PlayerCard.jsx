import React from "react";
import { useNavigate } from "react-router-dom";
import { removePlayer } from "../API";

export default function PlayerCard({ id, name, breed, status, imageUrl, players, setPlayers }) {
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/players/${id}`);
    }

    const handleRemove = async () => {
        const result = await removePlayer(id);
        if (result) {
            console.log("succesfully removed", { id });
            const updatedPlayers = players.filter(player => player.id !== id);
            setPlayers(updatedPlayers);
        } else {
            console.error("failed to remove player");
        }
    }

    return (
        <div className="player-card">
            <img src={imageUrl} alt={name} />
            <h2>{name}</h2>
            <p>Breed: {breed}</p>
            <p>Status: {status}</p>
            <button onClick={handleRemove}>Remove Player</button>
            <button onClick={handleDetails}>Expand Details</button>
        </div>
    )
}