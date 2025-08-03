import React from "react";
import { DataTable } from "./data-table";
import { columns, Payment } from "./columns";

const TransactionsPage = () => {
  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed5s2f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728esd52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
  return (
    <div className="py-5">
      <DataTable columns={columns} data={data} key={"transactions-table"} />
    </div>
  );
};

export default TransactionsPage;
