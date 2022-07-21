import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import style from "./style.module.css";

const CollapseAccordion = () => {

  const data = [
    {
      key: 0,
      header: '1. Who qualifies for EasyRent?',
      body: 'Any working individual with an assured and verifiable income.'
    },
    {
      key: 1,
      header: '2. How do I apply?',
      body: 'To apply online, first register on our website by signing up. Log into your account and click the apply button. Fill in the form and submit. Or you can visit our office to pick up a form.'
    },
    {
      key: 2,
      header: '3.	Do I pay for the Forms?',
      body: 'Yes, payment is made upon submission of the application.'
    },
    {
      key: 3,
      header: '4.	Do I need a guarantor?',
      body: 'Yes, you need a guarantor. He/she must have a verifiable income and be willing to cooperate.'
    },
    {
      key: 4,
      header: '5. What documentation do I need to provide when applying? ',
      body: 'You will need a national ID (preferably a Ghana Card), evidence of employment, a payment slip or account statement.'
    },
    {
      key: 5,
      header: '6.	How is the repayment plan?  ',
      body: 'Monthly'
    },
    {
      key: 6,
      header: '7.	How long does the application process take?',
      body: '7.	The application process is swift, depending on the reliability of the information and documentation provided and the cooperation of the individual.'
    },
    {
      key: 7,
      header: '8.	What is the calculator for?  ',
      body: 'The calculator helps you calculate your monthly installments based on your gross income.'
    },
  ];

  return (

    <Container className={style.main}>
      <h3 className={style.title}>FAQ's</h3>
  {
      data.map((item) => (

        <Accordion className={style.accordion}>   
          <Accordion.Item eventKey={item.key} className={style.item}>
              <Accordion.Header className={style.header}>{ item.header }</Accordion.Header>
              <Accordion.Body className={style.body}>
                { item.body }
              </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      ))}

    </Container>
  )
}

export default CollapseAccordion;