import { useState } from 'react';
import { Skeleton, Box } from '@mui/material';
import type { JSX } from 'react';

export interface LazyImageProps {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
    style?: React.CSSProperties;
    onClick?: () => void;
    loading?: 'lazy' | 'eager';
}

export const LazyImage = ({
    src,
    alt,
    width = '100%',
    height = '100%',
    style,
    onClick,
    loading = 'lazy',
}: LazyImageProps): JSX.Element => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <Box
            sx={{
                position: 'relative',
                width,
                height,
                overflow: 'hidden',
            }}
            onClick={onClick}
        >
            {!isLoaded && (
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                />
            )}
            <img
                src={src}
                alt={alt}
                loading={loading}
                onLoad={() => setIsLoaded(true)}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    ...style,
                }}
            />
        </Box>
    );
};
