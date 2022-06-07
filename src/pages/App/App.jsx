import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as albumsAPI from '../../utilities/albums-api';
import AuthPage from '../AuthPage/AuthPage';
import AddAlbumPage from '../AddAlbumPage/AddAlbumPage';
import MyCollectionPage from '../MyCollectionPage/MyCollectionPage';
import AlbumDetailsPage from '../AlbumDetailsPage/AlbumDetailsPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  const [albums, setAlbums] = useState('');
  const [collection, setCollection] = useState('');
    async function addTo(album) {
        const collection = await albumsAPI.addAlbum(album)
        // setCollection(collection);
        console.log(collection);
      }
  return (
    <main className="App">
        { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/collection/add" element={<AddAlbumPage albums ={albums} setAlbums={setAlbums} addTo={addTo}/>} />
              <Route path="/collection" element={<MyCollectionPage />} />
              <Route path="/collection/details" element={<AlbumDetailsPage />} />
              <Route path="/*" element={<Navigate to="/collection" /> } />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
        }
    </main>
  );
}

export default App;
