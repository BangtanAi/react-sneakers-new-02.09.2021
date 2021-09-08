import axios from 'axios';
import React from 'react';
import AppContext from '../context';
import Info from './Info';

function Drawer({ onClose, items = [], onRemove }) {
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const onClickOrder = () => {
    axios.post('https://60d9d1c65f7bf1001754778d.mockapi.io/order', cartItems);
    setIsOrderComplete(true);
    setCartItems([]);
  }
  return (
    <div className="overlay">
      <div className="drawer">
        <h3>
          Корзина{' '}
          <img onClick={onClose} className="remove-btn" src="/img/remove.svg" alt="Remove" />
        </h3>
        {items.length > 0 ? (
          <div className="cart-filled">
            <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem">
                  <img className="cartItem-img" width={70} height={70} src={obj.imageUrl} alt="1" />
                  <div>
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="remove-btn"
                    src="/img/remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого: </span>
                  <div></div>
                  <b>21 498 руб. </b>
                </li>
                <li>
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>1074 руб. </b>
                </li>
              </ul>
              <button onClick={onClickOrder} className="greenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />{' '}
              </button>
            </div>
          </div>
        ) : (
          <Info image={isOrderComplete ? "/img/complete-order.jpg" : "/img/cart-empty.png"} title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"} description={isOrderComplete ? "Ваш заказ скоро будет передан курьерской доставке" : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} />
        )}
      </div>
    </div>
  );
}

export default Drawer;
