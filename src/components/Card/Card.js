import React, { useState } from "react";
import classes from "./Card.module.scss";
import Submitted from "../Rating/Submitted";
import Rating from "../Rating/Rating";

const Card = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState('0')
  const formHandler = (choiceObj) => {
    if (choiceObj.numOne === true) {setRating('1')}
    if (choiceObj.numTwo === true) {setRating('2')}
    if (choiceObj.numThree === true) {setRating('3')}
    if (choiceObj.numFour === true) {setRating('4')}
    if (choiceObj.numFive === true) {setRating('5')}
    
    setIsSubmitted(true)
  }
  return (
    <div className={classes.card}>
      {isSubmitted ? <Submitted  rating={rating}/> : <Rating submit={formHandler}/>}
    </div>
  );
};

export default Card;
