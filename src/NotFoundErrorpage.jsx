import React from 'react'
import logo from "./assets/logo2.png"
import { Link } from 'react-router-dom'
const NotFoundErrorpage = () => {
  return (
    <div className='w-full h-screen bg-slate-100 p-4 '>
        <img src={logo} className='w-18 h-12'/>

        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='text-7xl text-blue-900 font-semibold mt-10'>Oops !</h1>
            <div className='mt-4'>
                {/* <img src={logo}/> */}
                <h1 className=' flex justify-center items-center text-4xl font-semibold'>404 - PAGE NOT FOUND</h1>


            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className=' text-lg'>The page your looking for might have been removed</p>
                <p className=' text-lg'>hand its name changed or is temporarily  unavailable.</p>

            </div>
            <div>
                <button className='bg-blue-900 text-white p-1 rounded-full px-2'
                >
                    <Link to="/app">  Go To Home</Link></button>
            </div>
            </div>

    </div>
  )
}

export default NotFoundErrorpage