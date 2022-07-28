import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { db } from "../auth/firebase";
import { onValue, remove, ref, getDatabase } from "firebase/database";
// import Edited from "./Edited";

const Table = () => {
  const [dataList, setDataList] = useState([]);
  //! READ
  useEffect(() => {
    const concatListRef = ref(db, "concatList");
    onValue(concatListRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      for (let id in data) {
        dataList.push(data[id]);
      }
      console.log(dataList);
      setDataList(dataList);
    });
  }, []);

  //? DELETE
  const handleDeleteList = (id) => {
    remove(ref(db, "concatList/" + id));
  };
  return (
    <div className="tableStyled">
      <h3 className="bg-light border border-light p-2 rounded-pill">
        CONTACTS
      </h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserName</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Gender</th>
            <th scope="col">Edit</th>
            <th scope="col" className="text-center">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {dataList?.map((item) => {
            const { id, name, phone, gender } = item;

            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{gender}</td>
                <td>
                  <FaEdit
                    className="me-3 text-warning cursor-pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    // role={button}
                    // onClick={() => setEdited(item)}
                    size={20}
                  />
                </td>
                <td>
                  <AiFillDelete
                    className="text-danger"
                    onClick={() => handleDeleteList(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <Edited edited={edited} /> */}
    </div>
  );
};

export default Table;
