import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navebar/Navbar'

export default function MinLayout() {
  return (
    <>
    <Navbar/>
    <Outlet></Outlet>
    </>
  )
}
