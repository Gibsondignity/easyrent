import style from './style.module.css'
import Image from 'next/image'


const WhyChooseUs = () => {
  return (
    <>
        <center>
            <h1 className={style.chooseus}>Why Choose Us</h1>
        </center>


        <div className={style.section_4}>

            <div className={style.container}>
                <center><h3>Affordability</h3></center>
                <hr/>
                <p>Our price is very competitive and we are best on the market.</p>
            </div>

            <div className={style.container}>
                <center><h3>Experience</h3></center>
                <hr/>
                <p>We&apos;ve been doing what we do best—we know what we&apos;re doing because we have the industry experience.</p>
            </div>

            <div className={style.container}>
                <center><h3>Quality</h3></center>
                <hr/>
                <p>From the best skilled professional, process and technology, EasyRent is shaping the rental industry in Ghana. Together, we are changing the status quo.</p>
            </div>

            <div className={style.container}>
                <center><h3>Conveniences</h3></center>
                <hr/>
                <p>At EasyRent, apartment selection, verification of financial resources, contract signing and payment can all be done online with just a click.</p>
            </div>

            <div className={style.container}>
                <center><h3>Trust</h3></center>
                <hr/>
                <p>Our customers rate us high and are very mush satisfy with our services and product.</p>
            </div>

        </div>

        <center>
        <h1 className={style.partners}>Our Partners</h1>
        </center>

        <div className={style.section_3}>     

            <div>
                <img src='https://i.imgur.com/R4HdECg.png' width={150} height={150}></img>
            </div>
            
            <div>
                <img src='https://i.imgur.com/NhIK5w5.png' width={150} height={150}></img>
            </div>

            <div>
                <img src='https://i.imgur.com/oV49K3K.png' width={150} height={150}></img>
            </div>
        </div>

    </>
  )
}


export default WhyChooseUs;