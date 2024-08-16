import React from 'react'

import { Outlet } from 'react-router-dom';
import LayoutSidebar from './LayoutSidebar';

function LayoutPanel() {
    return (
            <div className='flex w-screen h-full overflow-hidden bg-gray-100'>
                <div className='w-64 h-full  bg-blue-900'>
                    <LayoutSidebar />
                </div>
                <div className={`medium:w-[calc(100%-256px)] h-full overflow-scroll w-[calc(100%-4rem)] `}>
                    <Outlet />
                </div>
            </div>
    )
}

export default LayoutPanel;