import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const EmploymentApplicationForm: React.FC = () => {
  return (
    <div className="employment-application__form">
      <Row>
        <Col>
          <h3 className="employment-application__form__title">
            Apply as Employee
          </h3>
        </Col>
      </Row>
      <Form>
        <Row className="employment-application__form__item">
          <Col>
            <Form.Control
              className="form__input"
              type="text"
              placeholder="First Name *"
            />
            <Form.Control
              className="form__input"
              type="text"
              placeholder="Last Name *"
            />
            <Form.Control
              className="form__input"
              type="password"
              placeholder="Password *"
            />
            <Form.Control
              className="form__input"
              type="password"
              placeholder="Confirm Password *"
            />
          </Col>
          <Col>
            <Form.Control
              className="form__input"
              type="email"
              placeholder="Your Email *"
            />
            <Form.Control
              className="form__input"
              type="tel"
              placeholder="Your Phone *"
            />
            <Form.Control className="form__input" as="select">
              <option>Select Security Question</option>
              <option>What was your childhood nickname?</option>
              <option>
                In what city did you meet your spouse/significant other?
              </option>
              <option>
                What is the name of your favorite childhood friend?
              </option>
              <option>What street did you live on in third grade?</option>
              <option>What is the middle name of your youngest child?</option>
              <option>What is your oldest sibling's middle name?</option>
              <option>What school did you attend for sixth grade?</option>
              <option>What is your oldest cousin's first and last name?</option>
            </Form.Control>
            <Form.Control
              className="form__input"
              type="text"
              placeholder="Enter Your Answer *"
            />
          </Col>
        </Row>
        <Row
          xs={4}
          md={6}
          lg={8}
          className="employment-application__form__item"
        >
          <Col>
            <Form.Check type="radio" id="default-radio" label="Male" />
          </Col>
          <Col>
            <Form.Check type="radio" label="Female" id="default-radio" />
          </Col>
        </Row>
        <Row className="employment-application__form__item">
          <Col>
            <Button className="form__submit float-right" variant="primary" type="submit">
              Register
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default EmploymentApplicationForm;
