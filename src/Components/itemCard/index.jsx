import "./index.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ItemCard = ({ item }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="item-image" variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Button variant="primary">
            <Link className="button-details" to={`/shop/details/${item.id}`}>
              details
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default ItemCard;
