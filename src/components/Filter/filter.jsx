import {LabelFilter}from "components/Filter/Filret.style"
export const Filter = ({ value, onChange }) => {
  return (
    <LabelFilter>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </LabelFilter>
  );
};