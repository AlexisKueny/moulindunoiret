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
    onClick: (imagePath: string) => void;
}

interface InfoCardProps {
    imagePath: string;
}


const MapButton = ({ x, y, imagePath, onClick }: MapButtonProps) => {
    return (
        <IconButton
            onClick={() => onClick(imagePath)}
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

const InfoCard = ({imagePath}: InfoCardProps) => {
    return (
        <Card>
            <CardContent>
                <h2>Visite de la scierie BERGERET 1985</h2>
                <p>Stoc de billes</p>
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
    const [selectedImage, setSelectedImage] = useState("")

    return (
        <div
            style={{
                display:"flex",
                gap:"20px",
                marginLeft:"10px",
                marginRight:"10px"
            }}
        >
            <InfoCard imagePath={selectedImage}/>
            <div style={{ marginBottom: "30px", display: "flex", justifyContent: "center" }}>
                <div>
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <img
                            src={ScierieMap}
                            alt="carte scierie"
                            style={{ display: "block", maxHeight: "600px", width: "auto", height: "auto" }}
                        />
                        <MapButton x={0} y={0} imagePath="../images_H1/P1.jpg" onClick={setSelectedImage}/>
                        <MapButton x={50} y={50} imagePath="../images_H2/P2.jpg" onClick={setSelectedImage}/>
                        <MapButton x={100} y={100} imagePath="../images_H3/P3.jpg" onClick={setSelectedImage}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MapScierie;