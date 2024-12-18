import React from "react";
import { removePlayer } from "../API";

export default function PlayerCard({ id, name, breed, status, imageUrl, onSelect, setPlayers, players }) {

    const handleRemove = async () => {
        const result = await removePlayer(id);
        if (result) {
            console.log("succesfully removed", { id });
            const updatedPlayers = players.filter(player => player.id !== id);
            console.log(updatedPlayers);
            setPlayers(updatedPlayers);

            

            return setPlayers
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
            <button onClick={onSelect}>Expand Details</button>
        </div>
    )
}