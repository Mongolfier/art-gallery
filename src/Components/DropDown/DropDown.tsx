import DropDownToggle from "./DropDownToggle";
import DropDownMenu from "./DropDownMenu";
import DropDownItem from "./DropDownItem";

interface DropDownProps {
  children: JSX.Element[] | string[];
}

const DropDown = ({children}: DropDownProps) => {
  return <>{children}</>;
}

DropDown.Toggle = DropDownToggle;
DropDown.Menu = DropDownMenu;
DropDown.Item = DropDownItem;

export default DropDown;