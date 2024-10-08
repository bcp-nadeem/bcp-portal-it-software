import { MdKeyboardArrowRight } from "react-icons/md"
import bgImageFromMiddle from '../../assets/images/bg/bg-mid-section.png'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';



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



              <section className="notification-grid-cover"> 
              <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
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