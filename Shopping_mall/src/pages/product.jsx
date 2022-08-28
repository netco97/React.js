import { Detail } from "../components/product_detail/detail";

const Product = ({cart,setCart}) => {
  return <Detail cart={cart} setCart={setCart}/>;
};

export default Product;
