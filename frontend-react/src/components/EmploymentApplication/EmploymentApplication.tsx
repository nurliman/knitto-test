import React from "react";
import ToggleButton from "./ToggleButton";

const EmploymentApplication: React.FC = () => {
  return (
    <div className="employment-application">
      <div className="employment-application__container-right">
        <ToggleButton />
        <h1>Apply as Employee</h1>
      </div>
    </div>
  );
};

export default EmploymentApplication;
