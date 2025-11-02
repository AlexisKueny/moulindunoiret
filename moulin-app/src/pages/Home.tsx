import moulinMain from '../assets/moulin-demo.jpg'
import { Grow, Slide } from '@mui/material';

const Home = () => {
	return (
		<>
			<div style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
			>
				<h1>Bienvenue sur le site du moulin du Noiret!</h1>
				<Grow
					in
				>
					<img
						src={moulinMain}
						alt="moulin home"
						height={682}
						width={1024}
						style={{ borderRadius: "25px" }}
					/>
				</Grow>
			</div>
		</>
	)
}

export default Home;