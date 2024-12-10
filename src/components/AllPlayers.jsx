import { useState, useEffect } from "react"
import { fetchAllPlayers } from "../API"
import PlayerCard from "./PlayerCard";
import DetailsPane from "./DetailsPane";


export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    useEffect(() => {
        const getPlayers = async () => {
            const playersData = await fetchAllPlayers();
            setPlayers(playersData);
        };

        
        getPlayers();
    }, []);

    const handleSelectedPlayer = (player) => {
        setSelectedPlayer(player);
    }

    const handleCloseDetails = () => {
        setSelectedPlayer(null);
    }

    const filteredPlayers = players.filter(
        player => player.name.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div className="home">
            <div className="title">
                <h1>Welcome to Puppy Bowl LIX</h1>
                <h2>View our roster of athletes below</h2>
            </div>
            <div className="search">
                <label>Search for a Player:
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
                        players={players}
                        name={player.name}
                        breed={player.breed}
                        status={player.status}
                        imageUrl={player.imageUrl}
                        setPlayers={setPlayers}
                        onSelect={() => handleSelectedPlayer(player)}
                    />
                ))
                ) : (
                    <p>No players match your search</p>
                )}

                {selectedPlayer &&
                (
                    <div
                        className={`details-pane ${selectedPlayer ? 'active' : ''}`}>
                        <DetailsPane player={selectedPlayer} onClose={handleCloseDetails} />
                    </div>
                )}
            </div>
        </div>
    )
}