import { Box, Container, Typography } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

const WorkInProgress = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '70vh',
                    textAlign: 'center',
                    gap: 3
                }}
            >
                <ConstructionIcon sx={{ fontSize: 120, color: '#f44336' }} />
                <Typography variant="h2" component="h1" gutterBottom>
                    Site en Construction
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    Le site du Moulin du Noiret est actuellement en cours de développement.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Revenez bientôt pour découvrir l'histoire et la restauration de ce lieu unique.
                </Typography>
            </Box>
        </Container>
    );
};

export default WorkInProgress;
