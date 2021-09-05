import React from 'react';
import './Notes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faTrash} />

const Notes = (props) => {
  const notes = props.notes.map(item=><div key={item.id} className="square">
    <h3 onClick={props.select.bind(this, item.id)} className="title">{item.title}</h3>
    {/* <h3 className="note-id">#{item.id}</h3> */}
    <p onClick={props.delete.bind(this, item.id)} className="delete">{element}</p>
    <p className="date">{item.date.getDate()}/{item.date.getMonth()+1}/{item.date.getFullYear()}</p>
  </div>)
  return (
    <>
      {notes}
    </>
  );
}
 
export default Notes;