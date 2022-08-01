import DropDown from "./DropDown";

interface DropDownItemProps {
  children: JSX.Element | React.FC | string;
}

const DropDownItem = ({children}: DropDownItemProps): JSX.Element => {
  return (<>{children}</>);
}

export default DropDownItem;

<DropDown>
  <DropDown.Toggle /> { type: DropDown.Toggle, props: {}} => { type: DropDown.Toggle, props: { onClick}}
  <DropDown.Menu>
    <DropDown.Item></DropDown.Item>
    <DropDown.Item></DropDown.Item>
    <DropDown.Item></DropDown.Item>
  </DropDown.Menu>
</DropDown>