import React from "react"
import { useState } from "react"
import { addNewPlayer } from "../API"
import { useNavigate } from "react-router-dom";


export default function NewPlayerForm() {

    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const newPuppy = {
            name,
            breed,
            imageUrl,
        };

        addNewPlayer(newPuppy);

        setName("");
        setBreed("");
        setImageUrl("");

        setSuccessMessage(`We've added ${newPuppy.name} to the roster!`)

        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    return (
        <div className="newplayerform">
            <form>
                <label>Player Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>Player Breed:
                    <input
                        type="text"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                    />
                </label>
                <label>Image URL:
                    <input type="text"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)} />
                </label>
            </form>
            <button onClick={handleSubmit}>Submit</button>
            {successMessage && <p>{successMessage}</p>}
        </div>
    )
}