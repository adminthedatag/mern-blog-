import React from 'react';
import { Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';



export default function Signup() {
  return (<div className='min-h-screen mt-20'>
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
      {/* left */}
      <div className="">
      <Link to ="/" className='font-bold dark:text-white text-4xl'>

            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 
              via-purple-500 to-pink-500 rounded-lg text-white'> Sahand's</span>
            Blog
        </Link>
        <p className='text-sm mt-5'>
          this is a demo project. You can sign up with your email and password or with google
        </p>
      </div>
      {/* right */}

      
      <div className="">
        <form >
          <div className=''>
            <Label value='your user name' />
            <TextInput
              type='text'
              placeholder='Username'
              id='username'
            />  
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
