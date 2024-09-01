import React from 'react'

function Alert(props) {
  return (
    props.alert &&<div style={{color:'green'}}> <div className={`alert alert-${props.alert.type}warning alert-dismissible fade show`}role="alert">
    <strong>{props.alert.type}</strong>: {props.alert.msg}
</div>
</div>
  )
}

export default Alert
