import React,{useState} from "react";

import { Button } from "react-bootstrap";

import ToggleButton from "./ToggleButton";
import EmploymentApplicationForm from "./EmploymentApplicationForm";

import { ReactComponent as RocketIcon } from "./rocket.svg";

import { Modes } from "./types";

const EmploymentApplication: React.FC = () => {
    const [mode, setMode] = useState<Modes>("Employee");


  return (
    <div className="employment-application">
      <div className="employment-application__container-left">
        <i className="employment-application__container-left__item icon">
          <RocketIcon className="icon--rocket" />
        </i>
        <h4 className="employment-application__container-left__item">
          Welcome
        </h4>
        <p className="employment-application__container-left__item">
          You are 30 seconds away
          <br />
          from earning your own
          <br />
          money!
        </p>
        <Button
          className="employment-application__container-left__item employment-application__container-left__button"
          variant="light"
        >
          Login
        </Button>
      </div>
      <div className="employment-application__container-right">
        <ToggleButton setMode={setMode} />
        <EmploymentApplicationForm mode={mode} />
      </div>
    </div>
  );
};

export default EmploymentApplication;
