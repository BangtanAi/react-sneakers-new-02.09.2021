import React from 'react';

function Drawer({ onClose, items = [], onRemove }) {
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
                <div className="cartItem">
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
              <button className="greenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />{' '}
              </button>
            </div>
          </div>
        ) : (
          <div className="cart-empty">
            <img
              width={120}
              height={120}
              src="/img/cart-empty.png"
              alt="Empty cart"
              className="cart-empty__img"
            />
            <h4>Корзина пустая</h4>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/cart-empty.svg" alt="Arrow" /> Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
