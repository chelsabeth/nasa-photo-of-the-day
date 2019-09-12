import React from "react";
import {
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
  } from "reactstrap";



const NasaCard = props => {
    return (
      <Col xs="6" sm="4" key={props.key}>
        <Card>
          <CardImg top width="100%" src={props.img} alt="Image of Space" />
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardText>Description: {props.description}</CardText>
            <CardText>Photographer: {props.copyright}</CardText>
            <CardText>
              <small className="text-muted">Date Taken: {props.date}</small>
            </CardText>
          </CardBody>
        </Card>
       </Col>
    );
  };
  
  export default NasaCard;