import { useTranslation } from "react-i18next";

const Animations = () => {
  const { t } = useTranslation();

  return <div>{t("animations").toUpperCase()}</div>;
}

export default Animations;