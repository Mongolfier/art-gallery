import { memo, MouseEventHandler } from "react";

interface DropDownToggleProps {
  children: JSX.Element | string;
  onClick: MouseEventHandler;
}

const DropDownToggle = memo(({children, onClick}: DropDownToggleProps): JSX.Element => {
  return (<button onClick={onClick}>{children}</button>
  );
})

export default DropDownToggle;