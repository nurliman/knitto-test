import React from "react";

import ToggleButton from "./ToggleButton";
import EmploymentApplicationForm from "./EmploymentApplicationForm";

const EmploymentApplication: React.FC = () => {
  return (
    <div className="employment-application">
      <div className="employment-application__container-right">
        <ToggleButton />
        <EmploymentApplicationForm />
      </div>
    </div>
  );
};

export default EmploymentApplication;
