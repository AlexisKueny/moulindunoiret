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
                top: `${y}px`,
                left: `${x}px`,
            }}
        >
            <AddCircleOutlineRoundedIcon />
        </IconButton>
    );
};

const InfoCard = ({position}: InfoCardProps) => {
    return (
        <Card>
            <CardContent>
                <h2>Je suis une carte {position}</h2>
                <p>Contenu de ma carte</p>
            </CardContent>
        </Card>
    )
}

const MapScierie = () => {
    return (
        <div
            style={{display:"flex"}}
        >
            <InfoCard position="left"/>
            <div style={{ marginBottom: "30px", display: "flex", justifyContent: "center", position: "relative" }}>
                <img
                    src={ScierieMap}
                    alt="carte scierie"
                    style={{ display: "block", maxHeight: "700px", width: "auto", height: "auto" }}
                />
                <MapButton x={277} y={590} />
                <MapButton x={250} y={611} />
            </div>
            <InfoCard position="right"/>
        </div>
    )
}

export default MapScierie;