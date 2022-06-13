import { Link } from 'react-router-dom';
import './CollCard.css';

export default function ({ album }) {
    return (
        <>
            <div className="ColGrid2 container">
                <Link to={`details/${album._id}`}>
                    <img className="alb-cov" key={album.title} src={album.cover_image} alt="oops" height="150px"></img>
                    <div className="overlay"></div>
                </Link>
            </div>
        </>
    );
}