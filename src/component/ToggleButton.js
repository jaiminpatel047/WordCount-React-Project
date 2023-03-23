import React, { useState } from 'react'

const ToggleButton = (props) => {

  return (
    <>
       <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" onClick={() => document.body.classList.toggle('lightmode') }  id="flexSwitchCheckDefault" />
          <label className="form-check-label" for="flexSwitchCheckDefault" >{props.button}</label>
       </div>
    </>
  )
}

export default ToggleButton