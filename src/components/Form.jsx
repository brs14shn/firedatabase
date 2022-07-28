import { useState } from "react";
import { toastErrorNotify, toastSuccessNotify } from "../utils/customToastify";
import { db } from "../auth/firebase";
import { push, ref, set } from "firebase/database";

const Form = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("email"))
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  //*write
  const writeUserData = () => {
    const concatListRef = ref(db, "concatList");
    // console.log(concatListRef);
    const newConcatRef = push(concatListRef);
    set(newConcatRef, {
      name: name,
      phone: phone,
      gender: gender,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !gender) {
      toastErrorNotify("Please provide value in each input field");
    } else {
      writeUserData();
      toastSuccessNotify("Successfly added");
    }
  };
  return (
    <div className="mt-3 formStyled ">
      <h3 className="bg-light border border-light p-2 rounded-pill">
        ADD CONTACT
      </h3>
      <div>
        <form className="p-3" onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control"
              id="phone-number"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <select
              className="custom-select mb-3 w-100 p-1"
              onChange={(e) => setGender(e.target.value)}
              id="select-gender"
            >
              <option selected>Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success w-75 p-2">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
