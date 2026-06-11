import { useState } from "react";
import W1Data from "../assets/W1_Architectes.json";
import W2Data from "../assets/W2_Moulin2001.json";
import W3Data from "../assets/W3_PremierLabel.json";
import W4Data from "../assets/W4_DeuxiemeLabel.json";
import W5Data from "../assets/W5_TroisiemLabel.json";
import { Carousel, ConfigProvider } from 'antd';
import { LazyImage } from "../common/LazyImage";
import { MediaControls, PlayButton } from "../common/MediaControls";

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
            width: "100%",
            paddingLeft: "48px",
            paddingRight: "48px",
            paddingBottom: "50px"
        }}>
            <MediaControls
                selectedDisplay={selectedDisplay}
                onDisplayChange={setSelectedDisplay}
                tabs={[
                    { label: "Les architectes du moulin", value: "W1" },
                    { label: "Moulin en 2001", value: "W2" },
                    { label: "Période 2005 à 2015", value: "W3" },
                    { label: "Période 2015 à 2020", value: "W4" },
                    { label: "Période 2020 à 2027", value: "W5" },
                ]}
            />
            
            <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                width: "100%", 
                marginBottom: 50,
            }}>
                <div style={{ width: "100%", maxWidth: "1400px" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "10px" }}>{currentData.title}</h2>
                    
                    {/* Add bottom margin to carousel container to prevent control overlap */}
                    <div style={{ marginBottom: "10px" }}>
                        <ConfigProvider theme={{ components: { Carousel: { arrowSize: 24 } } }}>
                            <Carousel 
                                arrows
                                autoplay={autoplay} 
                                autoplaySpeed={5000}
                                key={selectedDisplay}
                            >
                                {currentData.images.map((imagePath, index) => (
                                    <div key={index}>
                                        <LazyImage
                                            alt={`${currentData.title} - ${index + 1}`}
                                            src={imagePath}
                                            style={{ width: "100%", height: "400px", objectFit: "contain", marginBottom: "25px" }}                     
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </ConfigProvider>
                    </div>
                </div>
            </div>
            <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                width: "100%", 
            }}>
                <PlayButton 
                    isPlaying={autoplay}
                    onTogglePlay={toggleAutoplay}
                />
            </div>
        </div>
    );
};

export default Work;