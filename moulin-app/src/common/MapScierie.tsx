import ScierieMap from "../assets/ScierieMap.png"
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { IconButton } from "@mui/material";

interface MapButtonProps {
    x: number;
    y: number;
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

const MapScierie = () => {
    return (
        <div style={{ marginBottom: "30px", display: "flex", justifyContent: "center", position: "relative" }}>
            <img
                src={ScierieMap}
                alt="carte scierie"
                style={{ display: "block", maxHeight: "700px", width: "auto", height: "auto" }}
            />
            <MapButton x={277} y={590} />
        </div>
    )
}

export default MapScierie;