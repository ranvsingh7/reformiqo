import React from "react";
import "./Customers.scss";
import { Table } from "antd";

const Customer = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      phone: "9999988888",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      phone: "9999999999",
    },
    {
      key: "3",
      name: "Ash",
      age: 24,
      address: "10 Downing Street",
      phone: "9999999999",
    },
    // ...
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
  ];
  return (
    <div className="customers">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Customer;
