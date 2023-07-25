import React from 'react'
import classes from './IconButton.module.scss'

const IconButton = (props) => {
  return (
    <button className={classes['icon-button']}>{props.children}</button>
  )
}

export default IconButton