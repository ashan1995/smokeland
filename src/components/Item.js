import React,{ useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import { Collapse,Container,Row,Col } from "react-bootstrap";
import ItemContent from "./ItemContent";


function Item(){
    const [open, setOpen] = useState(false);

    return <div className="item-container"> 
    <div 
    onClick={() => setOpen(!open)}
    aria-controls="example-collapse-text"
    aria-expanded={open}
    className="collapse-bar">

    <Container>
        <Row className="custom-row">
            <Col md={1} sm={12} xs={12}>  <Avatar className="img-avatar">H</Avatar></Col>
            <Col md={1} sm={12} xs={12}>  <p className="bold">#42084</p></Col>
            <Col md={3} sm={12} xs={12}>   
                <div>
                    <p className="bold">Collection</p>
                    <p>20 Dec 2020 | 10.00 A.M - 11.00 A.M.</p>    
                </div>
            </Col>

            <Col md={3} sm={12} xs={12}>   
                <div>
                    <p className="bold">Collection</p>
                    <p>20 Dec 2020 | 10.00 A.M - 11.00 A.M.</p>    
                </div>
            </Col>

            <Col className="content-center" md="auto" sm={12} xs={12}>   
            <p>+9476843843</p>
            </Col>

            <Col className="content-center" md={1} sm={12} xs={12}>   
            <p>Completed</p>
            </Col>

            <Col className="content-center" md={1} sm={12} xs={12}>   
            <p>34.00</p>
            </Col>
        </Row>
    </Container>

    
    </div>
    <Collapse in={open}>
        <div>
         <ItemContent />
        </div>
      </Collapse>
    </div>
}

export default Item