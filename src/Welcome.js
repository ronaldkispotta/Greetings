import React from 'react'

const Welcome = ({ name }) => {
  let sayHI = `Hey ${name}`
  let greetMessage = `Welcome to Newton School.`
  return (
    <div>
      <h1>{sayHI}</h1>
      <h2>{greetMessage}</h2>
    </div>
  )
}

export default Welcome
