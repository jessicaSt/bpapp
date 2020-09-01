import React from "react";
import MUIDataTable from "mui-datatables";

type Props = {};

const BooksTable: React.FC = () => {
  const columns = ["Id", "Name", "Author", "Stock"];

  const data = [
    ["1", "Jõao e o pé de Feijão", "Maria", "2"],
    ["2", "Chapeuzinho Vermelho", "Lobo Mau", "1"],
    ["3", "Os Três Porquinhos", "Lobo Mau", "3"],
  ];

  const options = {
    serverSide: false,
    onTableChange: () => {
      console.log("Change!!!!");
    },
  };

  return (
    <React.Fragment>
      <h1>Books Table</h1>
      <MUIDataTable title={"Books List"} data={data} columns={columns} options={options} />
    </React.Fragment>
  );
};

export default BooksTable;
