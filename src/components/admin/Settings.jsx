import bgImageFromMiddle from '../../assets/images/bg/bg-mid-section.png'


const Settings = () => {
  return (
    <>
    <main>
      <section className="main-section-mid">
        <div className='bgImageFromMiddleTop' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
        
        <div className='bgImageFromMiddleButtom bgImageFromMiddleButtom-left' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
      </section>
    </main>
    </>
  )
}

export default Settings