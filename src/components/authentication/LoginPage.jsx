import bgImageFromMiddle from '../../assets/images/bg/bg-mid-section.png'


const LoginPage = () => {
  return (
    <>
    <main>
      <section className="login-page-section">
          <div className='bgImageFromMiddleTop' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
          <div>
              <div className="login-page-title">
                  <h3>Welcome to <span>IT Software Portal</span></h3>
              </div>
              <div className="login-main-box">
                <div className="login-box-title">LOGIN</div>
                <div className="login-box-input">
                  <input type="text" name="" id="" placeholder="Enter username" />
                </div>
                <div className="login-box-input">
                  <input type="text" name="" id="" placeholder="Enter password" />
                </div>
                <div className="login-box-btn">
                  <button id="" name="">Login</button>
                </div>
              </div>
          </div>
          <div className='bgImageFromMiddleButtom' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
      </section>
    </main>
    </>
  )
}

export default LoginPage