import bgImageFromMiddle from '../../assets/images/bg/bg-mid-section.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


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
                <TextField
                    required
                    id="standard-required"
                    label="Username (Required)"
                    placeholder="Enter your username"
                    variant="standard"
                  />
                </div>
                <div className="login-box-btn">
                    <Button variant="contained" aria-label="Login" size="small" >Submit</Button>
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