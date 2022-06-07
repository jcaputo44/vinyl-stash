import searchedAlbums from '../../pages/AddAlbumPage/AddAlbumPage';
import { useState } from 'react';
import './AlbumCard.css'

export default function AlbumCard({album}) {
    const [collection, setCollection] = useState('');
    async function addTo() {
        const collection = await /////////////
        setCollection(collection);
        console.log(collection);
      }
      const newCollection = [];
      const newCol = collection && collection.filter(element => {
        const isDuplicate = newCollection.includes(element.title);
        
        if(!isDuplicate) {
          newCollection.push(element.title);
          return true;
        }
        return false;
      });

    return(
        <div className="card-div">
            <img key={album.title} src={album.cover_image} alt="oops"></img>
            <br />
            {album.title}
            <br />
            <button onClick={addTo}>Add to Collection</button>
            <br />
            <br />
        </div>
    );
}