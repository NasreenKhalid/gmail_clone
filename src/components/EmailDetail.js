import React from 'react'
import "../css/emaillist.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
    ArrowBack,
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Launch,
  MoreVert,
  Print,
  Refresh,
  Reply,
  Star,
} from "@material-ui/icons";
import LabelImportant from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectedMail } from '../features/mailSlice';

const EmailDetail = () => {
    const history = useHistory();

const mail = useSelector(selectedMail);

console.log(mail)

  return (
      <div className='emaildetails'>

    <div className="emaillist__settings">
      <div className="emaillist_settingsLeft">
        <IconButton>
          <ArrowBack onClick={()=>history.push('/')}/>
        </IconButton>
        <IconButton>
          <ArrowDropDown />
        </IconButton>
        <IconButton>
          <Refresh />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>

      <div className="emaillist_settingsRight">
        <p>1-50 of 10,223</p>
        <IconButton>
          <ChevronLeft />
        </IconButton>
        <IconButton>
          <ChevronRight />
        </IconButton>
      </div>
    </div>

<div className='emaildetails__message'>
<div className='emaildetails__header'>
    <div className='emaildetails__headerLeft'>
        <h4>{mail.subject}</h4>
        <IconButton>
            <LabelImportant />
        </IconButton>
    </div>
    <div className='emaildetails__headerRight'>
        <IconButton>
            <Print/>
        </IconButton>
        <IconButton>
            <Launch />
        </IconButton>
    </div>

</div>


<div className='emaildetails__middleheader'>
    <div className='emaildetails__middleheaderLeft'>
       
        <IconButton>
            <Avatar />
        </IconButton>
        <h4>{mail.name}</h4>
        <p>{mail.email}</p>
    </div>
    <div className='emaildetails__middleheaderRight'>
       <p>{mail.time}</p>
       
        <IconButton>
            <Star/>
        </IconButton>
        <IconButton>
            <Reply />
        </IconButton>
        <IconButton>
            <MoreVert />
        </IconButton>
    </div>



</div>

<div className='emaildetails__body'>
        <p>{mail.message}</p>

    </div>
    </div>
    </div>
  )
}

export default EmailDetail