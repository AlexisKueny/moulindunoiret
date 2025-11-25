import { useEffect, useRef } from "react";
import timelineData from "../assets/events.json";
import Button from "@mui/material/Button";

declare const TL: { Timeline: new (element: Element | null, data: object, params: object) => Timeline };

declare interface Timeline {
    goToNext: () => void;
    goToStart: () => void;
}

const History = () => {
    const timelineRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Load TimelineJS library if not already loaded
        // Initialize timeline after library loads
        const timeline = new TL.Timeline(timelineRef.current, timelineData, {
            scale_factor: 0.5
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

        setInterval(loadNextSlide, 10000);
    }, []);

    return (
        <div>
            <div
                style={{
                    display: "flex"
                }}
            >
                <h1>Timeline</h1>
                <Button

                >Play</Button>
                <Button>Stop</Button>
            </div>

            <div ref={timelineRef} id="timeline-embed" style={{ height: "600px" }}></div>
            <br />
        </div>
    );
};

export default History;