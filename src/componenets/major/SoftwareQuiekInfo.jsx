import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const SoftwareQuiekInfo = ({src, title, category, description}) => {


  return (
    <>
    <section className="software-quiek-info-main">
            <div className="software-quiek-info-cover">
                <div className="software-quiek-info-head">
                    <img src={src} alt="" />
                    <h3>{title}</h3>
                    <label htmlFor="">{category}</label> 
                </div>

                <div className="software-quiek-info-mid">
                    <div className="software-quiek-info-details">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="software-quiek-info-bottom">
                    <div className="software-quiek-info-btns">
                        <Button className="software-quiek-info-btns-download">Download</Button>
                        <Button className="software-quiek-info-btns-download">Install</Button>
                        <Link to="/software-details/1"><Button className="software-quiek-info-btn-moreinfo">More info</Button></Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SoftwareQuiekInfo