import { FiActivity, FiUploadCloud } from "react-icons/fi"
import { IoCode } from "react-icons/io5"
import { LuUsers } from "react-icons/lu"
import { GoVersions } from "react-icons/go";
import { LiaDownloadSolid } from "react-icons/lia";
import useSoftware from "../hooks/useSoftware";
import { useEffect, useState } from "react";
import useVersion from "../hooks/useVersion";
import axios from "axios";


const Dashboard = () => {
  const {getTotalSoftware} = useSoftware();
  const {getTotalVersions} = useVersion();

  const [stats, setStats] = useState({
    totalSoftware: 0,
    totalDownloads: 0,
    totalUsers: 0,
    totalVersions: 0
  });

  const getTotalUsers = async()=>{
    try {
      const result = await axios.get(`${import.meta.env.VITE_API_ROOT}/auth/count`)
      
      setStats((prevStats) => ({ ...prevStats, totalUsers: result.data.data }))
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    const softwares = getTotalSoftware()
    softwares.then((res) => {
      setStats(prev=>({...prev, totalSoftware: res}))
    })

    const versions = getTotalVersions()
    versions.then((res) => {
      setStats(prev=>({...prev, totalVersions: res}))
    })

    getTotalUsers()

  },[])
  return (
    <>
     <section className="main-section-mid">
        <section className='main-content-section'>
            <div className="main-topic-headign">
              <h3>Welcome To <span> &nbsp;Dashboard</span></h3>
            </div>
          <section className='dashboard-grid-section'>
              <div className='dashboard-grid-part'>
                  <div>
                    <div className='dashboard-grid-value-show'>
                      <div className='lg-icon'><IoCode /></div>
                      <div className='score-dash'>{stats?.totalSoftware}</div>
                      <div className='score-title-dash'>Total Software’s</div>
                    </div>
                    <div className='dashboard-grid-value-show'>
                      <div className='lg-icon'><LiaDownloadSolid /></div>
                      <div className='score-dash'>00</div>
                      <div className='score-title-dash'>Total Downloads</div>
                    </div>
                  </div>
                  <div>
                    <div className='dashboard-grid-value-show'>
                      <div className='lg-icon'><LuUsers /></div>
                      <div className='score-dash'>{stats?.totalUsers}</div>
                      <div className='score-title-dash'>Total Users</div>
                    </div>
                    <div className='dashboard-grid-value-show'>
                      <div className='lg-icon'><GoVersions /></div>
                      <div className='score-dash'>{stats?.totalVersions}</div>
                      <div className='score-title-dash'>Total Versions</div>
                    </div>
                  </div>
              </div>
              {/* <div className='dashboard-grid-part'>
                <div className='dashboard-grid-announcements'>
                    <div className="announcement-title"><h2>Upcoming releases 
                    and announcements...</h2></div>
                    <div className="announcement-description">
                      <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                      </p>
                    </div>
                    <div className="announcement-button"><RiCheckDoubleFill /> Checkout</div>
                </div>
              </div> */}
          </section>

        </section>
      </section>
    </>
  )
}

export default Dashboard