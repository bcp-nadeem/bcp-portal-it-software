import { MdKeyboardArrowRight } from "react-icons/md";
import SoftwareImg from "../assets/images/software/software-img.png"
import { BiStats } from "react-icons/bi";
import { FiCpu } from "react-icons/fi";
import { FiGitMerge } from "react-icons/fi";
import InfoCards from "../componenets/minor/InfoCards";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useSoftware from "../hooks/useSoftware";
import QuillEditor from "../componenets/major/QuillEditor";

const SoftwareDetails = () => {
  const { softwareId } = useParams();
  const { getSoftwareById } = useSoftware();
  const [software, setSoftware] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchSoftwareDetails = async () => {
      try {
        setLoading(true);
        const result = await getSoftwareById(softwareId);
        if (isMounted) {
          if (result) {
            setSoftware(result);
          } else {
            setError('Software not found');
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to fetch software details');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchSoftwareDetails();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [softwareId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  if (!software) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500">No software found</div>
      </div>
    );
  }

  return (
    <>
      <section className='main-content-section'>
        <div className="main-topic-headign">
            <h3>Dashboard  <MdKeyboardArrowRight /> Software <MdKeyboardArrowRight /> <span>Software details</span></h3>
        </div>
        <section className='software-details-cover'>

            <section className='software-details-head'>
                <div className='software-details-head-info'>
                    <div className='software-details-info-img'>
                        <img src={`${import.meta.env.VITE_API_ASSET}/${software?.imageUrl}`} alt="" />
                        <div className='software-details-info-title'>
                            <h3>{software?.name}</h3>
                            <label htmlFor="">{software?.category?.name}</label>
                        </div>
                    </div>
                    <div className='software-details-info-button'>
                        <Button>Download</Button>
                    </div>
                </div>
            </section>
            <section className='software-details-mid'>
                <div className='software-details-boxes-indetails-page'> 
                   <InfoCards Icons={<BiStats />} Numbers={software?.seats} text="Seats"></InfoCards>
                   <InfoCards Icons={<FiCpu />} Numbers={software?.version?.length} text="Version"></InfoCards>
                   <InfoCards Icons={<FiGitMerge />} Numbers={software?.category?.name} text="Category"></InfoCards>
                </div>
            </section>
            <section className='software-details-down'>
              <div className='software-info-cover'>
                <QuillEditor description={software?.information} />
              </div>
            </section>
        </section>
      </section>
    </>
  )
}

export default SoftwareDetails