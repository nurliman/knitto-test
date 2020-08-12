import React from "react";

const ToggleButton: React.FC = () => {
  return (
    <div className="can-toggle toggle-theme-1">
      <input id="d" type="checkbox" />
      <label htmlFor="d">
        <div
          className="can-toggle__switch"
          data-checked="Hirer"
          data-unchecked="Employee"
        />
      </label>
    </div>
  );
};

export default ToggleButton;
