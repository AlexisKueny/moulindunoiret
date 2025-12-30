import { useEffect, useRef, useState } from "react";
import W1Data from "../assets/W1_Architectes.json";
import W2Data from "../assets/W2_PremierLabel.json";
import W3Data from "../assets/W3_P20082015.json";
import W4Data from "../assets/W4_DeuxiemeLabel.json";
import W5Data from "../assets/W5_TroisiemLabel.json";
import Button from "@mui/material/Button";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { Carousel } from 'antd';
import { Height } from "@mui/icons-material";

declare const TL: { Timeline: new (element: Element | null, data: object, params: object) => Timeline };

declare interface Timeline {
    goToNext: () => void;
    goToStart: () => void;
}

const Work = () => {
    const timelineRef = useRef<HTMLDivElement | null>(null);
    const timelineInstanceRef = useRef<Timeline | null>(null);
    const countRef = useRef<number>(0);
    const [selectedTimeline, setSelectedTimeline] = useState<string>("W1");
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const getTimelineData = (timeline: string) => {
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
        setIsPlaying(!isPlaying);
    };

    const contentStyle: React.CSSProperties = {
        margin: 0,
        height: '400px',
        color: '#fff',
        lineHeight: '400px',
        textAlign: 'center',
        background: '#364d79',
    };

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
                    {isPlaying ? "Pause" : "Play"}
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
                        <MenuItem value="W2">Premier Label 2005</MenuItem>
                        <MenuItem value="W3">Période 2010-2015</MenuItem>
                        <MenuItem value="W4">Deuxieme Label 2015</MenuItem>
                        <MenuItem value="W5">Troisime Label 2022</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div style={{ width: "80%", maxWidth: "1200px", marginBottom: "20px" }}>
                <Carousel arrows autoplay autoplaySpeed={5000}
                style={{height:"500px"}}>
                    <div>
                        <img
                          alt="imh"
                          src="../images_W1/01Luzzi.jpg"
                          style={{ width: "100%", height: "450px", objectFit: "contain" }}
                        />
                    </div>
                    <div>
                        <img
                          alt="imh"
                          src="../images_W1/02Luzzi.jpg"
                          style={{ width: "100%", height: "450px", objectFit: "contain" }}
                          />
                    </div>
                    <div>
                        <img
                          alt="imh"
                          src="../images_W1/03Luzzi.jpg"
                          style={{ width: "100%", height: "450px", objectFit: "contain" }}
                          />
                    </div>
                    <div>
                        <img
                          alt="imh"
                          src="../images_W1/04Luzzi.jpg"
                          style={{ width: "100%", height: "450px", objectFit: "contain" }}
                          />
                    </div>
                    <div>
                        <img
                          alt="imh"
                          src="../images_W1/05Luzzi.jpg"
                          style={{ width: "100%", height: "450px", objectFit: "contain" }}
                          />
                    </div>
                    <div>
                        <img
                          alt="imh"
                          src="../images_W1/06Dujourdy.jpg"
                          style={{ width: "100%", height: "450px", objectFit: "contain" }}
                          />
                    </div>
                    <div>
                        <img
                          alt="imh"
                          src="../images_W1/07Dujourdy.jpg"
                          style={{ width: "100%", height: "450px", objectFit: "contain" }}
                          />
                    </div>
                    <div>
                        <img
                          alt="imh"
                          src="../images_W1/08Dujourdy.jpg"
                          style={{ width: "100%", height: "450px", objectFit: "contain" }}
                          />
                    </div>
                    <div>
                        <img
                          alt="imh"
                          src="../images_W1/09Dujourdy.jpg"
                          style={{ width: "100%", height: "450px", objectFit: "contain" }}
                          />
                    </div><div>
                        <img
                          alt="imh"
                          src="../images_W1/10Dujourdy.jpg"
                          style={{ width: "100%", height: "450px", objectFit: "contain" }}
                          />
                    </div><div>
                        <img
                          alt="imh"
                          src="../images_W1/11Dujourdy.jpg"
                          style={{ width: "100%", height: "450px", objectFit: "contain" }}
                          />
                    </div>
                    <div>
                        <img
                          alt="imh"
                          src="../images_W1/12Dujourdy.jpg"
                          style={{ width: "100%", height: "450px", objectFit: "contain" }}
                          />
                    </div>
                    <div>
                        <img
                          alt="imh"
                          src="../images_W1/13Dujourdy.jpg"
                          style={{ width: "100%", height: "450px", objectFit: "contain" }}
                          />
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Work;