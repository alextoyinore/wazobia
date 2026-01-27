import React, {  } from 'react'

const Greeting = ({ name, time }) => {

  return (
    <div>Hello {name}, {( Number(time) > 12) ? 'Good Day' : 'Good Morning'}</div>
  )
}

export default Greeting

