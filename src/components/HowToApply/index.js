
import style from "./style.module.css";
// import Apply from 'assets/images/application.png';
// import Verify from 'assets/images/application.png';
// import Accept from 'assets/images/acceptance.png';
// import Payment from 'assets/images/payment.png';

export default function Featured() {
  const itemFeatured = [
    {
      id: 1,
      // image:  Apply,
      image:  "https://i.imgur.com/wF7vkm9.png",
      title: "Application",
      text: "Applying for our services after showing interest is easy. Just click on the sign-up button to register with us. You can also register at our office at Tema Comm 1, First floor inside Harriman Plaza.",
    },
    {
      id: 2,
      image: 'https://i.imgur.com/wF7vkm9.png',
      title: "Verification",
      text: "We do this by verifying the reliability of the information provided by the client on the application. In less than 72 hours after applying, the verification process is complete.",
    },
    {
      id: 3,
      // image: Accept,
      image: "https://i.imgur.com/efnUCPM.png",
      title: "Acceptance",
      text: "Once the application is filed, management will notify you of the progress of your application.",
    },
    {
      id: 4,
      // image: Payment,
      image: "https://i.imgur.com/8tqEdeZ.png",
      title: "Payment",
      text: "With EasyRent, you can choose to pay by year,  semi-annual, quarter or month, the latter being particularly helpful for tenants.",
    },
    
  ];

  return (
    <>

    <div className={style.mainfeatured}>
      <h3 className={style.title}>HOW TO APPLY</h3>
      <div className={style.featured} id="featured">

        {itemFeatured.map((item) => (
          <div className={style.box_featured} key={item.id}>
            {console.log(item.image)};
            <img src={ item.image } width={40} height={40}/>
            <h3 className={style.heading}>{item.title}</h3>
            <p className={style.text}>{item.text}</p>
          </div>
        ))}
      </div>
      
    </div>


    

    </>
  );
}
