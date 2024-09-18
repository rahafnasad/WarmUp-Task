import React from 'react'
import style from './searchMembers.module.css'
import { FaSearch } from "react-icons/fa";

function SearchMembers() {
  return (
    <div className={style.search}>
      <FaSearch  className={style.searchIcon} />

      <input className={style.searchInput} placeholder='Find Members'/>
    </div>
  )
}

export default SearchMembers
