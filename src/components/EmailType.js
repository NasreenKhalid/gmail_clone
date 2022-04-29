import React from 'react'
import { IconButton } from "@material-ui/core";
import {
    People,
    Inbox,
    LocalOffer,
  } from "@material-ui/icons";
  import '../css/emaillist.css'

const EmailType = () => {
  return (
    <div className='emailtype'>
        <div className='emailtype__options emailtype__options--active'>
       <Inbox />
       <p>Primary</p>
        </div>
        <div className='emailtype__options'>
       <People />
       <p>Social</p>
        </div>

        <div className='emailtype__options'>
       <LocalOffer />
       <p>Promotions</p>
        </div>

        </div>
  )
}

export default EmailType