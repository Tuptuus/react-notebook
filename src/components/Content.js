import React from 'react';
import './Content.css'

const Content = (props) => {
  return (
    <div className="container-area">
      <textarea onChange={props.handle} value={props.content} placeholder="Treść twojej notatki" name="" id="" cols="30" rows="10"></textarea>
    </div>
  );
}
 
export default Content;