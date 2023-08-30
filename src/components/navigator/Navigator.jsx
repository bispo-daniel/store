import { useAtom } from 'jotai'
import { user, website } from '../../atoms'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Navigator = () => {
  const [websiteAtom, setWebsiteAtom] = useAtom(website);
  const [userAtom, setUserAtom] = useAtom(user)

  const navigate = useNavigate()

  const targetOrigin = window.location.origin;

  const appleUrl = process.env.REACT_APP_APPLE_URL;
  const carrotUrl = process.env.REACT_APP_CARROT_URL;
  const pepperUrl = process.env.REACT_APP_PEPPER_URL;

  const setFrame = (url) => {
    setWebsiteAtom(url)
  }

  const logout = () => {
    setUserAtom(undefined);
    localStorage.removeItem('token');
    setTimeout(() => navigate(0), 500);
  }

  return (
    <nav className='flex flex-col justify-between fixed left-0 top-44 h-[300px] w-[45px] bg-white rounded-r-full hover:w-[60px] duration-100 overflow-hidden'>
    <button className='hover:bg-gray-200 w-full h-full' onClick={e => setFrame(appleUrl)}>
      <i className="fa-solid fa-apple-whole fa-xl" style={{color: '#000'}} />
    </button>
    <button className='hover:bg-gray-200 w-full h-full' onClick={e => setFrame(carrotUrl)}>
      <i className="fa-solid fa-carrot fa-xl" style={{color: '#000'}}></i>
    </button>
    <button className='hover:bg-gray-200 w-full h-full' onClick={e => setFrame(pepperUrl  )}>
      <i className="fa-solid fa-pepper-hot fa-xl" style={{color: '#000'}}></i>
    </button>
    <button className='hover:bg-gray-200 w-full h-full' onClick={e => logout()}>
      <i className="fa-solid fa-power-off fa-xl" style={{color: '#000'}}></i>
    </button>
  </nav>
  )
}
