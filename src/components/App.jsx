import React from "react"
import Card from "./Card"
import contacts from "../contacts"
import Avatar from "./Avatar"

// function to call it inside the map function
function createCard(contact){

    return <Card
        // unique id for each card component
        id={contact.id}
        key={contact.id}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
    />
}

export default function App(){

    return (

        <div>                  
           
           <h1>My Contacts</h1>
            {/* using mapping function */}
           {contacts.map(createCard)}           
          
        </div>
    )
}