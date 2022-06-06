import { useState } from 'react';
import * as albumsAPI from '../../utilities/albums-api';
import './AddAlbumPage.css';

export default function AddAlbumPage() {
  const [query, setQuery] = useState('');
  const [albums, setAlbums] = useState('');
  async function searchAlbums() {
    const albums = await albumsAPI.search(query)
    console.log(albums);
  }
  return (
    <>
    <h1>Add Album</h1>

      <input type="text" value={query} onChange={(evt) => setQuery(evt.target.value) } /><button onClick={searchAlbums} >search</button>
    <div className="mainAddDiv">
    </div>
    <br />
    </>
  );
}