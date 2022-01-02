import { Link } from "react-router-dom";
import { FunctionComponent } from "react";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <nav className='navbar'>
      <h1>The Big Tuto Blog</h1>
      <Link className='links' to='/'>
        Home
      </Link>
      <Link to='/create'>New Blog</Link>
    </nav>
  );
};

export default Navbar;
