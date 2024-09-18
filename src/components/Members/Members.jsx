import React, { useEffect, useState } from "react";
import { members } from "../data.js";
import style from "./members.module.css";
import { FaUserAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

function Members() {
  const [state,setState]=useState(false);
  const getMembers = () => {
    return members.map((member) => (
      <li key={member.id} className={member.isInTeam ? style.active : style.suspended}>
        <span >
          <FaUserAlt className={style.memberIcon} />
          {` ${member.firstName} ${member.lastName}`}
        </span>
        <div className={style.isInTeam}>
          {member.isInTeam ? (
            <FaTimesCircle className={style.suspendedIcon} onClick={()=>{ member.isInTeam=!member.isInTeam ; setState(!state)} }/>

          ) : (
            <FaRegCheckCircle  className={style.activeIcon}  onClick={()=>{ member.isInTeam=!member.isInTeam ; setState(!state)} }/>
          )}
        </div>
      </li>
    ));
  };
  useEffect(()=>{getMembers()},[state])
  return (
    <div className={style.members}>
      <ul>{getMembers()}</ul>
    </div>
  );
}

export default Members;
