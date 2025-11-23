import moulinMain from '../assets/HeroCropped.png'
import { Button, Grow } from '@mui/material';

const Home = () => {
    // new background gradient
    const cssVars = {
        background: 'linear-gradient(90deg, rgba(234, 227, 217, 1.000) 0.000%, rgba(237, 227, 217, 1.000) 16.667%, rgba(233, 220, 209, 1.000) 33.333%, rgba(223, 207, 196, 1.000) 50.000%, rgba(208, 191, 180, 1.000) 66.667%, rgba(192, 174, 163, 1.000) 83.333%, rgba(177, 160, 149, 1.000) 100.000%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    return (
        <>
            <div style={{
                ...cssVars,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "100vh",
                alignContent: "center",
            }}>
                <Grow in>
                    {/* Use a real DOM element here (fragment won't accept ref) */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h1 style={{
                            fontFamily: 'Brush Script MT',
                            fontSize: '72px',
                            margin: 0
                        }}>
                            Moulin du Noiret
                        </h1>
                        <p style={{ fontSize: 18 }}>
                            Bienvenue sur le site de la restauration du moulin du Noiret à St Jorioz!
                        </p>
                        <Button
                            variant='contained'>
                            Parcourir
                        </Button>

                        <img
                            src={moulinMain}
                            alt="moulin home"
                            style={{
                                maxWidth: "90%",
                                maxHeight: "55vh",
                                margin: 20
                            }}
                        />
                    </div>
                </Grow>
            </div>
        </>
    )
}

export default Home;
