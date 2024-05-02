import { useRef } from "react";
import "../../components/navbar/NavBar.css";

function NavBar() {
  const menuRef = useRef();
  function openNav(ev) {
    menuRef.current.classList.add("active");
  }

  function closeNav(ev) {
    menuRef.current.classList.remove("active");
  }

  return (
    <nav className="navbar">
      <a className="title" href="/">
        Portfolio
      </a>
      <div ref={menuRef} className="menu">
        <a href="#" onClick={closeNav}>
          X
        </a>
        <menu className="menuItems">
          <li>
            <a href="#">A propos</a>
          </li>
          <li>
            <a href="#">Expériences</a>
          </li>
          <li>
            <a href="#">Projets</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </menu>
      </div>
      <div className="burger" onClick={openNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default NavBar;
