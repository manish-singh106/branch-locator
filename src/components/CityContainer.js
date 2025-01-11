import React from 'react';
import { BRANCH_LOCATOR_CITY } from '../utils/constants';

export default function CityContainer({state}) {
  return (
    <div className='border border-black w-96 h-auto max-h-40 overflow-y-auto'>
      {BRANCH_LOCATOR_CITY[state]?.map((item)=>(
        // <div className='py-2'>
          <p className='hover:bg-teal-700 hover:text-white'>{item}</p>
          // <p className='hover:bg-green-500 hover:text-black'>{item}</p>

      ))}
    </div>
  )
}
