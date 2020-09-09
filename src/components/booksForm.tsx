import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

function BooksForm() {
  const inputs = ["Id", "Name", "Author", "Stock"];
  const inputs2 = {
    id: ["id", "id"],
    name: ["name", "name"],
    author: ["author", "name"],
    stock: ["author", "number"],
  };

  return (
    <React.Fragment>
      <h1>Add Books</h1>
      {inputs.map((inputs) => (
        <div>
          <FormControl>
            <InputLabel className={inputs} id={inputs}>
              {inputs}
            </InputLabel>
            <Input id={inputs} aria-describedby={inputs} />
            <FormHelperText id={inputs}>Obrigatório</FormHelperText>
          </FormControl>
        </div>
      ))}
    </React.Fragment>
  );
}

export default BooksForm;
