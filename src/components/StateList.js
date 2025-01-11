// import React, { useState } from 'react';
// import { BRANCH_LOCATOR } from '../utils/constants';
// import City from './City';

// export default function StateList({region}) {
//   const [showCity, setShowCity] = useState(false);
//   console.log("showCity->",showCity)

//   const handleClick = ()=>{
//     setShowCity(!showCity)
//   }

//   return (
//     <div className='bg-slate-100 mt-10 ml-5'>
//       {BRANCH_LOCATOR[region].map((item, index) =>(
//         <div className='border-b-2 p-2'>
//           <p>{item}</p>
//           <div className='flex justify-between' onClick={()=>{showCity===index}}>
//             <span>City</span>
//             <span><img className = "h-5" src = "https://www.svgrepo.com/show/409025/angle-down.svg"/></span>
//           </div>
//           {/* <div className='flex justify-between'><button onClick={()=> handleClick()}>City</button> <img className = "h-5" src = "https://www.svgrepo.com/show/409025/angle-down.svg"/></div> */}
//           {showCity && <City state= {item}/>}
//         </div>
//       ))}
//       {/* <City /> */}

//     </div>

//   )
// }
