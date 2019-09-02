import React from 'react';
import { SelectedInput } from './../styledcomponents';

const Select = ({ children, ...props }) => {
  return <SelectedInput {...props}>{children}</SelectedInput>;
};

Select.Option = ({ children, ...props }) => (
  <option {...props}>{children}</option>
);

export default Select;
