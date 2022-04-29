import React from "react";
import db from '../firebase'
import firebase from 'firebase';
import {
    CheckBoxOutlineBlank,
    StarBorder,
    LabelOutlined,
    Delete
  } from "@material-ui/icons";
  import '../css/emaillist.css'
  import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { openMessage } from "../features/mailSlice";

const Emailbody = ({id,name, email, subject,message,time}) => {

// console.log("sad",id)
  const history = useHistory();
const dispatch=useDispatch()

const setMail = () =>{
  dispatch(openMessage({
    id,
    name,
    subject, 
    message,
    email,
    time
  }))

  history.push('/mail');
}

const handleDelete=(value)=>{
console.log(value)
db.collection("emails").doc(value).delete();
}

  return (
    <div className="emailbody" >
      <div className="emailbody__left" onClick={()=>setMail()}>
<CheckBoxOutlineBlank />
<StarBorder />
<LabelOutlined />
<h4>{name}</h4>
      </div>
      <div className="emailbody__middle" onClick={()=>setMail()}>
<div className="emailbody__msg">
    <p><b>{subject}:</b>{message}</p>

</div>

      </div>
      <div className="emailbody__right">
        <Delete className="delete_btn" onClick={()=>handleDelete(id)}/>
<p>{time}</p>
      </div>
    </div>
  );
};

export default Emailbody;
