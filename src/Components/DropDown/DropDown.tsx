import DropDownToggle from "./DropDownToggle";
import DropDownMenu from "./DropDownMenu";
import DropDownItem from "./DropDownItem";
import { Fragment, useState } from "react";

interface DropDownProps {
  // children: JSX.Element[] | string[];
  items: DropdownItems[];
  // components?: {
  //   item?: ComponentType<DropdownItemProps>,
  // }
  label: string;
}

const DropDown = ({children, label}: DropDownProps) => {

  const [isOpen, setIsOpen] = useState(false);

  const handlerToggle = () => {
    setIsOpen(!isOpen);
  }

  const children = React.Children.toArray(children);

  for (const child of children) {
    switch (child.type) {
      case DropDown.Toggle: {
        const clone = React.cloneElement(child);
        clone.props.onClick = handlerToggle;
        break;
      }
      case DropDown.Menu: {
        const clone = React.cloneElement(child);
        clone.props.onClick = handlerToggle;

        break;
      }
  }

  return (
  <>
    {clone}
    {/* <DropDownToggle onClick={handlerToggle} >{label}</DropDownToggle>
    <Fragment isOpen={isOpen}>{children}</Fragment> */}
  </>
  );
}

DropDown.Menu = DropDownMenu;
DropDown.Item = DropDownItem;

export default DropDown;