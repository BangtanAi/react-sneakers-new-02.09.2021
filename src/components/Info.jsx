import React from 'react'
import AppContext from '../context'

function Info({ image, title, description }) {
    const { setCartOpened } = React.useContext(AppContext)
    return (
        <div className="cart-empty">
            <img
              width={120}
              height={120}
              src={image}
              alt="Empty cart"
              className="cart-empty__img"
            />
            <h4>{title}</h4>
            <p>{description}</p>
            <button onClick={()=> setCartOpened(false)} className="greenButton">
              <img src="img/cart-empty.svg" alt="Arrow" /> Вернуться назад
            </button>
          </div>
    )
}

export default Info
