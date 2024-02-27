//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import "./styles.scss";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    if (getCurrentId === selected) {
      setSelected(null);
    } else {
      setSelected(getCurrentId);
    }
  }
  function handleTitleDivClass(dataItem) {
    let className;
    if (enableMultiSelection === false) {
      className = `title ${selected === dataItem.id ? "active" : ""}`;
      return className;
    } else {
      className = ` title ${
        multiple.indexOf(dataItem.id) !== -1 ? "active" : ""
      }`;
      return className;
    }
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);
    setMultiple(cpyMutiple);
  }

  const toggleActiveClassButton = (event) => {
    if (event.target.classList.contains("active")) {
      event.target.classList.remove("active");
    } else {
      console.log(selected);
      event.target.classList.add("active");
    }
  };
  return (
    <div className="acc-wrapper">
      <button
        onClick={(event) => {
          setEnableMultiSelection(!enableMultiSelection);
          toggleActiveClassButton(event);
        }}
      >
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? (event) => {
                        // The event object is automatically provided by React when the event handler is invoked.
                        handleMultiSelection(dataItem.id);
                      }
                    : (event) => {
                        handleSingleSelection(dataItem.id);
                      }
                }
                className={handleTitleDivClass(dataItem)}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}
