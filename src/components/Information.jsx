import React from "react"

export default function Information(props){

    return(

        <div className="info">

            <p >{props.tel}</p>
            <p >{props.email}</p>

        </div>
    )
}