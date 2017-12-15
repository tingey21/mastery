import React from 'react'
// COMP 38C-D
export default function Header(props){
  return (
    <div>
      <h1>
          {`this takes in a prop -----> ${props.saying}`}
      </h1>
    </div>
  )
}
