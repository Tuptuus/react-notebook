import React from 'react'
import './Title.css'

const Title = (props) => {
  return (  
    <div className="container-input-title">
      <input maxLength="25" placeholder="Wpisz tytuł notatki" onChange={props.handleChange} value={props.title} type="text" />
    </div>
  );
}
 
export default Title;