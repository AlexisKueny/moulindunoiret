import ScierieMap from "../assets/ScierieMap.png"
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { IconButton } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface MapButtonProps {
    x: number;
    y: number;
}

interface InfoCardProps {
    position: string;
}

const MapButton = ({ x, y }: MapButtonProps) => {
    return (
        <IconButton
            sx={{
                position: "absolute",
                top: `${y}%`,
                left: `${x}%`,
            }}
        >
            <AddCircleOutlineRoundedIcon />
        </IconButton>
    );
};

const InfoCard = ({position}: InfoCardProps) => {
    const num_to_image = {
        2:"images_scierie/2_StocBilles.jpg" 
    }

    return (
        <Card>
            <CardContent>
                <h2>Je suis une carte {position}</h2>
                <p>Contenu de ma carte</p>
                <img 
                    src={num_to_image[2]}
                    alt="text"
                    height="30%"
                    width="100%"
                />
                <p></p>
            </CardContent>
        </Card>
    )
}

const MapScierie = () => {
    return (
        <div
            style={{
                display:"flex",
                gap:"20px",
                marginLeft:"10px",
                marginRight:"10px"
            }}
        >
            <InfoCard position="left"/>
            <div style={{ marginBottom: "30px", display: "flex", justifyContent: "center", position: "relative" }}>
                <img
                    src={ScierieMap}
                    alt="carte scierie"
                    style={{ display: "block", maxHeight: "700px", width: "auto", height: "auto" }}
                />
                <MapButton x={33} y={95} />
            </div>
            <InfoCard position="right"/>
        </div>
    )
}

export default MapScierie;