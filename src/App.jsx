
// form handling using userRef ******************************


// import React, { useRef } from 'react'
// import { useForm } from 'react-hook-form'

// const App = () => {

//  const name = useRef(null)
//  const email = useRef(null)
//   const handleSunbmit = (event)=>{
//     event.preventDefault()
//     console.log(name.current.value, email.current.value)
//   }
  
//   return (
//     <div  className='h-screen w-full bg-slate-900  flex justify-center items-center'>
//       <form onSubmit={handleSunbmit}      className='flex justify-center items-center gap-5' >
//         <input ref={name}    className='px-2' type="text" placeholder='name' />
//         <input  ref={email}  className='px-2' type="text" placeholder='email' />
//         <input    className='boder-2 rounded-xl bg-zinc-400 p-2' type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App

// -----------------------------------------------------------------------------------------------------



// // form handling using controlled component****************************************************************

// import React, { useState } from 'react'

// const App = () => {
//   const [val , setVal] = useState({name: ""});

//   const submitHandle = (event) =>{
//     event.preventDefault();
//     console.log(val);
//   }

//   return (
//     <div> 
//         <form className='p-4' onSubmit={submitHandle}  action="">
//         <input className='border-2 ' type="text" onChange={(event)=>{setVal({...val,name : event.target.value})}} />
//         <input type="submit" />
//         </form>
//     </div>
//   )
// }

// export default App

//--------------------------------------------------------------------------------------------------------


// // form handling using react hook form  ************************

import React from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
 const {register , handleSubmit }  = useForm()
  return (
    <div  className='h-screen w-full bg-slate-900  flex justify-center items-center'>
           <form onSubmit={handleSubmit(data => console.log(data))}   className='flex justify-center items-center gap-5' >
             <input  {...register('name')}   className='px-2' type="text" placeholder='name' />
             <input {...register('email')}  className='px-2' type="text" placeholder='email' />
             <input className='boder-2 rounded-xl bg-zinc-400 p-2' type="submit" />
           </form>
       </div>
  )
}

export default App
