import React from 'react'
import './Photo.css'

export default function Photo( { url, name }) {
  return (
    <div className="Container">
    <div className='Photo'>
      <img src={url} alt=""></img>
    </div>
    <div className="Text">
      <p>{name}</p>
    </div>


    </div>
  )
}