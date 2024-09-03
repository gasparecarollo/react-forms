import React, { useState } from "react";
import "./Form.css";


//number
//operation
//result 

function Form() {

  const [numbers, setNumbers] = useState("");

  const [operation, setOperation] = useState("");

  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
   
const numArray = numbers.split(",").map(Number);

let calculatedResult = 0;

    if (operation === "sum") {
      calculatedResult = numArray.reduce((acc, num) =>  acc, num, 0);
    } else if (operation === "average") {
      calculatedResult = numArray.length > 0 ? numArray.reduce((acc, num) => acc + num, 0) /numArray.length : 0;
    } else if (operation === "mode") {
      const frequency = {};
      numArray.forEach((num) => {
        frequency[num] = (frequency[num] || 0) + 1
      });
      calculatedResult= Object.keys(frequency).reduce((a,b)=> (frequency[a]> frequency[b] ? a : b ));
    } ; 
    setResult(calculatedResult);
  }


  // const handleOperationChange = (e) => {
  //   if (e.target.id === "num") {
  //     setResult({ ...setResult, name: e.target.value })
  //   } else if (e.target.id === "average") {
  //     setResult({ ...setResult, name: e.target.value })
  //   } else if (e.target.id === "mode") {
  //     setResult({ ...setResult, name: e.target.value })
  //   }
  // }

  const handleTextChange = (e) => {
    setNumbers(e.target.value);
  }
const handleResultChange = (e) => {
  setOperation(e.target.value);
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h2>Calculate</h2>
        <label> Numbers separated by commas 
        <input type="text" value={numbers} onChange={handleTextChange} />
       </label>
        <input value={operation} onChange={handleResultChange} />
        <label> Operations</label>
        <select value="operation" name="operation" onChange={handleOperationChange}>
          <option value="">Select an Operation</option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>

        <button type="submit">Calculate</button>
{result !== null && <p> Result: {result } </p>}
      </form>
      <section id="result">
        <p></p>
      </section>
    </div>
  );
}

export default Form;