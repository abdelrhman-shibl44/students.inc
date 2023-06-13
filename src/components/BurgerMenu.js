import { useState } from "react";
import "./css/BurgerMenu.css"
import UserInfo from "./UserInfo";
import NavLinks from "./NavLinks";
const BurgerMenu = ({ user }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "self-start",
    gap: "1rem",
    padding: "25px 0"
  }
  return (
    <div className="burger-menu">
      <div className={`burger ${isMenuOpen ? 'open' : ''}`} onClick={handleBurgerClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isMenuOpen && (
        <div className="menu-links">
          <UserInfo user={user} />
          <NavLinks style={style} />
        </div>
      )}
    </div>
  );
};
export default BurgerMenu