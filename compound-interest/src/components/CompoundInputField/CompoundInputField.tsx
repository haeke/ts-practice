import React from "react";

// This component is used to render the individual compound input fields, included are the label, input and small HTML elements that are to be included for each compound input.

const CompoundInputField: React.SFC<{
  labelName: string;
  inputName: string;
  inputValue: string | number;
  inputType: string;
  placeholderName: string;
  inputDescription: string;
  handleChange: (event: any) => void;
}> = ({
  labelName,
  inputName,
  inputValue,
  inputType,
  placeholderName,
  inputDescription,
  handleChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={labelName}>{labelName}</label>
      <input
        type={inputType}
        name={inputName}
        value={inputValue}
        onChange={handleChange}
        className="form-control"
        placeholder={placeholderName}
      />
      <small className="form-text text-muted">{inputDescription}</small>
    </div>
  );
};

export default CompoundInputField;
