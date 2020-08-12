import React from "react";

import { Modes } from "../types";

const ToggleButton: React.FC<{
  setMode: React.Dispatch<React.SetStateAction<Modes>>;
}> = ({ setMode }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      setMode("Employee");
    } else {
      setMode("Hirer");
    }
  };

  return (
    <div className="can-toggle toggle-theme-1 mb-2 mt-2">
      <input onChange={handleChange} id="d" type="checkbox" />
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
