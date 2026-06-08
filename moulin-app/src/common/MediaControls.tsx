import { Box, Tab, Tabs, Button } from "@mui/material";
import type { JSX } from 'react';

export interface MediaControlsProps {
    selectedDisplay: string;
    onDisplayChange: (value: string) => void;
    isPlaying: boolean;
    onTogglePlay: () => void;
    tabs: { label: string; value: string }[];
}

export const MediaControls = ({
    selectedDisplay,
    onDisplayChange,
    isPlaying,
    onTogglePlay,
    tabs,
}: MediaControlsProps): JSX.Element => {
    return (
        <Box 
            sx={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: 2,
                marginBottom: 2,
                justifyContent: 'flex-start',
                width: '100%'
            }}
        >
            <Tabs 
                value={selectedDisplay} 
                onChange={(_, newValue) => onDisplayChange(newValue)}
                textColor="inherit"
                sx={{ 
                    borderBottom: 1,
                    borderColor: 'divider',
                    '& .MuiTab-root': { 
                        color: 'rgba(0, 0, 0, 0.87)'
                    }
                }}
            >
                {tabs.map((tab) => (
                    <Tab key={tab.value} label={tab.label} value={tab.value} />
                ))}
            </Tabs>
        </Box>
    );
};

export const PlayButton = ({
    isPlaying,
    onTogglePlay,
}: {
    isPlaying: boolean;
    onTogglePlay: () => void;
}): JSX.Element => {
    return (
        <Button 
            variant="contained" 
            size="large"
            onClick={onTogglePlay}
            sx={{ 
                width: '100%',
                maxWidth: '1400px',
                paddingY: 1.5,
                backgroundColor: isPlaying ? '#f44336' : '#4caf50',
            }}
        >
            {isPlaying ? "Pause" : "Play"}
        </Button>
    );
};
