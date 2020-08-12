import React from "react";

const ToggleButton: React.FC = () => {
  return (
    <div className="can-toggle">
    <input id="toggle-on" className="toggle toggle-left" name="toggle" value="false" type="radio" checked />
    <label htmlFor="toggle-on" className="btn">Employee</label>
    <input id="toggle-off" className="toggle toggle-right" name="toggle" value="true" type="radio" />
    <label htmlFor="toggle-off" className="btn">Hirer</label>
    </div>
  );
};

export default ToggleButton;
