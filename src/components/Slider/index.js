import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
import Button from 'react-bootstrap/Button';
import style from './style.module.css'


const  BootstrapCarousel = () => { 
  
return ( 
    <div>   
      <div className='container-fluid' >  
      <div className="row title" style={{ marginBottom: "155px" }} ></div>  

        <Carousel>  
          <Carousel.Item className={style.item} >  
              <img style={{'height':"400px"}}   
                className="d-block w-100"  
                src={'https://i.imgur.com/qjknJm4.jpg'}  />  
                <Carousel.Caption>  
                  <h1 className={style.text}>Are you looking for financial support for your rent? </h1>  
                  <Button className={style.button} > Tenant </Button>{' '}
                  <Button className={style.button} > Landlord </Button>{' '}
                </Carousel.Caption>  
            </Carousel.Item  >  

            <Carousel.Item className={style.item}>  
              <img style={{'height':"400px"}}  
                className="d-block w-100"  
                src={'https://i.imgur.com/qjknJm4.jpg'}    />  
              <Carousel.Caption>  
                <h1 className={style.text}>Are you looking for financial support for your rent? </h1>  
                <Button className={style.button} > Tenant </Button>{' '}
                <Button className={style.button} > Landlord </Button>{' '}
              
              </Carousel.Caption>  
            </Carousel.Item>  


            <Carousel.Item className={style.item}>  
                <img style={{'height':"400px"}}  
                className="d-block w-100"  
                  src={'https://i.imgur.com/qjknJm4.jpg'}   />  
                <Carousel.Caption>  
                  <h1 className={style.text}>Are you looking for financial support for your rent? </h1>   
                  <Button className={style.button} > Tenant </Button>{' '}
                  <Button className={style.button} > Landlord </Button>{' '}
                </Carousel.Caption>  
            </Carousel.Item>  
        </Carousel>  
      </div>  
    </div>  
  )  
}  

  
export default BootstrapCarousel  