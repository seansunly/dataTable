import React from 'react'
import NavbarCompnents from './../navbar/NavbarCompnents';
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
        <header>
          <NavbarCompnents />
        </header>
        <main className=' max-w-screen-xl mx-auto'>
            <Outlet />
        </main>
    </div>
  )
}
