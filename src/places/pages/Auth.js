import React from "react";
import { useForm } from "../../shared/hooks/form-hook";
import "./Auth.css";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <Card ClassName="authenticate">
      <form onSubmit={authSubmitHandler}>
        <Input
          element="input"
          type="email"
          id="email"
          label="Email"
          validators={[VALIDATOR_REQUIRE, VALIDATOR_EMAIL]}
          errorText="Please Add a valid Email Address..."
          onInput={inputHandler}
        ></Input>
        <Input
          element="input"
          type="password"
          id="password"
          label="Password"
          validators={[VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH(5)]}
          errorText="Please Add a valid Password. at least 5 character..."
          onInput={inputHandler}
        ></Input>
        <Button type="submit" disabled={!formState}>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
