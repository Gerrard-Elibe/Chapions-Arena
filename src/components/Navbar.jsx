import { FaTrophy } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaTrophy />
        <span>Champions Arena</span>
      </div>

      <ul className="nav-links">
        <li><a href="#players">Players</a></li>
        <li><a href="#fixtures">Fixtures</a></li>
        <li><a href="#results">Results</a></li>
        <li><a href="#standings">Standings</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;