import React, { useState, useEffect } from 'react'

const Header = (props) => {
  const [username, setUsername] = useState('') 

  // Assuming `data` comes from props or elsewhere
  const data = props.data

  useEffect(() => {
    if (!data) {
      setUsername('Admin')
    } else {
      setUsername(data.firstName)
    }
  }, [data]) // runs only when `data` changes

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "")
    props.changeUser('')
  }

  return (
    <div className='flex justify-between items-end p-4'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username} 👋</span>
      </h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white py-2 px-5 rounded-sm'>
        Log out
      </button>
    </div>
  )
}

export default Header
