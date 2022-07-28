import { useState } from "react";
import { toastErrorNotify, toastSuccessNotify } from "../utils/customToastify";

const Form = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("email"))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      toastSuccessNotify("Yeni bilgi eklendi");
    } else {
      toastErrorNotify("Login olunuz");
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
              placeholder="Name"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control"
              id="phone-number"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <select className="custom-select mb-3 w-100 p-1" id="select-gender">
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
