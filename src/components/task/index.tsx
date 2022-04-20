import React from "react";
import "./style.scss";

function Task({ data, check, remove }) {
  return (
    <div className="taskContainerInner">
      <div className="taskLeft">
        <input type="checkbox" onChange={() => check(data)} />
        <p
          style={
            data.isComplete
              ? { color: "#888", textDecoration: "line-through" }
              : {}
          }
          className="taskText"
        >
          {data.title}
        </p>
      </div>
      <button className="removeBtn" onClick={() => remove(data)}>
        Del
      </button>
    </div>
  );
}

export default Task;
