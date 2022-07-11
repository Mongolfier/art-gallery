import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
    </header>
  );
}

export default Header;