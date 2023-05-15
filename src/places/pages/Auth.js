import React, { useState } from "react";
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
  const [isLoginMode, setIsLoginMode, setFormData] = useState(true);

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
  const switchModeHandler = (event) => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: undefined,
            isValid: false,
          },
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((preMode) => !preMode);
  };
  return (
    <Card ClassName="authenticate">
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            type="text"
            id="name"
            label="Name"
            validators={[VALIDATOR_REQUIRE]}
            errorText="Please Add a Name"
            onInput={inputHandler}
          ></Input>
        )}
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
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
        <Button type="submit" inverse onClick={switchModeHandler}>
          Switch to {!isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
