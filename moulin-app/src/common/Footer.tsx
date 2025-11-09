import { useTheme } from "@mui/material";

const Footer = () => {
    const theme = useTheme();

    return (
        <div
            style={{
                backgroundColor: theme.palette.secondary.main,
                color: "white",
                display: "block",
                width: "100%",
                left: 0,
                bottom: 0,

            }}>
            <h3>Partenaires | Contact | Carte</h3>
        </div>
    )
}

export default Footer;

