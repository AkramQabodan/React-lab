import { Link } from "react-router-dom";
import "./index.css";
const NavBar = () => {
  return (
    <nav>
      <ul className="navList">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/counter">
          Counter
        </Link>
        <Link className="navLink" to="/shop">
          Shop
        </Link>

        <Link className="navLink" to="/about">
          About
        </Link>
        <Link className="navLink" to="/todo">
          ToDo-List
        </Link>
      </ul>
    </nav>
  );
};
export default NavBar;
