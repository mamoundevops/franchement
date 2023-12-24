import React from "react";

const SecondTemplate = (props) => {
  const helpcontent = props.arr;
  return (
    <div>
      {" "}
      {helpcontent.map((item, index) => {
        return (
          <details key={index}>
            <summary>{item.title}</summary>
            <span className="summarycontent">{item.content}</span>
          </details>
        );
      })}
    </div>
  );
};

export default SecondTemplate;
