import { LazyImage } from '../common/LazyImage';

const Project = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
                <LazyImage
                    width="50%"
                    height="auto"
                    src="/ProjetRoues.png"
                    alt="Projet Roues"
                />
            </div>
        </>
    )
}

export default Project;