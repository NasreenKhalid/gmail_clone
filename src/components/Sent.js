import db from '../firebase';
import React,{useState,useEffect} from 'react'
import '../css/emaillist.css'
import Emailbody from './Emailbody'


const Sent = () => {

const [emails,setEmails] = useState([]);

useEffect(()=>{
db.collection("emails").orderBy("timestamp","desc")
.where("from","==", 'nasreenazaan@gmail.com')
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

export default Sent