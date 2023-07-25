import React from "react";
import ThankYou from "../../images/illustration-thank-you.svg";
import classes from "./Submitted.module.scss";

const Submitted = (props) => {
  return (
    <div className={classes.submitted}>
      <img
        src={ThankYou}
        alt="illustration thank you"
        className={classes.illustration}
      />
      <div className={classes.selection}>You selected {props.rating} out of 5</div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Submitted;
