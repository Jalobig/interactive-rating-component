import React, { Fragment, useState } from "react";
import SmallButton from "../Buttons/SmallButton";
import Button from "../Buttons/Button";
import StarIcon from "../../images/icon-star.svg";
import classes from "./Rating.module.scss";
import IconButton from "../Buttons/IconButton";

const Rating = (props) => {
  const [ratingChoice, setRatingChoice] = useState({
    numOne: false,
    numTwo: false,
    numThree: false,
    numFour: false,
    numFive: false,
  });
  const onChoiceHandler= (name) => {
    if (name === 'one'){
      setRatingChoice({
        numOne: true,
    numTwo: false,
    numThree: false,
    numFour: false,
    numFive: false,
      })
    }
    if (name === 'two'){
      setRatingChoice({
        numOne: false,
    numTwo: true,
    numThree: false,
    numFour: false,
    numFive: false,
      })
    }
    if (name === 'three'){
      setRatingChoice({
        numOne: false,
    numTwo: false,
    numThree: true,
    numFour: false,
    numFive: false,
      })
    }
    if (name === 'four'){
      setRatingChoice({
        numOne: false,
    numTwo: false,
    numThree: false,
    numFour: true,
    numFive: false,
      })
    }
    if (name === 'five'){
      setRatingChoice({
        numOne: false,
    numTwo: false,
    numThree: false,
    numFour: false,
    numFive: true,
      })
    }
  }
  return (
    <Fragment>
      <IconButton>
        <img src={StarIcon} alt="Star Icon" />
      </IconButton>
      <h1 className={classes.rating__heading}>How did we do?</h1>
      <p className={classes.rating__font}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form>
        <div className={classes.rating__row}>
          <SmallButton onClick={onChoiceHandler} name='one' className={ratingChoice.numOne && "active"}>1</SmallButton>
          <SmallButton onClick={onChoiceHandler} name='two' className={ratingChoice.numTwo && "active"}>2</SmallButton>
          <SmallButton onClick={onChoiceHandler} name='three' className={ratingChoice.numThree && "active"}>3</SmallButton>
          <SmallButton onClick={onChoiceHandler} name='four' className={ratingChoice.numFour && "active"}>4</SmallButton>
          <SmallButton onClick={onChoiceHandler} name='five' className={ratingChoice.numFive && "active"}>5</SmallButton>
        </div>
      </form>
      <Button onClick={()=>{props.submit(ratingChoice)}}>Submit</Button>
    </Fragment>
  );
};

export default Rating;
