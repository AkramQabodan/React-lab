import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { addProduct } from "../../redux/features/shopSlice";
import { useDispatch } from "react-redux/es/exports";
import ItemCard from "../../Components/itemCard";

const Shop = () => {
  const [itemsList, setItemList] = useState([]);
  const dispatch = useDispatch();
  dispatch(addProduct("hi"));
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((items) => items.json())
      .then((items) => setItemList(items));
  }, []);
  return (
    <>
      {itemsList.length > 0 ? (
        <div className="container">
          <ul className="listItems">
            {itemsList.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </ul>
        </div>
      ) : (
        <div className="container">
          <Spinner animation="border" />
        </div>
      )}
    </>
  );
};
export default Shop;
