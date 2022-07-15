import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel' ; 
import style from './style.module.css';

const Stories = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>

        <Container style={{marginBottom: "3rem" }}>
                <h3 className={style.title}>Stories</h3>
                <div className={style.main}>
                    
                    <div className={style.stories} ></div>
                    <div className={style.stories} ></div>
                    <div className={style.stories} ></div>
                
                </div>

                <div className={style.btnmain} >
                    <Button onClick={handleShow} className={style.button}>
                        View
                    </Button>
                </div>



                

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title style={{ 'color': '#F94001'}}>Stories</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    <h1>‘’</h1>
                        <p>
                        Easyrent has managed my house for some time now. 
                        They always have a smooth process in finding new tenants, 
                        we haven’t had any concerns with him keeping on top of the things 
                        that inevitably come up. I would recommend Easyrent as a rental 
                        agency to anyone who would want a stress free rental services.{" "}
                        </p>
                    </Modal.Body>
                    <Modal.Body>
                        
                    <h1>‘’</h1>
                        <p>
                        I have two apartments that Easyrent helps me rent out, and I have been really happy with their 
                        service since last year. It is easy and quick to get any information from them, and we are kept up-to-date. 
                        The accountant, in particular, is always fantastic and fast at sending anything I need through!{" "}
                        </p>
                    </Modal.Body>
                    <Modal.Body>
                        
                    <h1>‘’</h1>
                        <p>
                        I have two apartments that Easyrent helps me rent out, and I have been really happy with their 
                        service since last year. It is easy and quick to get any information from them, and we are kept up-to-date. 
                        The accountant, in particular, is always fantastic and fast at sending anything I need through!{" "}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button style={{ 'backgroundColor': '#F94001'}} onClick={handleClose}>
                        Close
                    </Button>
                    
                    </Modal.Footer>
                </Modal>
                
        </Container>
    </div>
  )
}


export default Stories