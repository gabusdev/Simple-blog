import { FunctionComponent } from "react";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <nav className='navbar'>
      <h1>The Big Tuto Blog</h1>
      <a className='links' href='/'>
        Home
      </a>
      <a
        href='/new'
        style={{
          color: "white",
          backgroundColor: "#f1356d",
          borderRadius: "8px",
        }}
      >
        New
      </a>
    </nav>
  );
};

export default Navbar;
