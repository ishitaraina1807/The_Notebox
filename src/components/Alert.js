import React from 'react'

const Alert = (props) => {
    return (
        <div>
            <div className="alert alert-dark" role="alert">
               {props.message}
            </div>
        </div>
    )
}

export default Alert
