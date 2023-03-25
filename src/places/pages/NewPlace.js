import React, { useCallback } from "react";

import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators.js";
import "./NewPlace.css";

const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {});
  const descriptionInputHandler = useCallback((id, value, isValid) => {});

  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={titleInputHandler}
      />
      <Input
        element="testarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (Min Length is 5)."
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;
