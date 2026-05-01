import { useTheme } from "@mui/material";

const Footer = () => {
    const theme = useTheme();

    return (
        <footer
            style={{
                backgroundColor: theme.palette.secondary.dark,
                color: theme.palette.text.secondary,
                display: "block",
                width: "100%",
                textAlign: "center",
                left: 0,
                bottom: 0,
                right: 0,
            }}>
            <div className="footerContent"
                style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                }}>
                <div className="partnersColumn">
                    <h3>Partenaires</h3>
                    <ul style={{ listStyle: "none", alignItems: "start", padding: 0, margin: 0 }}>
                        <li>Fondation du patrimoine Rhône-Alpes</li>
                        <li>https://www.facebook.com/fondationdupatrimoine.rhonealpes</li>
                        <li>- - - - - - - - - - - - - </li>
                        <li>FFAM: Fédératon Française des Associations </li>
                        <li>de sauvegarde des Moulins </li>
                        <li>https://www.moulinsdefrance.org</li>
                        <li>- - - - - - - - - - - - - </li>
                        <li>Municipalité de Saint-Jorioz </li>
                        <li>https://www.saint-jorioz.fr</li>
                    </ul>
                </div>
                <div
                    className="contactColumn"
                    style={{
                        textAlign: "start"
                    }}
                >
                    <h3>Contact</h3>
                    <ul style={{ listStyle: "none", alignItems: "start", padding: 0, margin: 0 }}>
                        <li>110 Clos de la Scierie, 74410 Saint-Jorioz</li>
                        <li>alexis.kueny@outlook.com</li>
                        <li>+33 757064497</li>
                        <li>jeanlouis.kueny@orange.fr</li>
                        <li>+33 607602949</li>
                    </ul>
                </div>
                <div className="mapColumn">
                    <h3>Carte</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1390.0954806741556!2d6.151206538872!3d45.82745899277053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b9126e906cce7%3A0xf98bfb8d8d443354!2s120%20Clos%20de%20la%20Scierie%2C%2074410%20Saint-Jorioz!5e0!3m2!1sen!2sfr!4v1762693932798!5m2!1sen!2sfr"
                        width="300"
                        height="225"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map - Saint-Jorioz"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

