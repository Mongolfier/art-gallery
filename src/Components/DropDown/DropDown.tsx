import { ReactNode, useState } from "react";

interface DropDownProps {
  menuItems: ReactNode[];
}


const DropDown = (props: DropDownProps) => {
  const { menuItems } = props;

  const [openedDD, setOpenedDD] = useState(false);

  return (
    <div className="DropDown">
      <button onClick={() => setOpenedDD(!openedDD)}>DropDown</button>
      {openedDD && (
        <div>
          {menuItems}
        </div>
      )}
    </div>
  );
}

export default DropDown;