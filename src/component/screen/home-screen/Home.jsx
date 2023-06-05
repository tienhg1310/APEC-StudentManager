import React from 'react'
import AddStudent from '../add-screen/AddStudent'
import ShowStudent from '../show-screen/ShowStudent'


export default function Home() {
  return (
    <div className='home-container flex flex-row justify-center p-10 m-0'>
        <AddStudent></AddStudent>
        <ShowStudent></ShowStudent>
    </div>
  )
}
