import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

function BooksForm() {
  const inputs = ["Id", "Name", "Author", "Stock"];

  return (
    <React.Fragment>
      <FormControl>
        <InputLabel id={inputs[1]}>{inputs[1]}</InputLabel>
      </FormControl>
    </React.Fragment>
  );
}

export default BooksForm;
