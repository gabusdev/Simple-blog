import { FunctionComponent } from "react";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <nav className='navbar'>
      <h1>The Big Tuto Blog</h1>
      <a className='links' href='/'>
        Home
      </a>
      <a href='/new'>New Blog</a>
    </nav>
  );
};

export default Navbar;
