import React from "react";
import classes from "./SmallButton.module.scss";

const SmallButton = (props) => {

  return (
    <button onClick={(e)=> {
      e.preventDefault()
      props.onClick(props.name)
    }}
      className={`${classes["small-button"]} ${classes[props.className]}`}
    >
      {props.children}
    </button>
  );
};

export default SmallButton;
