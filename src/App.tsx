import React, { useState } from "react";
import BooksTable from "./components/booksTable";
import BooksForm from "./components/booksForm";

function App() {
  const [booksNumber, setBooksNumber] = useState(0);
  const [books, setbooks] = useState([]); //é iniciado assim por que é um objeto

  return (
    <div className="App">
      <h1>TESTE</h1>
      <BooksTable></BooksTable>
      <h2>Teste 2</h2>
      <BooksForm></BooksForm>
    </div>
  );
}

export default App;
