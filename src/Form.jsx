import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [showValueForm, setShowFormValue] = useState(false);
  const [selectOption, setSelectionOption] = useState("");
  const [newValue, setNewValueInput] = useState([]);

  const toggleNewValueForm = () => {
    setShowFormValue(!showValueForm);
  };
  const handleSelectOption = (e) => {
    setSelectionOption(e.target.value);
  }
  // const handleTextChange = () => {

  // };

  return (
    <div>
      <form>
        <label htmlFor="" type="text"> Values </label>
        <input id="values" name="values" type="text" />
        <select id="operation" name="operation" onChange={handleSelectOption}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p></p>
      </section>
    </div>
  );
}

export default Form;