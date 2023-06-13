import React, { useEffect } from 'react'
import AddStudent from './component/screen/add-screen/AddStudent'
import ShowStudent from './component/screen/show-screen/ShowStudent'
import { useDispatch } from 'react-redux'
import { fetchStudents } from './redux/studentSlice';


export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudents())
  },[])
  return (
    <div className='home-container xl:flex xl:flex-row lg:flex lg:flex-col justify-center p-10 m-0'>
        <AddStudent></AddStudent>
        <ShowStudent></ShowStudent>
    </div>
  )
}
