import { useTranslation } from "react-i18next";
import DropDown from "../../Components/DropDown/DropDown";

const Animations = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>{t("animations").toUpperCase()}</div>

      <DropDown label="Меню">
        <DropDown.Item>LUL</DropDown.Item>
        <DropDown.Item>Eeee</DropDown.Item>
        <DropDown.Item>Ssss</DropDown.Item>
      </DropDown>
    </>
  )
}

export default Animations;