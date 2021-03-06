import './AlbumCard.css'

export default function AlbumCard({ album, addTo }) {
    function addAlbum(album) {
        const albumObj = {
            cover_image: album.cover_image,
            title: album.title,
            artist: album.artist,
            year: album.year,
            label: album.label.map(label => label),
            genre: album.genre.map(genre => genre),
            style: album.style.map(style => style),
            API_ID: album.id
        }
        addTo(albumObj);
    }

    return (
        <div className="card-div">
            <img key={album.title} src={album.cover_image} alt="oops" height="250px"></img>
            <br />
            <br />
            <div className="searchTitle">
                {album.title}
            </div>
            <br />
            <button onClick={() => addAlbum(album)}>Add to Collection</button>
            <br />
            <br />
            <br />
        </div>
    );
}