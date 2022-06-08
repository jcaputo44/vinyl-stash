import { useState } from 'react';
import AlbumCard from '../../components/AlbumCard/AlbumCard'
import * as albumsAPI from '../../utilities/albums-api';
import './AddAlbumPage.css';

export default function AddAlbumPage({addTo, albums, setAlbums}) {
  const [query, setQuery] = useState('');
  async function searchAlbums() {
    const albumSearch = await albumsAPI.search(query)
    setAlbums(albumSearch);
  }
  const uniqueAlbums = [];
  const unique = albums && albums.filter(element => {
    const isDuplicate = uniqueAlbums.includes(element.title);
    
    if(!isDuplicate) {
      uniqueAlbums.push(element.title);
      return true;
    } 
    return false;
  });
  const searchedAlbums = unique && unique.map((album, idx) => <AlbumCard key={idx} album={album} addTo={addTo}/>);
  // const searchedAlbums = unique && unique.map((a) => <img key={a.title} src={a.cover_image} alt="oops"></img>);

  return (
    <>
    <h1 className="page-title">Add Album</h1>
      <input type="text" value={query} onChange={(evt) => setQuery(evt.target.value) } /><button onClick={searchAlbums} >search</button>
    <div className="mainAddDiv">
      <br />
      <div>showing results for: {query}</div>
      <br />
      <div>{searchedAlbums}</div>
    </div>
    <br />
    </>
  );
}