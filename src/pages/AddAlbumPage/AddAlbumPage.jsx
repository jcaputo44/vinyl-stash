import { useState } from 'react';
import * as albumsAPI from '../../utilities/albums-api';
import './AddAlbumPage.css';

export default function AddAlbumPage() {
  const [query, setQuery] = useState('');
  const [albums, setAlbums] = useState('');
  async function searchAlbums() {
    const albums = await albumsAPI.search(query)
    setAlbums(albums);
    console.log(albums);
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
  const searchedAlbums = unique && unique.map((a) => <img key={a.title} src={a.cover_image} alt="oops"></img>);
  console.log(unique);

  return (
    <>
    <h1>Add Album</h1>
      <input type="text" value={query} onChange={(evt) => setQuery(evt.target.value) } /><button onClick={searchAlbums} >search</button>
    <div className="mainAddDiv">
      <br />
      <div>showing results for: {query}</div>
      <div>{searchedAlbums}</div>
    </div>
    <br />
    </>
  );
}