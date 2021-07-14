import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button} from 'react-bootstrap'
import Play from './Assests/play-btn.svg';


const Youtube=(props)=>{
 
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button variant="btn" onClick={handleShow} style={{width: '100%'}}>
              <img src={props.imgSrc} className="play-btn" style={{width:'100%','border-radius':'0.2em'}}/>
            </Button>
            <h6 className="m-2 text-center">{props.title}</h6>
      
            <Modal className="modal-play"
              size="lg"
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title><h2 className="text-center text-warning">Dance out of Poverty</h2></Modal.Title>
              </Modal.Header>
              <Modal.Body>
               <div className="container mt-2">
               <div className="row m-auto">
               <div className="col-sm-12 mb-1">
                
                <iframe width="100%" height="400rem" src={props.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen"></iframe>
                </div>
                <div className="col-sm-12 text-center">
                <h6 className="m-1">{props.title}</h6>
                <p className="m-1">{props.date}</p>
                </div>
               </div>
               </div>
              </Modal.Body>
              
            </Modal>
          </>
        );
      }
export default Youtube;