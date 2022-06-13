import { useState, useEffect } from 'react';
import AlbumCard from '../../components/AlbumCard/AlbumCard'
import * as albumsAPI from '../../utilities/albums-api';
import './AddAlbumPage.css';

export default function AddAlbumPage({ addTo, albums, setAlbums }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    searchAlbums();
  }, [])

  async function searchAlbums() {
    const albumSearch = await albumsAPI.search(query);
    setAlbums(albumSearch);
  }
  const uniqueAlbums = [];
  const unique = albums.filter(element => {
    const isDuplicate = uniqueAlbums.includes(element.title);

    if (!isDuplicate) {
      uniqueAlbums.push(element.title);
      return true;
    }
    return false;
  });
  const searchedAlbums = unique.map((album, idx) => <AlbumCard key={idx} album={album} addTo={addTo} />);

  return (
    <>
      <h1 className="page-title">Search Albums</h1>
      <div className="searchBar">
        <input type="text" value={query} onChange={(evt) => setQuery(evt.target.value)} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={searchAlbums} >search</button>
      </div>
      <div className="mainAddDiv">
        <br />
        <br />
        <div className={albums.length > 0 ? "searchGrid" : ""}>
          {(albums.length > 0 ? searchedAlbums : "No results found, try again!")}
          </div>
      </div>
      <br />
    </>
  );
}