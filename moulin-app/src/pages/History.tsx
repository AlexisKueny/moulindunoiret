import { useEffect, useRef } from "react";
import timelineData from "../assets/cadastres.json";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem } from "@mui/material";

declare const TL: { Timeline: new (element: Element | null, data: object, params: object) => Timeline };

declare interface Timeline {
    goToNext: () => void;
    goToStart: () => void;
}

const History = () => {
    const timelineRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const timeline = new TL.Timeline(timelineRef.current, timelineData, {
            scale_factor: 0.5,
        });
        const length = (timelineData as { events: unknown[] }).events.length;
        let count = 0;

        const loadNextSlide = () => {
            try {
                if (count < length) {
                    timeline.goToNext();
                    count++;
                    console.log("COUNT", count);
                }
                else {
                    timeline.goToStart();
                    count = 0;
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

        setInterval(loadNextSlide, 50000);
    }, []);

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
                <Button variant="contained">Play</Button>
                <Button variant="contained">Stop</Button>
                <FormControl sx={{minWidth: 210}}>
                    <InputLabel id="demo-simple-select-label">Selectionner un thème</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Selectionner un thème"
                        autoWidth
                    >
                        <MenuItem >Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: 20 }}>
                <div ref={timelineRef} id="timeline-embed" style={{ height: "700px", width: "95%", maxWidth: "1200px" }}></div>
            </div>
            <br />
        </div>
    );
};

export default History;