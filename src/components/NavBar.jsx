import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav id="navbar">
            <Link className="links" to="/">View All Players</Link>
            <Link className="links" to="/newplayer">Submit a New Player</Link>
        </nav>
    )
}