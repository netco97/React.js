import styles from "./main.module.css";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";
import { useEffect } from "react";
import axios from "axios";

export const Main = ({products, setProducts}) => {

  useEffect(()=>{
    axios.get("/data/products.json").then((data)=>{
      setProducts(data.data.products);
    });
  },[setProducts]);

  
  return (
    <>
      <EventBanner />
      <div className={styles.filter}>
        <p>최신순</p>
        <p>낮은 가격</p>
        <p>높은 가격</p>
      </div>
      <main className={styles.flex_wrap}>
        {products.map((product)=>{
          return <Product key={`key-${product.id}`} product={product}/>
        })}
      </main>
    </>
  );
};
