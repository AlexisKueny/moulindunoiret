import moulinMain from '../assets/Essai3.png'
import { Grow } from '@mui/material';

const Home = () => {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>

                <Grow in>
                    <img
                        src={moulinMain}
                        alt="moulin home"
                        height={2000}
                        style={{
                            maxWidth:"80%",
                            maxHeight:"87vh",
                            margin:20
                        }}
                    />
                </Grow>
            </div>
        </>
    )
}

export default Home;