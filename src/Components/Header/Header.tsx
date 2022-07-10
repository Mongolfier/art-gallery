import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import DropDown from "../DropDown/DropDown";

import "./Header.scss";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header
      className="Header"
    >
      <nav>
        <Link to="/">{t("illustrations")}</Link>
        <Link to="animations">{t("animations")}</Link>
      </nav>

      <DropDown menuItems={
        [
          <div>1</div>,
          <div>2</div>,
        ]
      }/>
    </header>
  );
}

export default Header;