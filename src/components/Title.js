import React from 'react'
import './Title.css'

const Title = (props) => {
  return (  
    <div className="container-input-title">
      <input maxLength="25" onChange={props.handleChange} value={props.value} type="text" />
    </div>
  );
}
 
export default Title;