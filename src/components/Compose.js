import React,{useState} from 'react'
import emailjs from 'emailjs-com';
import axios from "axios"
import '../css/compose.css'
import {
    Remove,
    Height,
    Close,
    ArrowDropDown,
    FormatColorText,
    AttachFile,
    InsertEmoticon,
    NoteAdd,
    Photo,
    PhonelinkLock,
    Create,
    MoreVert,
    Delete,
  } from "@material-ui/icons";
import { useDispatch, useSelector } from 'react-redux';
import {closeSendMessage} from '../features/mailSlice'
import db from '../firebase'
import firebase from 'firebase';
import { selector } from '../features/userSlice';
// import * as firebase from "firebase/app";

const Compose = () => {

  const [to,setTo] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");
  const [ sent, setSent ] = useState(false);


const dispatch = useDispatch();
const user = useSelector(selector)

const formSubmit= async (e)=>{
e.preventDefault();
setSent(true)
if(to === ''){
  return alert ("Recipients field is required")
}
if(subject === ''){
  return alert ("Subject is required")
}
if(message === ''){
  return alert ("Message is required")
}

const id = firebase.firestore().collection('emails').doc().id

db.collection("emails").add({
  id:id,
  to,
  subject,
  message,
  from:user.email,
  fromName:user.displayName,
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
});


try {
  await axios.post("http://localhost:4000/send_mail", {
  to,  
  subject,
    message
  })
} catch (error) {
  console.error(error)
}



setTo("");
setSubject("");
setMessage("");
alert('Email sent successfully');
dispatch(closeSendMessage());

}

  return (
    <div className='compose'>
        <div className='compose__header'>
            <div className='compose__header__left'>
                <span>New Message</span>
            </div>
            <div className='compose__header__right'>
<Remove />
<Height />
<Close onClick={()=>dispatch(closeSendMessage())}/>
</div>
        </div>
        <form onSubmit={formSubmit}>
        <div className='compose__body'>
        <div className='compose__bodyform'>
        <input type="email" placeholder='Recipients' value={to} onChange={(e)=>setTo(e.target.value)} name="email"/>
        <input type="text" placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)} name="subject"/>
        <textarea rows='20' onChange={(e)=>setMessage(e.target.value)} >{message}</textarea>

        </div>

        </div>
        <div className='compose__footer'>
            <div className='compose__footerLeft'>
<button type='submit'>Send <ArrowDropDown /></button>


            </div>
            <div className='compose__footerRight'>
                <FormatColorText />
                <AttachFile />
                <InsertEmoticon />
                <NoteAdd />
                <Photo />
                <PhonelinkLock />
                <Create />
                <MoreVert />
                <Delete />
            </div>
        </div>
        </form>
        </div>
  )
}

export default Compose