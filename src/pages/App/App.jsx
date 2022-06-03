import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AddAlbumPage from '../AddAlbumPage/AddAlbumPage';
import MyCollectionPage from '../MyCollectionPage/MyCollectionPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
        { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/collection/add" element={<AddAlbumPage />} />
              <Route path="/collection" element={<MyCollectionPage />} />
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
