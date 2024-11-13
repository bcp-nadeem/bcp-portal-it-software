import Avatar from '@mui/material/Avatar';

const UserAvatar = ({src, alt, className }) => {
  return (
    <Avatar alt={alt} src={src} className={className} />
  )
}

export default UserAvatar