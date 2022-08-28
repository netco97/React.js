import styles from "./cart.module.css";
import { CartHeader } from "./cartHeader";
import { CartList } from "./cartList";
import { TotalCart } from "./totalCart";

export const Cart = ({cart}) => {
  return (
    <>
      <header className={styles.header}>
        <h1>장바구니</h1>
      </header>
      <CartHeader/>
      {cart.length === 0 ? (
        <div className={styles.not}>
          <h2>장바구니에 담긴 상품이 없습니다.</h2>
          <p>원하는 상품을 장바구니에 담아보세요.</p>
        </div>
      ): cart.map((cart)=>{
        return <CartList key={`key-${cart.id}`} cart={cart}/>
      })}
      {cart.length === 0 ? "" : <TotalCart/>}
    </>
  );
};
