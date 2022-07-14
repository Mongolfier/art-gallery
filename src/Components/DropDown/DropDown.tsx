import DropDownToggle from "./DropDownToggle";
import DropDownMenu from "./DropDownMenu";
import DropDownItem from "./DropDownItem";
import { Fragment, useState } from "react";

interface DropDownProps {
  children: JSX.Element[] | string[];
  label: string;
}

const DropDown = ({children, label}: DropDownProps) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const handlerToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
  <>
    <DropDownToggle onClick={handlerToggle} >{label}</DropDownToggle>
    <Fragment isOpen={isOpen}>{children}</Fragment>
  </>
  );
}

DropDown.Menu = DropDownMenu;
DropDown.Item = DropDownItem;

export default DropDown;