import React from 'react'
import Nested from './Nested'
// COMP 38C-D
export default function Header(props){
  return (
    <div>
      <div>
          {`this takes in a prop -----> ${props.saying}`}
      </div>
      <div>
      <Nested />
      </div>
    </div>
  )
}
