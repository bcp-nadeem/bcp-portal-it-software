import myLogo from '../../assets/images/logo/bimcap_logo.png';

const NavBarTopLogin = () => {
  return (
    <>
        <nav className="main-nav-bar nav-auth-page">
            <div className="brand-logo">
                <img src={myLogo} alt="bimcap logo" />
            </div>
        </nav>
    </>
  )
}

export default NavBarTopLogin