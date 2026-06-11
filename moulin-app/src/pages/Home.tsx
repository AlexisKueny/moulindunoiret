import { Grow } from '@mui/material';
import { LazyImage } from '../common/LazyImage';

const Home = () => {
    return (
        <>
            <div style={{
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
                        <p style={{ fontSize: 20 }}>
                            Bienvenue sur le site de la restauration du moulin du Noiret à St Jorioz!
                        </p>
 
                        <LazyImage
                            src="moulin.gif"
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
