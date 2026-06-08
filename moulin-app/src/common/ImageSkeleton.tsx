import { Skeleton, Box } from '@mui/material';
import type { JSX } from 'react';

export interface ImageSkeletonProps {
    width?: string | number;
    height?: string | number;
}

export const ImageSkeleton = ({ width = '100%', height = '550px' }: ImageSkeletonProps): JSX.Element => {
    return (
        <Box
            sx={{
                width,
                height,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                sx={{
                    borderRadius: '4px',
                }}
            />
        </Box>
    );
};
