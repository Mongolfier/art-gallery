interface DropDownItemProps {
  children: JSX.Element | React.FC | string;
}

const DropDownItem = ({children}: DropDownItemProps): JSX.Element => {
  return (<>{children}</>);
}

export default DropDownItem;