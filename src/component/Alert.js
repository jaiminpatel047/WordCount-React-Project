import React from 'react'

const Aleart = (props) => {
  return (
        props.alert && <div className="alert alert-primary position-absolute top-0 start-0 m-4" role="alert">
         <strong>{props.alert.massage}: </strong>{props.alert.type}
        </div>
  )
}

export default Aleart