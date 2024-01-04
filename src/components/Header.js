import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Header = () => {
    const dispatch = useDispatch();
    const handleHamBurgerMenu = () => {
        dispatch(toggleMenu());
    };

  return (
    <div className='flex border border-gray-500 shadow-lg p-5 justify-between'>
        <div className='flex w-1/12 mr-4'>
            <img
            onClick = {() => handleHamBurgerMenu()}
             src = "https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
            alt = "hamburger"
            className='h-12 cursor-pointer' />
            <img src = "https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
            alt = "logo"
            className='h-12' />
        </div>
        <div className='flex w-10/12 m-auto align-middle justify-center'>
            <input className='border border-gray-500 w-1/2 px-2 py-1 rounded-l-full' type = "text" />
            <button className='border border-gray-500 px-3 rounded-r-full'>🔍</button>
        </div>
        <div className='w-1/12'>
            <img src = "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" 
            alt = "userIcon"
            className='h-12' />
        </div>
    </div>
  )
}

export default Header