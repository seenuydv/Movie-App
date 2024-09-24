import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import './MovieFooter.css'

function MovieFooter(){
    return(
        
        <div className="footer">
    <Container>
        <Row>
            <Col>
             <h3> Moviessssss </h3>
             <br/>
             <br/>
             <br/>
             </Col>
            <Col>
              <h3>About Moviessssss </h3>
              <br/>
             <br/>
             <br/>
             </Col>
            <Col>
             <h3> Customer Service </h3>
             <br/>
             <br/>
             <br/>
            </Col>
        </Row>
     </Container>
     </div>
  
  );
}
export default MovieFooter;
