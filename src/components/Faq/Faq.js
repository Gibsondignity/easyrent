import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import style from "./style.module.css";

const CollapseAccordion = () => {

  const data = [
    {
      key: 0,
      header: '1.	Who qualifies for EASYRENT?',
      body: 'Anyone working individual with an assured and verifiable income.'
    },
    {
      key: 1,
      header: '2.	How do I apply?',
      body: 'To apply online, first register on our site by signing up. Log into your account then go to the apply button. Fill in the form then submit. Or you can visit our office to pick a form.'
    },
    {
      key: 2,
      header: '3.	Do I pay for the Forms?',
      body: 'Yes. When you visit our office for the final application process.'
    },
    {
      key: 3,
      header: '4.	Do I need a guarantor? ',
      body: 'Yes, you need a guarantor and he/she should be someone with a verifiable income as well and willing to cooperate.'
    },
    {
      key: 4,
      header: '5.	What documentation do I need to provide when applying? ',
      body: 'You will need a national ID (preferably GhCard), evidence of employment, a payment slip, or account statement.'
    },
    {
      key: 5,
      header: '6.	How is the repayment plan?  ',
      body: 'You make an initial deposit to EASYRENT that varies with each rent amount. From there EASYRENT pays your rent advance, and you do your repayment in monthly installments.'
    },
    {
      key: 6,
      header: '7.	How long does the application process take?',
      body: 'As soon as possible depending on the reliability of the information and documentation provided and the cooperation of the individual.'
    },
    {
      key: 7,
      header: '8.	What is the calculator for?  ',
      body: 'The calculator helps you to know your monthly installments based on your net income.'
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