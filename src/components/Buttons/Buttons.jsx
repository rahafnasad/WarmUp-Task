import React from 'react'
import style from './button.module.css'
function Buttons() {
  return (
    <div className={style.Buttons}>
      <button className={style.cancel}>Cancel</button>
      <button className={style.save}>Save</button>

    </div>
  )
}

export default Buttons
