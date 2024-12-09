import { useState, useEffect } from "react"
import { fetchAllPlayers } from "../API"
import PlayerCard from "./PlayerCard";


export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const getPlayers = async () => {
            const playersData = await fetchAllPlayers();
            setPlayers(playersData);
        };

        getPlayers();
    }, []);

    const filteredPlayers = players.filter(
        player => player.name.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div className="home">
            <div className="search">
                <label>Search:
                    <input type="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </label>
            </div>
            <div className="allplayers">
                {filteredPlayers.length ? (filteredPlayers.map((player) => (
                    <PlayerCard
                        key={player.id}
                        id={player.id}
                        name={player.name}
                        breed={player.breed}
                        status={player.status}
                        imageUrl={player.imageUrl}
                        players={players}
                        setPlayers={setPlayers}
                    />
                ))
                ) : (
                    <p>No players match your search</p>
                )}
            </div>
        </div>
    )
}