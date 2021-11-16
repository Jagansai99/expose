import React from "react";
import { useState } from "react";
import "./App.css";

function Form(props) {
  const clickHandler = (event) => {
    const value = event.target.value;
    console.log(value);
  };

  return (
    <div id="dropBox">
      <form id="form">
        <label className="span">Select Places:</label>
        <select onChange={clickHandler} id="select">
          <optgroup label="Indian States" id="opthover">
            <option id="disable"></option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Delhi">Delhi</option>
            <option value="Orissa">Orissa</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Telangana">Telangana</option>
          </optgroup>
        </select>
      </form>
    </div>
  );
}
export default Form;
