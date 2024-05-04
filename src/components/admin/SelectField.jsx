// import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledSelect = styled.select`
  width: 105%; 
  border-radius: 7px;
  padding: 9px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
`;

// chức năng của Component từ SelectField
const SelectField = ({ id, value, onChange, options }) => {
  return (
    <StyledSelect
      id={id}
      value={value}
      onChange={onChange}
      required
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

// Xác nhận kiểu dữ liệu của props
SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default SelectField;
