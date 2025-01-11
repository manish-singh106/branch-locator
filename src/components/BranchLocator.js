import React, { useState } from 'react'
import State from './State';
import { BRANCH_LOCATOR } from '../utils/constants'

export default function BranchLocator() {
  const [region, setRegion] =  useState('East');
  const [showCity, setShowCity] = useState(false);
  return (
    <div className='w-1/3'>
      <p className='text-3xl text-teal-800 m-4 p-4'>Branch Locator</p>
       <div className='space-x-20 text-2xl ml-4 p-2'>
          <span className='hover:underline' onClick={()=>setRegion('East')}>East</span>
          <span className='hover:underline'  onClick={()=>setRegion('West')}>West</span>
          <span className='hover:underline' onClick={()=>setRegion('North')}>North</span>
          <span className='hover:underline' onClick={()=>setRegion('South')}>South</span>
       </div>
       <div className='bg-slate-50  h-96 overflow-y-auto mt-10 p-4'>
          {BRANCH_LOCATOR[region].map((item,index)=>(
            <State key={index} state = {item} showCity = {index===showCity} setShowCity={()=>setShowCity(index===showCity?-1: index)}/>
          ))}
       </div>
       <button className='bg-teal-600 text-white text-2xl px-14 py-3 m-2 rounded-md float-right'>Locate</button>
    </div>
  )
}
