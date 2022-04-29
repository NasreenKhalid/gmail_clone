import db from '../firebase';
import React,{useState,useEffect} from 'react'
import '../css/emaillist.css'
import Emailbody from './Emailbody'
import EmailListSetting from './EmailListSetting'
import EmailType from './EmailType'

const Emaillist = () => {

const [emails,setEmails] = useState([]);

useEffect(()=>{
db.collection("emails").orderBy("timestamp","desc")
// .where("to","==", 'nasreenazaan12@gmail.com')
.onSnapshot(snapshot=>{
  setEmails(snapshot.docs.map(doc=>({
    id:doc.id,
    data:doc.data()
  })))

})
},[])

console.log(emails)


  return (
    <div className='emaillist'>
        <EmailListSetting />
        <EmailType />

        {
          emails.map(({id,data})=>{
            return <Emailbody key={id} id={id} name={data.fromName}  email={data.from} 
            subject={data.subject} 
            message={data.message}
           
            time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()}/>
          })
        }
        
     
    </div>
  )
}

export default Emaillist