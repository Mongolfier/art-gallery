interface DropDownItemProps {
  children: JSX.Element | string;
}

const DropDownItem = ({children}: DropDownItemProps): JSX.Element => {
  return (<li>{children}</li>);
}

export default DropDownItem;