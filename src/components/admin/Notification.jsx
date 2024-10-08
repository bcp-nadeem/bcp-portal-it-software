import { MdKeyboardArrowRight } from "react-icons/md"
import bgImageFromMiddle from '../../assets/images/bg/bg-mid-section.png'
import userProfileImg from '../../assets/images/profile/profile-image.png'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Notification = () => {
  return (
    <>
    <main>
      <div className='bgImageFromMiddleTop' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
        <section className="main-section-mid" >
          <section className='main-content-section'>
              <div className="main-topic-headign">
                <h3>Dashboard  <MdKeyboardArrowRight /> <span>Notification</span></h3>
              </div>

              <div className="main-topic-headign mt-20">
                <FormGroup>
                  <div className="d-flex">
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Select all" />
                    <Link to="/notification-form"><Button variant="outlined">Submit</Button></Link>
                  </div>
                </FormGroup>
              </div>



              <section className="notification-grid-cover mt-40"> 
                  
                      <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image={userProfileImg}
                            alt="green iguana"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                            John Klabber
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            john.klabber@bimcap.com
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Checkbox {...label} />
                        </CardActions>
                      </Card>
              </section>
          </section>
        </section>
      <div className='bgImageFromMiddleButtom bgImageFromMiddleButtom-left' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
    </main>
  </>
  )
}

export default Notification