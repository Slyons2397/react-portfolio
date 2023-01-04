import App from "../App";

import "../App.css";
const Header = ({ link1, link2, link3 }) => {
  return (
    <div className="flex">
      <h1 className="header-link">{link1}</h1>
      <h1 className="header-link">{link2}</h1>
      <h1 className="header-link">{link3}</h1>
    </div>
  );
};

export default Header;
