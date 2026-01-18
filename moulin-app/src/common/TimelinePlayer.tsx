import { useEffect, useRef } from "react";

declare const TL: { Timeline: new (element: Element | null, data: object, params: object) => Timeline };

declare interface Timeline {
    goToNext: () => void;
    goToStart: () => void;
}

interface TimelinePlayerProps {
    data: object;
    isPlaying: boolean
}

export const TimelinePlayer = ({ data, isPlaying}: TimelinePlayerProps) => {
    const timelineRef = useRef<HTMLDivElement | null>(null);
    const timelineInstanceRef = useRef<Timeline | null>(null);
    const countRef = useRef<number>(0);

    useEffect(() => {
        const timeline = new TL.Timeline(timelineRef.current, data, {
            scale_factor: 0.5,
        });
        timelineInstanceRef.current = timeline;
        countRef.current = 0;
    }, [data]);

    useEffect(() => {
        if (!timelineInstanceRef.current || !isPlaying) return;

        const timeline = timelineInstanceRef.current;
        const length = (data as { events: unknown[] }).events.length;

        const loadNextSlide = () => {
            try {
                if (countRef.current < length) {
                    timeline.goToNext();
                    countRef.current++;
                } else {
                    timeline.goToStart();
                    countRef.current = 0;
                }
            } catch (err) {
                if (err instanceof TypeError) {
                    timeline.goToStart();
                }
            }
        };

        const intervalId = setInterval(loadNextSlide, 3000);
        return () => clearInterval(intervalId);
    }, [isPlaying]);

    return (
        <div style={{ display: "flex", justifyContent: "center", width: "100%", height: "100%" }}>
            <div ref={timelineRef} id="timeline-embed" style={{ height: "100%", width: "100%" }} />
        </div>
    );
};