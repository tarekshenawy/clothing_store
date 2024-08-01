import React from 'react';
import "./Title.css";

export default function Title(props) {
  return (
    <div className='title'>
          <h1>{props.title}</h1>
          <hr></hr>

    </div>
  )
}
