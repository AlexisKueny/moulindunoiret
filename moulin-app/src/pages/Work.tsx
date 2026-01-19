import { useState } from "react";
import W1Data from "../assets/W1_Architectes.json";
import W2Data from "../assets/W2_Moulin2001.json";
import W3Data from "../assets/W3_PremierLabel.json";
import W4Data from "../assets/W4_DeuxiemeLabel.json";
import W5Data from "../assets/W5_TroisiemLabel.json";
import Button from "@mui/material/Button";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { Carousel } from 'antd';

interface WorkData {
    title: string;
    description: string;
    images: string[];
}

const Work = () => {
    const [selectedTimeline, setSelectedTimeline] = useState<string>("W1");
    const [autoplay, setAutoplay] = useState<boolean>(false);

    const getTimelineData = (timeline: string): WorkData => {
        switch (timeline) {
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

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedTimeline(event.target.value);
    };

    const toggleAutoplay = () => {
        setAutoplay(!autoplay);
    };

    const currentData = getTimelineData(selectedTimeline);

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <div
                style={{
                    display: "flex",
                    gap: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20
                }}
            >
                <Button variant="contained" onClick={toggleAutoplay}>
                    {autoplay ? "Pause" : "Play"}
                </Button>
                <FormControl sx={{ width: "220px" }} size="small">
                    <InputLabel id="demo-simple-select-label" sx={{ color: "black" }}>Choisir un thème</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Choisir un thème"
                        value={selectedTimeline}
                        onChange={handleChange}
                    >
                        <MenuItem value="W1">Les architectes du moulin</MenuItem>
                        <MenuItem value="W2">Moulin en 2001</MenuItem>
                        <MenuItem value="W3">Premier Label 2005</MenuItem>
                        <MenuItem value="W4">Deuxieme Label 2015</MenuItem>
                        <MenuItem value="W5">Troisime Label 2022</MenuItem>
                    </Select>
                </FormControl>
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
                    style={{ height: "500px" }}
                    key={selectedTimeline}
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