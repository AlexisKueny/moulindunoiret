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
    const num_to_image = {
        2:"/images_scierie/2_StocBilles.jpg" 
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

                <MapButton x={501} y={-9} />
                <MapButton x={278} y={588} />
                <MapButton x={620} y={194} />
                <MapButton x={597} y={273} />
                <MapButton x={620} y={271} />
                <MapButton x={565} y={280} />
                <MapButton x={456} y={271} />
                <MapButton x={501} y={289} />
                <MapButton x={429} y={307} />
                <MapButton x={333} y={325} />
                <MapButton x={337} y={289} />
                <MapButton x={369} y={199} />
                <MapButton x={365} y={122} />
                <MapButton x={720} y={27} />
                <MapButton x={592} y={380} />
                <MapButton x={310} y={411} />
                <MapButton x={401} y={371} />
                <MapButton x={337} y={235} />

            </div>
            <InfoCard position="right"/>
        </div>
    )
}

export default MapScierie;