import { Gallery } from "../common/Gallery";
import newsData from "../assets/Newsletter.json";

const News = () => {
    const events = newsData.events.map((event) => ({
        ...event,
        media: { ...event.media, url: event.media.url.trim() },
    }));

    return <Gallery {...newsData} events={events} />;
};

export default News;