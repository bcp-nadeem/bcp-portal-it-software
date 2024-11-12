import Box from '@mui/material/Box';
import EmailNotificationForm from "../componenets/major/EmailNotificationForm"
import { Divider } from '@mui/material';

const style = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 'auto',
    bgcolor: 'background.paper',
    border: '1px solid #eee',
    boxShadow: 8,
    p: 4
  };

const EmailNotification = () => {
  return (
    <>
        <Box sx={style}>
            <h3 className='mb-10'>Email Notification</h3>
            <Divider />
            <EmailNotificationForm />
        </Box>
    </>
  )
}

export default EmailNotification