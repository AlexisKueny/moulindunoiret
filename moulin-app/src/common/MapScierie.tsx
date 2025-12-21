import ScierieMap from "../assets/ScierieMap.png"
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { IconButton } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from "react";

interface MapButtonProps {
    x: number;
    y: number;
    imagePath: string;
    pointDescription: string;
    onClick: (imagePath: string, pointDescription: string) => void;
}

interface InfoCardProps {
    imagePath: string;
    pointDescription: string;
}

const MapButton = ({ x, y, imagePath, pointDescription, onClick }: MapButtonProps) => {
    return (
        <IconButton
            onClick={() => onClick(imagePath, pointDescription)}
            sx={{
                position: "absolute",
                top: `${y}%`,
                left: `${x}%`,
                transform: "translate(-50%, -50%)",
            }}
        >
            <AddCircleOutlineRoundedIcon />
        </IconButton>
    );
};

const InfoCard = ({imagePath, pointDescription}: InfoCardProps) => {
    return (
        <Card>
            <CardContent>
                <h2>Visite de la scierie BERGERET 1985</h2>
                <p>{pointDescription}</p>
                {imagePath && (
                    <img 
                        src={imagePath}
                        alt="text"
                        height="30%"
                        width="100%"
                    />
                )}
                <p></p>
            </CardContent>
        </Card>
    )
}

const MapScierie = () => {
    const [selectedPoint, setSelectedPoint] = useState({ imagePath: "", pointDescription: "" });

    const handlePointClick = (imagePath: string, pointDescription: string) => {
        setSelectedPoint({ imagePath, pointDescription });
    };

    return (
        <div
            style={{
                display:"flex",
                gap:"20px",
                marginLeft:"10px",
                marginRight:"10px"
            }}
        >
            <InfoCard imagePath={selectedPoint.imagePath} pointDescription={selectedPoint.pointDescription}/>
            <div style={{ marginBottom: "30px", display: "flex", justifyContent: "center" }}>
                <div>
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <img
                            src={ScierieMap}
                            alt="carte scierie"
                            style={{ display: "block", maxHeight: "600px", width: "auto", height: "auto" }}
                        />
                        <MapButton x={0} y={0} imagePath="../images_H1/P1.jpg" pointDescription="Stock de billes" onClick={handlePointClick}/>
                        <MapButton x={50} y={50} imagePath="../images_H2/P2.jpg" pointDescription="Zone de découpe" onClick={handlePointClick}/>
                        <MapButton x={100} y={100} imagePath="../images_H3/P3.jpg" pointDescription="Aire de stockage" onClick={handlePointClick}/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};


export default MapScierie;