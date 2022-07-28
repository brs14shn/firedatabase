// import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
// import { db } from "../auth/firebase";
// import { onValue, ref } from "firebase/database";

const Main = () => {
  // const [dataList, setDataList] = useState([]);
  //*READ
  // useEffect(() => {
  //   const concatListRef = ref(db, "concatList");
  //   onValue(concatListRef, (snapshot) => {
  //     const data = snapshot.val();
  //     // console.log(data);
  //     for (let id in data) {
  //       dataList.push(data[id]);
  //     }
  //     console.log(dataList);
  //     setDataList(dataList);
  //   });
  // }, []);
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

//https://cw-axios-example.herokuapp.com/api/tutorials
