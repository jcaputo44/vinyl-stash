import { useParams } from "react-router-dom";
import './AlbumDetailsPage.css';

export default function AlbumDetailsPage({albums}) {
    const {title} = useParams();
    // const album = albums.find(a => a.title === title);
    return (
        <>
        <h1 className="titleFont">{title}</h1>
        {/* <p>{album.year}</p> */}
        <p>cool album dude</p>
        </>
    );
}
