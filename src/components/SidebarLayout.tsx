import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Navbar/Sidebar'
import { TopBar } from './Navbar/TopBar'

export const SidebarLayout = () => {
    return (
        <>
            <Sidebar />
            <TopBar />
            <Outlet />
        </>
    )
}
