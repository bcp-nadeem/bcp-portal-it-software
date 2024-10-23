import { FiActivity, FiUploadCloud } from "react-icons/fi"
import { IoCode } from "react-icons/io5"
import { LuUsers } from "react-icons/lu"
import { RiCheckDoubleFill } from "react-icons/ri"

const Dashboard = () => {
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
                      <div className='score-dash'>20</div>
                      <div className='score-title-dash'>Total Software’s</div>
                    </div>
                    <div className='dashboard-grid-value-show'>
                      <div className='lg-icon'><FiUploadCloud /></div>
                      <div className='score-dash'>02</div>
                      <div className='score-title-dash'>New Updates</div>
                    </div>
                  </div>
                  <div>
                    <div className='dashboard-grid-value-show'>
                      <div className='lg-icon'><LuUsers /></div>
                      <div className='score-dash'>02</div>
                      <div className='score-title-dash'>Total Users</div>
                    </div>
                    <div className='dashboard-grid-value-show'>
                      <div className='lg-icon'><FiActivity /></div>
                      <div className='score-dash'>02</div>
                      <div className='score-title-dash'>Active Trials</div>
                    </div>
                  </div>
              </div>
              <div className='dashboard-grid-part'>
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
              </div>
          </section>

        </section>
      </section>
    </>
  )
}

export default Dashboard