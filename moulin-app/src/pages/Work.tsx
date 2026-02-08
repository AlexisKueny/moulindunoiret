import { useState } from "react";
import W1Data from "../assets/W1_Architectes.json";
import W2Data from "../assets/W2_Moulin2001.json";
import W3Data from "../assets/W3_PremierLabel.json";
import W4Data from "../assets/W4_DeuxiemeLabel.json";
import W5Data from "../assets/W5_TroisiemLabel.json";
import Button from "@mui/material/Button";
import { Box, Tab, Tabs } from "@mui/material";
import { Carousel } from 'antd';

interface WorkData {
    title: string;
    description: string;
    images: string[];
}

const Work = () => {
    const [selectedDisplay, setSelectedDisplay] = useState<string>("W1");
    const [autoplay, setAutoplay] = useState<boolean>(false);
    const getDisplay = (displ: string): WorkData => {
        switch (displ) {
            case "W1":
                return W1Data;
            case "W2":
                return W2Data;
            case "W3":
                return W3Data;
            case "W4":
                return W4Data;
            case "W5":
                return W5Data;
            default:
                return W1Data;
        }
    };
    const currentData = getDisplay(selectedDisplay);
    const toggleAutoplay = () => {
        setAutoplay(!autoplay);
    };

    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            width: "100%" 
        }}>
            <div
                style={{
                    display: "flex",
                    gap: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20
                }}>
            <Box 
                sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: 2,
                    marginBottom: 2
                }}
            >
                <Tabs 
                    value={selectedDisplay} 
                    onChange={(_, newValue) => setSelectedDisplay(newValue)}
                    textColor="inherit"
                    sx={{ 
                        borderBottom: 1,
                        borderColor: 'divider',
                        '& .MuiTab-root': { 
                            color: 'rgba(0, 0, 0, 0.87)'
                        }
                    }}
                >
                    <Tab label="Les architectes du moulin" value="W1" />
                    <Tab label="Moulin en 2001" value="W2" />
                    <Tab label="Premier Label 2005" value="W3" />
                    <Tab label="Deuxieme Label 2015" value="W4" />
                    <Tab label="Troisieme Label 2022" value="W5" />
                </Tabs>
            </Box>
                <Button 
                    variant="contained" 
                    onClick={toggleAutoplay}>
                    {autoplay ? "Pause" : "Play"}
                </Button>
                
            </div>
            
            <div style={{ width: "80%", maxWidth: "1200px", marginBottom: "20px" }}>
                <h2 style={{ textAlign: "center", marginBottom: "10px" }}>{currentData.title}</h2>
                {currentData.description && (
                    <p style={{ textAlign: "center", marginBottom: "20px" }}>{currentData.description}</p>
                )}
                <Carousel 
                    arrows
                    autoplay={autoplay} 
                    autoplaySpeed={5000}
                    style={{ 
                        height: "500px" 
                        
                    }}
                    key={selectedDisplay}
                >
                    {currentData.images.map((imagePath, index) => (
                        <div key={index}>
                            <img
                                alt={`${currentData.title} - ${index + 1}`}
                                src={imagePath}
                                style={{ width: "100%", height: "450px", objectFit: "contain" }}                     
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Work;