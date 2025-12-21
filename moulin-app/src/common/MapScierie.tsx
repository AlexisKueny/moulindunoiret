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
                transform: "translate(-50%, -50%)",
            }}
        >
            <AddCircleOutlineRoundedIcon />
        </IconButton>
    );
};

const InfoCard = ({position}: InfoCardProps) => {
    const num_to_image = {
        2:"../images_H3/2_StocBilles.jpg" ,
        3:"../images_H3/3_StocBilles.jpg"
    }

    return (
        <Card>
            <CardContent>
                <h2>Visite de la scierie BERGERET 1985 {position}</h2>
                <p>Stoc de billes</p>
                <img 
                    src={num_to_image[3]}
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
            <InfoCard position="1985"/>
            <div style={{ marginBottom: "30px", display: "flex", justifyContent: "center" }}>
                <div>
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <img
                            src={ScierieMap}
                            alt="carte scierie"
                            style={{ display: "block", maxHeight: "600px", width: "auto", height: "auto" }}
                        />
                        <MapButton x={0} y={0} />
                        <MapButton x={50} y={50} />
                        <MapButton x={100} y={100} />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MapScierie;