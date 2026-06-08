import { useState } from "react";
import cadastresData from "../assets/H2_cadastres.json";
import proprietairesData from "../assets/H1_proprietaires.json";
import { TimelinePlayer } from "../common/TimelinePlayer";
import MapScierie from "../common/MapScierie";
import {Gallery} from "../common/Gallery";
import { MediaControls } from "../common/MediaControls";

const History = () => {
    const [selectedDisplay, setSelectedDisplay] = useState<string>("cadastres");
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const getDisplay = () => {
        switch (selectedDisplay) {
            case "cadastres":
                return <TimelinePlayer key="timeline" data={cadastresData} isPlaying={isPlaying} />;
            case "proprietaires":
                return <Gallery key="gallery" {...proprietairesData} />;
            case "scierie":
                return <MapScierie />;
            default:
                return null;
        }
    };

    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "flex-start", 
            width: "100%", 
            paddingLeft: "48px", 
            paddingRight: "48px", 
            paddingBottom: "50px", 
            minHeight: selectedDisplay ? "100vh" : "auto" 
        }}>
            <MediaControls
                selectedDisplay={selectedDisplay}
                onDisplayChange={setSelectedDisplay}
                isPlaying={isPlaying}
                onTogglePlay={() => setIsPlaying(!isPlaying)}
                tabs={[
                    { label: "Cadastres", value: "cadastres" },
                    { label: "Propriétaires", value: "proprietaires" },
                    { label: "Scierie BERGERET 1985", value: "scierie" },
                ]}
            />
            <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                width: "100%", 
                marginBottom: 20,
                height: "550px"
            }}>
                <div style={{ width: "100%", maxWidth: "1400px", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {getDisplay()}
                </div>
            </div>
            {selectedDisplay === "cadastres" && (
                <div style={{ 
                    width: '100%',
                    maxWidth: '1400px',
                    margin: '0 auto'
                }}>
                    {/* Play button is now part of MediaControls, shown for all tabs */}
                </div>
            )}
        </div>
    );
};

export default History;