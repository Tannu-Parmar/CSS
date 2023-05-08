import React from "react";

export const Form = ({ slot, HideForm, HandleData, LeaveTime }) => {
  let data = {};
  const handleSubmit = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    data = { ...data, [name]: value };
  };
  return (
    <div className="FormContainer">
      <div className="Form">
        <p onClick={() => HideForm(slot)}>
          <b>Slote : {slot}</b> x
        </p>
        <input
          onChange={handleSubmit}
          type="text"
          name="carNumber"
          id=""
          placeholder="carNumber"
        />
        <input
          onChange={handleSubmit}
          type="time"
          name="inTime"
          id=""
          placeholder="Time"
        />
        <button onClick={() => HandleData(data, slot)}>In</button>
        <button onClick={() => LeaveTime(slot)}>Out</button>
      </div>
    </div>
  );
};
