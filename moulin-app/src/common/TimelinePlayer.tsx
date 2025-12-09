import { useEffect, useRef } from "react";

declare const TL: { Timeline: new (element: Element | null, data: object, params: object) => Timeline };

declare interface Timeline {
    goToNext: () => void;
    goToStart: () => void;
}

interface TimelinePlayerProps {
    data: object;
    isPlaying: boolean;
    interval?: number;
    timelineOptions?: Record<string, unknown>;
}

export const TimelinePlayer = ({ data, isPlaying, interval = 3000, timelineOptions = {} }: TimelinePlayerProps) => {
    const timelineRef = useRef<HTMLDivElement | null>(null);
    const timelineInstanceRef = useRef<Timeline | null>(null);
    const countRef = useRef<number>(0);

    useEffect(() => {
        const timeline = new TL.Timeline(timelineRef.current, data, {
            scale_factor: 0.5,
            ...timelineOptions,
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

        const intervalId = setInterval(loadNextSlide, interval);
        return () => clearInterval(intervalId);
    }, [isPlaying]);

    return (
        <div style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: 50 }}>
            <div ref={timelineRef} id="timeline-embed" style={{ height: "700px", width: "100%" }} />
        </div>
    );
};