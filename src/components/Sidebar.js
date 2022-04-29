import React,{useState,useEffect} from 'react'
import {Button} from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import '../css/sidebar.css'
import Sidebaroptions from './Sidebaroptions';
import InboxIcon from '@material-ui/icons/Inbox';
import StarRateIcon from '@material-ui/icons/StarRate';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import LabelIcon from '@material-ui/icons/Label';
import DeleteIcon from '@material-ui/icons/Delete';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {openSendMessage} from '../features/mailSlice'

const Sidebar = () => {

  const [active,setActive] = useState(false);
  const [sentActive,setSentActive]=useState(false)
  const history = useHistory();
const dispatch = useDispatch();


  return (
    <div className='sidebar'>
<Button startIcon={<AddIcon />} className='compose__btn' onClick={()=>dispatch(openSendMessage())}>Compose</Button>
{/* <Sidebaroptions Icon={InboxIcon} title="Inbox" number="224" isactive={true} onClick={()=>history.push('/')}/> */}
<Button startIcon={<SendIcon />} className={`sent_btn ${active && 'active'} `} onClick={()=>{
  setActive(!active)
  history.push("/")
  }}>Inbox</Button>
<Sidebaroptions Icon={StarRateIcon} title="Starred" number="400"/>
<Sidebaroptions Icon={WatchLaterIcon} title="Snoozed" number="24"/>
<Sidebaroptions Icon={LabelImportantIcon} title="Important" number="254"/>
<Button startIcon={<SendIcon />} className={`sent_btn ${sentActive && 'sent-active'} `} onClick={()=>{
 history.push("/sent")
 setSentActive(!sentActive)
 console.log("sentt")
 }}>Sent</Button>

<Sidebaroptions Icon={DraftsIcon} title="All Mail" number="45"/>
<Sidebaroptions Icon={LabelIcon} title="Drafts" number="45"/>
<Sidebaroptions Icon={DraftsIcon} title="Category" number="45"/>
<Sidebaroptions Icon={DeleteIcon} title="Trash" number="80"/>
<Sidebaroptions Icon={FindInPageIcon} title="Documents" number="80"/>
<Sidebaroptions Icon={ExpandMoreIcon} title="More" number="80"/>
    <hr />
    <div className='sidebarOptions__heading'>
<h3>Meet</h3>
<Sidebaroptions Icon={VideocamIcon} title="New Meeting" number="80"/>
<Sidebaroptions Icon={KeyboardIcon} title="Join a Meeting" number="80"/>
    </div>

    
    </div>
  )

}

export default Sidebar