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
                    <Button variant="primary" onClick={handleShow} className={style.button}>
                        View
                    </Button>
                </div>



                

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                    </Modal.Footer>
                </Modal>
                
        </Container>
    </div>
  )
}


export default Stories