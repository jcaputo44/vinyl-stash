import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="nav-bar">
      <img className="VSL" src="https://i.imgur.com/7nG0VSX.png" alt="VSL" />
      &nbsp; &nbsp;
      <Link to="/collection" className="nav-butt">My Collection</Link>
      &nbsp; | &nbsp;
      <Link to="/collection/add" className="nav-butt">Add Albums</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut} className="nav-butt">Log Out</Link>
    </nav>
  );
}