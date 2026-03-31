import { useState } from "react";
import cadastresData from "../assets/H2_cadastres.json";
import proprietairesData from "../assets/H1_proprietaires.json";
import { TimelinePlayer } from "../common/TimelinePlayer";
import Button from "@mui/material/Button";
import { Box, Tab, Tabs } from "@mui/material";
import MapScierie from "../common/MapScierie";

const History = () => {
    const [selectedDisplay, setSelectedDisplay] = useState<string>("cadastres");
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const getDisplay = () => {
        switch (selectedDisplay) {
            case "cadastres": {
                const data = selectedDisplay === "cadastres" ? cadastresData : cadastresData;
                return <TimelinePlayer key="timeline" data={data} isPlaying={isPlaying} />;
            }
            case "proprietaires": {
                const data = selectedDisplay === "proprietaires" ? proprietairesData : proprietairesData;
                return <TimelinePlayer key="timeline" data={data} isPlaying={isPlaying} />;
            }
            case "scierie":
                return <MapScierie/>
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
                    <Tab label="Cadastres" value="cadastres" />
                    <Tab label="Propriétaires" value="proprietaires" />
                    <Tab label="Scierie BERGERET 1985" value="scierie" />
                </Tabs>
            </Box>
            <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                width: "100%", 
                marginBottom: 20,
                height: "550px"
            }}>
                <div style={{ width: "100%", maxWidth: "1400px", height: "100%" }}>
                    {getDisplay()}
                </div>
            </div>
            {selectedDisplay !== "scierie" && (
                <Button 
                    variant="contained" 
                    size="large"
                    onClick={() => setIsPlaying(!isPlaying)}
                    sx={{ 
                        width: '100%',
                        maxWidth: '1400px',
                        paddingY: 1.5,
                        backgroundColor: isPlaying ? '#f44336' : '#4caf50',
                    }}
                >
                    {isPlaying ? "Pause" : "Play"}
                </Button>
            )}
        </div>
    );
};

export default History;