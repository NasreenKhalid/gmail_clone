import React from 'react'
import '../css/Sidebaroptions.css'
import { useHistory } from 'react-router-dom';

const Sidebaroptions = ({Icon,title,number,selected,sent}) => {
 
 
 

  return (
    <div className={`sidebarOptions ${selected && 'sidebaroptions--active'}`}>
     <Icon />
     <h4>{title}</h4>
      <p>{number}</p>
    </div>
  )
}

export default Sidebaroptions