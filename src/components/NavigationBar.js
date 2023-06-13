import "./css/NavigationBar.css"
import SearchInput from "./SearchInput";
import { useState } from "react";
import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import UserInfo from "./UserInfo";
import NavLinks from "./NavLinks";

const NavigationBar = ({ user }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <nav className="navigation-bar">
      <div className="container">
        <div className="content">
          <Logo title="Students" imageSrc="images/logo.png" />
          <div className="groupOne">
            <SearchInput value={searchValue} onChange={handleSearchChange} />
            <BurgerMenu user={user} />
            <div className="groupTwo">
              <NavLinks />
              <UserInfo user={user} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavigationBar