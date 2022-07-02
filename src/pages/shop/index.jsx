import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { addProduct } from "../../redux/features/shopSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getShopItems } from "../../redux/features/shopSlice";
import ItemCard from "../../Components/itemCard";

const Shop = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.shopSlice);

  useEffect(() => {
    dispatch(getShopItems());
  }, []);

  return (
    <>
      {state.loaded ? (
        <div className="container">
          <ul className="listItems">
            {state.products.map((item) => (
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
