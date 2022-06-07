import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav className="nav-bar">
      <img className="VSL" src="https://i.imgur.com/7nG0VSX.png" alt="VSL" />
      &nbsp; &nbsp;
      <Link to="/collection">My Collection</Link>
      &nbsp; | &nbsp;
      <Link to="/collection/add">Add Album</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}