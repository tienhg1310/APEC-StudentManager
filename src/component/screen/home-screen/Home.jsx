import React from 'react'
import AddStudent from '../add-screen/AddStudent'
import ShowStudent from '../show-screen/ShowStudent'

export default function Home() {
  return (
    <div>
        <h1 className='Title'>Thông tin sinh viên</h1>
        <AddStudent></AddStudent>
        <ShowStudent></ShowStudent>
    </div>
  )
}
