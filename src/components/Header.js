import React from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import { IconButton,Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import {selector} from '../features/userSlice'

import "../css/header.css";
import { useSelector } from "react-redux";
import firebase from "firebase";

const Header = () => {

const user = useSelector(selector)
console.log(user)


  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <ReorderIcon />
        </IconButton>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlIcjuoJnCWRUo6XpvGfgIPXHeJshzrBzSocc20bh2piWcuclqAtqPL4Ka5tWn9SQPpOY&usqp=CAU" />
      </div>

      <div className="header__middle">
        <div className="search_mail">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search mail" />
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
      <div className="header__right">
      <IconButton>
            <HelpOutlineIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <AppsIcon />
          </IconButton>
          <Avatar name="John" src={user?.photoURL} onClick={()=>firebase.auth().signOut()}></Avatar>

      </div>
    </div>
  );
};

export default Header;
