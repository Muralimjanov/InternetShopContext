import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardItem = (props) => {

  const { title, images, description, children, price, brand, onClick } = props;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="img" variant="top" src={images[0]} />
        <Card.Body>
          <div className="title d-flex gap-2 justify-content-between">
            <Card.Title> {title} </Card.Title>
            <Card.Title> {brand} </Card.Title>
          </div>
          <div className="description">
            <Card.Text> {description} </Card.Text>
          </div>
          <div className="btn d-flex align-items-center justify-content-between">
            <span>{price} $</span>
            <Button onClick={onClick}> {children} </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardItem;