import React,{ useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import { Container,Row,Col,Card, CardGroup,Image} from "react-bootstrap";


function ItemContent(){
    const [open, setOpen] = useState(false);

    return <> 
    <div className="item-content">
    <div>
        <div className="item-content_sub">
            <Avatar variant="square">N</Avatar>
            <p className="bold">1X</p>
            <p>Beef pepperoni Pizza</p>
            <p>30.00</p>
        </div>
        <div className="item-content_sub">
            <Avatar variant="square">N</Avatar>
            <p className="bold">1X</p>
            <p>Beef pepperoni Pizza</p>
            <p>30.00</p>
        </div>
    </div>
    <div>
        <div className="item-content_topic">Options</div>
        <div className="item-content_sub">
            <p>Beef pepperoni Pizza</p>
            <p>30.00</p>
        </div>
    </div>
    <div >
        <div className="item-content_topic">Add ons</div>
        <div className="item-content_sub">
            <p>Beef pepperoni Pizza</p>
            <p>30.00</p>
        </div>
        <div className="item-content_sub">
            <p>Beef pepperoni Pizza</p>
            <p>30.00</p>
        </div>
    </div>
    <div >
        <div className="item-content_topic">My product Note</div>
        <div className="item-content_sub">
        <CardGroup>
  <Card className="custom-card">
  
    <Card.Body>
    <Container>
        <Row>
            <Col> <Card.Title className="custom-card_title">Jon Doe</Card.Title></Col>
            <Col  className="custom-card_date">2.45 P.M.| 22 Jan 20</Col>
        </Row>
        <Row>
            <Col sm={2}>  <Avatar>H</Avatar></Col>
            <Col sm={10}>    <Card.Text  className="custom-card_text">
        This is a wider card with supporting text below as a natural 
      </Card.Text></Col>
        </Row>
        <Row className="thumbnail-row">
            <Col sm={3}> <Image src="food.jpg" fluid /></Col>
            <Col sm={3}><Image src="food.jpg" fluid /></Col>
            <Col sm={3}><Image src="food.jpg" fluid /></Col>
            <Col sm={3}><Image src="food.jpg" fluid /></Col>
        </Row>
        
    </Container>
     
  
    </Card.Body>
  </Card>
  <Card className="custom-card">
  
  <Card.Body>
  <Container>
      <Row>
          <Col> <Card.Title className="custom-card_title">Jon Doe</Card.Title></Col>
          <Col  className="custom-card_date">2.45 P.M.| 22 Jan 20</Col>
      </Row>
      <Row>
          <Col sm={2}>  <Avatar>H</Avatar></Col>
          <Col sm={10}>    <Card.Text  className="custom-card_text">
      This is a wider card with supporting text below as a natural 
    </Card.Text></Col>
      </Row>
      <Row className="thumbnail-row">
          <Col sm={3}> <Image src="food.jpg" fluid /></Col>
          <Col sm={3}><Image src="food.jpg" fluid /></Col>
          <Col sm={3}><Image src="food.jpg" fluid /></Col>
          <Col sm={3}><Image src="food.jpg" fluid /></Col>
      </Row>
      
  </Container>
   

  </Card.Body>
</Card>
<Card className="custom-card">
  
    <Card.Body>
    <Container>
        <Row>
            <Col> <Card.Title className="custom-card_title">Jon Doe</Card.Title></Col>
            <Col  className="custom-card_date">2.45 P.M.| 22 Jan 20</Col>
        </Row>
        <Row>
            <Col sm={2}>  <Avatar>H</Avatar></Col>
            <Col sm={10}>    <Card.Text  className="custom-card_text">
        This is a wider card with supporting text below as a natural 
      </Card.Text></Col>
        </Row>
        <Row className="thumbnail-row">
            <Col sm={3}> <Image src="food.jpg" fluid /></Col>
            <Col sm={3}><Image src="food.jpg" fluid /></Col>
            <Col sm={3}><Image src="food.jpg" fluid /></Col>
            <Col sm={3}><Image src="food.jpg" fluid /></Col>
        </Row>
        
    </Container>
     
  
    </Card.Body>
  </Card>
</CardGroup>
        </div>

    </div>
    
    </div>
    </>
}

export default ItemContent