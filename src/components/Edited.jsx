import React, { useState, useEffect } from "react";

const Edited = ({ edited }) => {
  const { name: newName, phone: newPhone } = edited;

  const [name, setName] = useState(newName);
  const [phone, setPhone] = useState(newPhone);

  //? https://reactjs.org/docs/hooks-reference.html#usestate
  //! State degiskeninin degeri, 1.render ile initialState
  //! parametresinin ilk degerini alir. Dolayisiyle bu durumda
  //! prop'tan gelen ilk deger state'e aktarilir.
  //! Sonradan degisen props degerleri useState'e aktarilmaz.
  //! Eger props'tan gelen degerleri her degisimde useState'e
  //! aktarmak istersek useEffect hook'unu componentDidUpdate
  //! gibi kullanabiriz.

  useEffect(() => {
    setName(newName);
    setPhone(newPhone);
  }, [newName, newPhone]);

  return (
    <div className="modal" tabIndex="-1" id="edit-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Phone Number"
                value={phone || ""}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              //   onClick={handleSave}
              data-bs-dismiss="modal"

              //! en altta olmalı
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edited;
