import { useEffect, useRef, useState } from "react";
import cadastresData from "../assets/cadastres.json";
import scierieData from "../assets/scierie.json";
import proprietairesData from "../assets/proprietaires.json";
import moul2001Data from "../assets/moul2001.json";
import Button from "@mui/material/Button";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem } from "@mui/material";

declare const TL: { Timeline: new (element: Element | null, data: object, params: object) => Timeline };

declare interface Timeline {
    goToNext: () => void;
    goToStart: () => void;
}

const History = () => {
    const timelineRef = useRef<HTMLDivElement | null>(null);
    const timelineInstanceRef = useRef<Timeline | null>(null);
    const countRef = useRef<number>(0);
    const [selectedTimeline, setSelectedTimeline] = useState<string>("cadastres");
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const getTimelineData = (timeline: string) => {
        switch (timeline) {
            case "cadastres":
                return cadastresData;
            case "scierie":
                return scierieData;
            case "2001":
                return moul2001Data;
            default:
                return proprietairesData;
        }
    };

    // Only create timeline when selectedTimeline changes
    useEffect(() => {
        const timelineData = getTimelineData(selectedTimeline);
        const timeline = new TL.Timeline(timelineRef.current, timelineData, {
            scale_factor: 0.5,
        });
        timelineInstanceRef.current = timeline;
        countRef.current = 0;
    }, [selectedTimeline]);

    // Only handle autoplay when isPlaying changes
    useEffect(() => {
        if (!timelineInstanceRef.current || !isPlaying) return;

        const timeline = timelineInstanceRef.current;
        const timelineData = getTimelineData(selectedTimeline);
        const length = (timelineData as { events: unknown[] }).events.length;

        const loadNextSlide = () => {
            try {
                if (countRef.current < length) {
                    timeline.goToNext();
                    countRef.current++;
                    console.log("COUNT", countRef.current);
                }
                else {
                    timeline.goToStart();
                    countRef.current = 0;
                }
            } catch (err) {
                if (err instanceof TypeError) {
                    console.log(err.message);
                    if (err.message === "Cannot read property 'unique_id' of undefined") {
                        timeline.goToStart();
                    }
                }
            }
        };

        const intervalId = setInterval(loadNextSlide, 3000);
        return () => clearInterval(intervalId);
    }, [isPlaying, selectedTimeline]);

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedTimeline(event.target.value);
    };

    const toggleAutoplay = () => {
        setIsPlaying(!isPlaying);
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
                    <InputLabel id="demo-simple-select-label" sx={{color:"black"}}>Choisir une chronologie</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Choisir une chronologie"
                        value={selectedTimeline}
                        onChange={handleChange}
                    >
                        <MenuItem value="cadastres">Cadastres</MenuItem>
                        <MenuItem value="scierie">Scierie</MenuItem>
                        <MenuItem value="proprietaires">Proprietaires</MenuItem>
                        <MenuItem value="le moulin en 2001">2001</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div style={{ display: "flex", justifyContent: "center", width: "100%",  marginBottom: 50 }}>
                <div ref={timelineRef} id="timeline-embed" style={{ height: "700px", width: "100%"}}></div>
            </div>
        </div>
    );
};

export default History;