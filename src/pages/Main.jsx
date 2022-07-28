import React from "react";
import Form from "../components/Form";
import Table from "../components/Table";

const Main = () => {
  return (
    <div
      style={{ marginTop: "2rem", height: "80vh" }}
      className="container d-flex flex-column justify-content-around 
      align-items-center flex-md-row gap-5 "
    >
      <Form />
      <Table />
    </div>
  );
};

export default Main;
