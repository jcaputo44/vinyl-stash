import {Link} from 'react-router-dom';
import './CollCard.css'

export default function({album}) {
    return(
        <>
        <div className="ColGrid2">
        <Link to={`details/${album._id}`}>
            <img key={album.title} src={album.cover_image} alt="oops" height="150px"></img>
        </Link>
        </div>
        </>
    );
}