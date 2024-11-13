import Card from '@mui/material/Card';



const InfoCards = ({Icons, Numbers, text}) => {
  return (
    <>
     <Card className='dashboard-grid-value-show'>
          <div className='score-dash'>{Icons}&nbsp; <span>{Numbers}</span></div>
          <div className='score-title-dash'>{text}</div>
     </Card>
    </>
  )
}

export default InfoCards