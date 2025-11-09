import { AppBar, Toolbar, useTheme } from "@mui/material";
import { Link } from "react-router";

const Header = () => {
    return (
        <>
            <AppBar
                position="static"
                style={{
                    backgroundColor: "whitesmoke", 
                }}
            >
                <Toolbar>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        gap: "20px",

                    }}>
                        <Link to="/historique">Historique</Link>
                        <Link to="/projet">Projet</Link>
                        <Link to="/travaux">Travaux</Link>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;