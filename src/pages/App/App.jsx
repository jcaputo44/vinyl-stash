import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
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
  const [albums, setAlbums] = useState([]);
  const [collection, setCollection] = useState([]);
  const navigate = useNavigate();

  async function addTo(albumObj) {
    const album = await albumsAPI.addAlbum(albumObj);
    setCollection([album, ...collection]);
    navigate('/collection');
  }

  useEffect(function () {
    async function showCollection() {
      const newCollection = await albumsAPI.getCollection();
      setCollection(newCollection);
    }
    if (user) {
      showCollection();
    } else {
      setCollection([]);
    }
  }, [user]);

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/collection/add" element={<AddAlbumPage addTo={addTo} albums={albums} setAlbums={setAlbums} />} />
            <Route path="/collection" element={<MyCollectionPage collection={collection} />} />
            <Route path="/collection/details/:id" element={<AlbumDetailsPage collection={collection} setCollection={setCollection} />} />
            <Route path="/*" element={<Navigate to="/collection" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
