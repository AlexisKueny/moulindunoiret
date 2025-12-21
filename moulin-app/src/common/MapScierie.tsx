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
                        <MapButton x={	32.05	} y={	57.66	} imagePath="../images_H3/		1_NW.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	66.67	} y={	2.19	} imagePath="../images_H3/		2_StocBilles.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	35.26	} y={	98.54	} imagePath="../images_H3/		3_StocBilles.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	83.33	} y={	35.04	} imagePath="../images_H3/		4_Billonnage.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	80.13	} y={	47.81	} imagePath="../images_H3/		5_ScieRennepont.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	83.33	} y={	47.66	} imagePath="../images_H3/		6_JeanLeScieur.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	86.54	} y={	47.45	} imagePath="../images_H3/		7_PostPilotScie.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	75.64	} y={	48.91	} imagePath="../images_H3/		8_TapisRoulant.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	60.26	} y={	47.45	} imagePath="../images_H3/		9_LaPropio.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	66.67	} y={	50.36	} imagePath="../images_H3/		10_ScieADelignier.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	56.41	} y={	53.28	} imagePath="../images_H3/		11_DossesPapetterie.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	42.95	} y={	56.20	} imagePath="../images_H3/		12_GrandePiece.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	43.59	} y={	50.36	} imagePath="../images_H3/		14_GrueScieBatt.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	48.08	} y={	35.77	} imagePath="../images_H3/		16_QuaiChargement.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	47.44	} y={	23.36	} imagePath="../images_H3/		17_QuaiChargement.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	97.44	} y={	8.03	} imagePath="../images_H3/		18_QuaiChargement.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	79.49	} y={	64.96	} imagePath="../images_H3/		19_TransfoSW.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	39.74	} y={	70.07	} imagePath="../images_H3/		20_W.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	52.56	} y={	63.50	} imagePath="../images_H3/		21_HanguarCamions.jpg	 "onClick={setSelectedImage}/>
                        <MapButton x={	43.59	} y={	41.61	} imagePath="../images_H3/		22_LocalSciure.jpg	 "onClick={setSelectedImage}/>	
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MapScierie;