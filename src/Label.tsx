import React, { useState } from "react";


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
    <form>
      <div>
        <div>
          <label htmlFor="name">Name of User:</label>
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
