import React from "react";
import DropDownItem from "./DropDownItem";

interface DropDownMenuProps {
  children: JSX.Element[] | React.FC[] | string[];
  isOpen: boolean;
}

const DropDownMenu = ({children}: DropDownMenuProps) => {
  return (
    children.map((menuItem: JSX.Element | string | React.FC) => <DropDownItem>{menuItem}</DropDownItem> )
  );
}

export default DropDownMenu;