import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDilQ0x9rnmDtek8CLHiQ9IGVW9GL93IhY",
  authDomain: "grid-collab-785f7.firebaseapp.com",
  databaseURL: "https://grid-collab-785f7-default-rtdb.firebaseio.com",
  projectId: "grid-collab-785f7",
  storageBucket: "grid-collab-785f7.appspot.com",
  messagingSenderId: "379846720192",
  appId: "1:379846720192:web:a4327a2c466a68bcb10b25",
  measurementId: "G-94V3YFSWKZ",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

function Label() {
  const [formData, setFormData] = useState({
    name: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    db.ref("messages").push(formData);
    console.log(formData);

    setFormData({
      name: "",
    });
    setSubmitSuccess(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="name">North:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="m-5"
          />
          <button type="submit">+</button>
        </div>
      </div>
      {submitSuccess && <p>Form submitted successfully!</p>}
    </form>
  );
}

export default Label;
