import React from 'react'

function Drawer() {
    return (
        <div className="drawer">
          <h3>Корзина <img className="remove-btn" src="/img/remove.svg" alt="Remove" /></h3>
          <div className="items">
            <div className="cartItem">
              <img className="cartItem-img" width={70} height={70} src="/img/1.png" alt="1" />
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="remove-btn" src="/img/remove.svg" alt="Remove" />
            </div>

            <div className="cartItem">
              <img className="cartItem-img" width={70} height={70} src="/img/1.png" alt="1" />
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="remove-btn" src="/img/remove.svg" alt="Remove" />
            </div>

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
            <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /> </button>
          </div>
        </div>
    )
}

export default Drawer
