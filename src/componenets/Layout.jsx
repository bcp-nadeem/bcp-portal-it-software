import { Outlet } from 'react-router-dom'
import BGImage from '../assets/images/bg/bg-mid-section.png'
import NavBar from './major/NavBar'
import { useAuth } from '../store/AuthContext';
import { useEffect } from 'react';
import Message from './minor/Message';

const Layout = () => {
  const {refreshToken} = useAuth();
  useEffect(() => {
    refreshToken()
  },[])

  return (
    <div>
      <NavBar />
      <Message/>
      <div className='bgImageFromMiddleTop' style={{ backgroundImage: `url(${BGImage})` }}></div>
        <Outlet/>
      <div className='bgImageFromMiddleButtom' style={{ backgroundImage: `url(${BGImage})` }}></div>
    </div>
  )


}

export default Layout
