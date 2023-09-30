import { getAuth } from 'firebase/auth'
import React, { useState } from 'react'

export default function Profile() {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })
  const {name, email} = formData

  return (
    <React.Fragment>
      <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-center font-bold mt-6'>My Profile</h1>
        <div className='w-full md:w-[50%] mt-6 px-4'>
          <form>
            <input type='text' id='name' value={name} disabled className='w-full py-2 px-4 text-xl mb-6 rounded-lg'/>
            <input type='email' id='email' value={email} disabled className='w-full py-2 px-4 text-xl mb-6 rounded-lg'/>

            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
              <p className='flex items-center'>Do you want to change your name?
              <span className='text-red-500 hover:text-red-600 cursor-pointer transition ease-linear duration-200 ml-1'>Edit</span></p>
              <p className='text-blue-500 hover:text-blue-600 transition ease-linear duration-200 cursor-pointer'>Sign out</p>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  )
}
