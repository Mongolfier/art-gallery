import { useTranslation } from "react-i18next";

const Illustrations = () => {
  const { t } = useTranslation();

  return <div>{t("illustrations").toUpperCase()}</div>;
}

export default Illustrations;