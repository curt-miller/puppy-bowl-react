import React, { useEffect, useState } from "react";

export default function DetailsPane({player, onClose}) {

    if (!player){
        return <p>Loading player details...</p>;
    }

// I used onEffect but then I got rid of it when I changed details to a pane that slides in

    return(
    <div>
        <img src={player.imageUrl} alt={player.name} />
        <h2>{player.name}</h2>
        <p>ID: {player.id}</p>
        <p>Team ID: {player.teamId}</p>
        <p>Breed: {player.breed}</p>
        <p>Status: {player.status}</p>
        <button className="close-button" onClick={onClose}>Collapse Details
        </button>
    </div>
    )
}