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

const InfoCard = ({ imagePath, pointDescription }: InfoCardProps) => {
    return (
        <Card>
            <CardContent>
                <h2>Visite de la scierie BERGERET en 1985</h2>
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
    const [selectedPoint, setSelectedPoint] = useState({ 
        imagePath: "../images_H3/23_Au fil de l'eau et... du bois.jpg", 
        pointDescription: "Au fil de l'eau et... du bois" 
    });

    const handlePointClick = (imagePath: string, pointDescription: string) => {
        setSelectedPoint({ imagePath, pointDescription });
    };

    return (
        <div
            style={{
                display: "flex",
                gap: "20px",
                width: "100%",
                height: "100%",
                overflow: "hidden"
            }}
        >
            <InfoCard imagePath={selectedPoint.imagePath} pointDescription={selectedPoint.pointDescription} />
            <div style={{ display: "flex", justifyContent: "center", flex: 1, height: "100%" }}>
                <div style={{ position: "relative", display: "inline-block", height: "100%" }}>
                    <img
                        src={ScierieMap}
                        alt="carte scierie"
                        style={{ display: "block", maxHeight: "100%", width: "auto", height: "100%", objectFit: "contain" }}
                    />
                    <MapButton x={32.05} y={57.66} imagePath="../images_H3/		1_NW.jpg	 " pointDescription="	Entrée NW de la scierie	" onClick={handlePointClick} />
                    <MapButton x={66.67} y={2.19} imagePath="../images_H3/		2_StocBilles.jpg	 " pointDescription="	Stoc de billes	" onClick={handlePointClick} />
                    <MapButton x={35.26} y={98.54} imagePath="../images_H3/		3_StocBilles.jpg	 " pointDescription="	Stoc de billes	" onClick={handlePointClick} />
                    <MapButton x={83.33} y={35.04} imagePath="../images_H3/		4_Billonnage.jpg	 " pointDescription="	Poste de billonnage	" onClick={handlePointClick} />
                    <MapButton x={79.40} y={47.50} imagePath="../images_H3/		5_ScieRennepont.jpg	 " pointDescription="	La scie Rennepont	" onClick={handlePointClick} />
                    <MapButton x={84.00} y={46.00} imagePath="../images_H3/		6_JeanLeScieur.jpg	 " pointDescription="	Jean, le scieur	" onClick={handlePointClick} />
                    <MapButton x={89.00} y={45.00} imagePath="../images_H3/		7_PostPilotScie.jpg	 " pointDescription="	Poste de pilotage	" onClick={handlePointClick} />
                    <MapButton x={74.50} y={48.70} imagePath="../images_H3/		8_TapisRoulant.jpg	 " pointDescription="	Tapis roulant	" onClick={handlePointClick} />
                    <MapButton x={60.26} y={47.45} imagePath="../images_H3/		9_LaPropio.jpg	 " pointDescription="	La Propriétaire	" onClick={handlePointClick} />
                    <MapButton x={66.67} y={50.36} imagePath="../images_H3/		10_ScieADelignier.jpg	 " pointDescription="	Une scie à déligner	" onClick={handlePointClick} />
                    <MapButton x={56.41} y={53.28} imagePath="../images_H3/		11_DossesPapetterie.jpg	 " pointDescription="	Dosses pour la papetterie	" onClick={handlePointClick} />
                    <MapButton x={42.95} y={56.20} imagePath="../images_H3/		12_GrandePiece.jpg	 " pointDescription="	La grande pièce du moulin	" onClick={handlePointClick} />
                    <MapButton x={43.59} y={50.36} imagePath="../images_H3/		14_GrueScieBatt.jpg	 " pointDescription="	Vestiges de la scie battante	" onClick={handlePointClick} />
                    <MapButton x={48.08} y={35.77} imagePath="../images_H3/		16_QuaiChargement.jpg	 " pointDescription="	Le quai de chargement	" onClick={handlePointClick} />
                    <MapButton x={47.44} y={23.36} imagePath="../images_H3/		17_QuaiChargement.jpg	 " pointDescription="	Le quai de chargement	" onClick={handlePointClick} />
                    <MapButton x={97.44} y={8.03} imagePath="../images_H3/		18_QuaiChargement.jpg	 " pointDescription="	Le quai de chargement	" onClick={handlePointClick} />
                    <MapButton x={79.49} y={64.96} imagePath="../images_H3/		19_TransfoSW.jpg	 " pointDescription="	Le transformateur	" onClick={handlePointClick} />
                    <MapButton x={39.74} y={70.07} imagePath="../images_H3/		20_W.jpg	 " pointDescription="	côté W de la scierie	" onClick={handlePointClick} />
                    <MapButton x={52.56} y={63.50} imagePath="../images_H3/		21_HanguarCamions.jpg	 " pointDescription="	Le hangar à camions	" onClick={handlePointClick} />
                    <MapButton x={43.59} y={41.61} imagePath="../images_H3/		22_LocalSciure.jpg	 " pointDescription="	Le silot à sciure	" onClick={handlePointClick} />
                </div>
            </div>
        </div>


    );
};


export default MapScierie;