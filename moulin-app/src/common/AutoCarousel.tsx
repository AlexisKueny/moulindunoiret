import { Carousel } from "antd";
import "antd/dist/reset.css";

interface AutoCarouselProps {
    data: Object,
    isPlaying: boolean,
    interval: number
}

const AutoCarousel = ({ data, isPlaying, interval = 3000 }: AutoCarouselProps) => {
    const contentStyle: React.CSSProperties = {
        margin: 0,
        height: '700px',
        color: '#000',
        lineHeight: '700px',
        textAlign: 'center',
        background: '#D3D3D3 ',
    };

    console.log(data);

    return (
        <div style={{ width: "100%", height: "700px", overflow: "hidden" }}>
            <Carousel 
                key={`carousel-${isPlaying}`}
                arrows
                style={{ width: "100%", height: "100%" }}
                autoplay={isPlaying ? { dotDuration: true } : false}
                autoplaySpeed={interval}
                pauseOnHover={false}
            >
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </div>
    );
};

export default AutoCarousel;