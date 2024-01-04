import React from 'react'

const Button = ({name}) => {
  return (
    <div>
    <button className='px-4 py-2 mr-4 my-4 bg-gray-300 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button