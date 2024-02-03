import React, { useState } from "react";
import deta from "./deta";
import './index.css';

const Paragraph = () => {
  const [count, setcount] = useState(0);
  const [text, settext] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    let newcount = parseInt(count);
    console.log(typeof newcount);
    if(newcount <= 0){
        alert('VALUE SHOULD BE GREATER THEN 0')
    }if(newcount > 8){
        newcount = 8;
    }
    settext(deta.slice(0, newcount))
  };

  return (
    <article className="center-container">
      <h2>generate paragraph's</h2>
      <form className="form-page" onSubmit={handlesubmit}>
        <label htmlFor="amount"></label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setcount(e.target.value)}
        ></input>
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <div className="show-text">
        {text.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Paragraph;
