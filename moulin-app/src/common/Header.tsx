import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router";

const Header = () => {
    return (
        <>
            <AppBar
                position="static"
                color={"default"}
            >
                <Toolbar>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        gap: "20px"
                    }}>
                        <Link to="/historique">Historique</Link>
                        <Link to="/projet">Projet</Link>
                        <Link to="/travaux">Travaux</Link>
                    </div>
                </Toolbar>
            </AppBar>
            <br/>
        </>
    )
}

export default Header;