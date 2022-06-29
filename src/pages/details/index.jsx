import "./index.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import ItemCard from "../../Components/itemCard";

const Details = () => {
  const [item, setItem] = useState();
  let { userId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${userId ? userId : 1}`)
      .then((item) => item.json())
      .then((item) => setItem(item));
  }, []);

  return (
    <div className="container-details">
      {item ? <ItemCard item={item} /> : <Spinner animation="border" />}
    </div>
  );
};
export default Details;
