import style from './style.module.css';
import Container from 'react-bootstrap/Container';
import ServiceContainer from './container' 


const Services = () => {
  return (

    <div>
    <ServiceContainer />
        <Container>
            
            <div className={style.about}>
                <div className={style.intro}>
                    <h1>Cleaning Service</h1>
                    <p>
                    EasyRent professional cleaning services is at your door step because we know that life can be busy. 
                    We assure you of exclusive cleaning service that is of the highest standard with strict selection of personnel, 
                    assured tools, and standardized procedures. The health and safety of our customers and employees is our highest priority. 
                    We provide our users with daily or regular cleaning, occasional cleaning, move-out cleaning and move-in cleaning.
                    </p>
                </div>

                <div>
                    <img className={style.img} src='https://i.imgur.com/1LkLD86.jpg'></img>
                </div>
            </div>


            <div className={style.about}>
                
                <div className={style.intro}>
                    <h1>Move-in/Move-out</h1>
                    <p>
                     
                    Whether you’re moving across the road, to a new location or from one end of the city to another, 
                    be sure to let us take your home. Our team of professionals are available to make sure your precious belongs 
                    are secured and without damage. Move across town with ease.
                    </p>
                </div>

                <div>
                    <img className={style.img} src='https://i.imgur.com/mhl29kD.jpg'></img>
                </div>
            </div>


            <div className={style.about}>
                
                <div className={style.intro}>
                    <h1>Home Repair</h1>
                    <p>
                        Our dedicated team of highly trained professionals with a plethora of experience resolve all your
                        technical problems at a go.
                    </p>
                </div>

                <div>
                    <img className={style.img} src='https://i.imgur.com/C9QvrXV.jpg'></img>
                </div>
            </div>
    
        </Container>

    </div>
  )
}


export default Services