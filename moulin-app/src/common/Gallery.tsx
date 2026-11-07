import { ImageListItem, Modal, Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import { useState } from 'react';
import type { JSX } from 'react';
import { LazyImage } from './LazyImage';

export interface GalleryItem {
    img: string
    title: string
}

export interface Event {
    text: { headline: string; text: string };
    media: { url: string; caption: string };
}

export interface GalleryData {
    title: {
        media: { url: string; caption: string };
        text: { headline: string; body: string };
    };
    events: Event[];
}

export type GalleryProps = GalleryData

export const Gallery = (data: GalleryProps): JSX.Element => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = data.events.map((event: Event) => ({
        img: `${import.meta.env.BASE_URL}${event.media.url.replace(/^\/+/, '')}`,
        title: event.media.caption || event.text.headline,
    }));

    return (
        <>
            <ImageList cols={2} rowHeight={260} gap={8} sx={{ width: '100%', margin: 0 }}>
                {images.map((item: GalleryItem) => (
                    <ImageListItem 
                        key={item.img}
                        onClick={() => setSelectedImage(item.img)}
                        sx={{ cursor: 'pointer' }}
                    >
                        <LazyImage
                            src={item.img}
                            alt={item.title!}
                            loading="eager"
                            style={{ objectFit: 'contain' }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Modal
                open={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    overflow: 'auto',
                }}
            >
                <Box
                    onClick={() => setSelectedImage(null)}
                    sx={{
                        width: 'auto',
                        height: 'auto',
                        outline: 'none',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 2,
                    }}
                >
                    <LazyImage
                        src={selectedImage || ''}
                        alt="expanded"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '90vh',
                            objectFit: 'contain',
                        }}
                    />
                </Box>
            </Modal>
        </>
    )
}