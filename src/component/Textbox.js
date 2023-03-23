import React, { useState } from "react";

const Textbox = (props) => {
    const handleOnChange = (event) => { setText(event.target.value) }

    const upperCaseMethod = () => {
        setText(text.toUpperCase())
        props.alertMsg('Successfully', "Text Upper Case")
    }

    const lowerCaseMethod = () => {
      setText(text.toLowerCase())
      props.alertMsg('Successfully', "lower Case")
   }

    const clearMethod = () => {
       setText('')
       props.alertMsg('Successfully', "Clear")
    }

    const handleCopyText = () => {
        const selectText = document.querySelector('#textElement')
        selectText.select()
        navigator.clipboard.writeText(selectText.value)
        props.alertMsg('Successfully', "Copy Text")
    }

    const handleRemoveExtraSpaces = () => {
        setText(text.split(/[ ]+/).join(' '))
        props.alertMsg('Successfully', "Remove Extra Spaces")
    }
    const [text, setText] = useState('')

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center p-4">
        <div className=" my-5">
            <h1>{props.title}</h1>
           <div>
              <textarea className="shadow form-control my-4" value={text} placeholder='Enter Your Text Here' rows="8" id='textElement' onChange={handleOnChange} aria-label="With textarea"></textarea>
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                  <button className="buttn" onClick={upperCaseMethod}>Uppercase</button>
                  <button className="buttn" onClick={lowerCaseMethod}>Lowercase</button>
                  <button className="buttn" onClick={clearMethod}>Clear</button>
                  <button className="buttn" onClick={handleCopyText}>Copy Text</button>
                  <button className="buttn" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
              </div>
              <div className="mt-3  text-center">
                  <h1>Your text summary</h1>
                  <p className="fw-bold">{text.split(" ").length} words and {text.length} characters</p>
                  <p className="">{0.008 * text.split(" ").length} Minutes read</p>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Textbox;
