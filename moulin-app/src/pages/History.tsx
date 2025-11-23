import { useEffect, useRef } from "react";
import timelineData from "../assets/events.json";

const History = () => {
    const timelineRef = useRef(null);

    useEffect(() => {
        // Load CSS
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css";
        document.head.appendChild(link);

        // Load JS
        const script = document.createElement("script");
        script.src = "https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js";
        script.async = true;

        script.onload = () => {
            const timeline = new (window).TL.Timeline(timelineRef.current, timelineData, {
                initial_zoom: 10
            });
            const length = timelineData.events.length;
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

            setInterval(loadNextSlide, 5000);
        };
        document.body.appendChild(script);
    }, []);

    return (
        <div>
            <h1>Timeline</h1>
            <div ref={timelineRef} id="timeline" style={{ height: 600, width:"100%" }} />
        </div>
    )
}

export default History;