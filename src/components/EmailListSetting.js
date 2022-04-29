import React from "react";
import "../css/emaillist.css";
import { IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  CheckBoxOutlineBlank,
  ChevronLeft,
  ChevronRight,
  MoreVert,
  Refresh,
} from "@material-ui/icons";

const EmailListSetting = () => {
  return (
    <div className="emaillist__settings">
      <div className="emaillist_settingsLeft">
        <IconButton>
          <CheckBoxOutlineBlank />
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
  );
};

export default EmailListSetting;
