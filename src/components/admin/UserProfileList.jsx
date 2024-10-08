import bgImageFromMiddle from '../../assets/images/bg/bg-mid-section.png'
import userProfileImg from '../../assets/images/profile/profile-image.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';


const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'profileImage', headerName: 'Profile Image', width: 250, renderCell: renderProfileImage },
  { field: 'userName', headerName: 'First Name', width: 250 },
  { field: 'userEmail', headerName: 'Email', width: 250 },
  { field: 'userLevel', headerName: 'Level', width: 250 },
  { field: 'userStatus', headerName: 'Status', width: 250 },
  
];

const rows = [
  { id: 1, profileImage: 'https://example.com/user1.jpg', userName: 'John Klabber', userEmail: 'john.klabber@bimcap.com', userLevel: 'Manager', userStatus: 'Active'  },
];

function renderProfileImage() {
  return (
    <img src={userProfileImg} alt="Profile Image" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
  );
}

const paginationModel = { page: 0, pageSize: 5 };

const UserProfileList = () => {

  return (
    <>
    <main>
        <div className='bgImageFromMiddleTop' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
        
          <section className="main-section-mid" >
            <section className='main-content-section'>
                <div className="main-topic-headign">
                  <h3>Dashboard  <MdKeyboardArrowRight /> <span>User Profile list</span></h3>
                </div>
                <section className='software-list-table software-list-table-style mt-20'>
                  <Paper sx={{ height: 600, width: '100%' }}>
                    <DataGrid
                      rowHeight={60}
                      rows={rows}
                      columns={columns}
                      initialState={{ pagination: { paginationModel } }}
                      pageSizeOptions={[5, 10, 20, 30]}
                      checkboxSelection
                      sx={{ border: 0 }}
                    />
                  </Paper>
                </section>
            </section>
          </section>

        <div className='bgImageFromMiddleButtom bgImageFromMiddleButtom-left' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
      </main>
    </>
  )
}

export default UserProfileList