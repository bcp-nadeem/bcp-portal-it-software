import './App.css';
import { Outlet, useLocation  } from 'react-router-dom';
import FooterBarBottom from './components/navigation/FooterBarBottom';
import NavBarTopLogin from './components/navigation/NavBarTopLogin';
import NavBarTop from './components/navigation/NavBarTop';
import NavBarLeft from './components/navigation/NavBarLeft';
import LoginFooterBarBottom from './components/navigation/LoginFooterBarBottom';


function App() {

  const location = useLocation();

  const mainFlexProperty = "main-content-cover";

  return (
    <>
      {location.pathname === "/" ? 
       <NavBarTopLogin />
      : <NavBarTop />}

      <div className={location.pathname === "/" ? "" : mainFlexProperty}>
        {location.pathname === "/" ? 
        ""
        : <NavBarLeft />}
          < Outlet />
      </div>

      {location.pathname === "/" ? 
       <LoginFooterBarBottom />
      : <FooterBarBottom />}

      
    </>
  )
}

export default App
