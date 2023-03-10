import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Toolbar,
  Sort,
  Filter,
  Edit,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => (
  <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Customers" />
    <GridComponent
      id="gridcomp"
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={["Delete"]}
      selectionSettings={{ persistSelection: true }}
      editSettings={{
        allowDeleting: true,
        allowEditing: true,
        // allowAdding: true,
      }}
      width="auto"
    >
      <ColumnsDirective>
        {customersGrid.map((item, i) => (
          <ColumnDirective key={i} {...item} />
        ))}
      </ColumnsDirective>
      <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
    </GridComponent>
  </div>
);

export default Customers;
