import React from 'react'
import Contact from './Contact'

const Home = (props) => {
  return (
    <div>
        <h2>Hello {props.name} Age is {props.age}</h2>
        <Contact fn = {props.name}/>
    </div>
  )
}

export default Home