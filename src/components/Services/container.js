import style from './style.module.css';

const ServiceContainer = () => {
  return (
    <div>
      <div className="row title" style={{ marginBottom: "150px" }} ></div>
      <div className={style.container}>
          <h1>Our Services</h1>
          {/* <p>We ensure that Ghanaians find affordable and comfortable accommodation with ease, without any financial burden.</p> */}
      </div>    
        
    </div>
  )
}

export default ServiceContainer;