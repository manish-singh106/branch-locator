import { useState } from 'react'

export default function Header() {
  const [searchInput, setSearchInput] = useState("Search for truck loans");
  return (
    <div className='flex'>
      <div className='bg-teal-100'>
        <img className = 'w-25 h-20 m-6 ' alt = "AppLogo" src = "https://www.indostarcapital.com/wp-content/uploads/2023/09/logo.png"/>
      </div>
      <div className='w-full bg-teal-50'>
        <div>
          <ul className='flex ml-40 m-2 px-2 p-2 space-x-20'>
            <li>Home</li>
            <li>About Us</li>
            <li>Investor's corner</li>
            <li>Careers</li>
            <li>Knowledge Center</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='bg-teal-100 p-4'>
          <ul className='flex  ml-40 m-2 px-2 space-x-20'>
            <li>Vehicle Finance</li>
            <li>SME Finance</li>
            <li>Home Finance</li>
            <input className = "p-2" type = "text" name = "search" value = {searchInput} onChange={(e)=>setSearchInput(e.target.value)}></input>
          </ul>
        </div>
      </div>
    </div>
  )
}
