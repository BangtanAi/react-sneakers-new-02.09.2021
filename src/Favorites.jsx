import React from 'react'
import Card from './components/Card'

function Favorites({ items, onAddToCart, onAddToFavorites }) {
    return (
        <div className="content">
        <div className="content-title">
          <h1>Мои закладки</h1>
        </div>

        <div className="sneakers">
          {items
          .map((item, index) => (
            <Card
            {...item}
            key={index}
            onPlus={(obj)=>onAddToCart(item)}
            favorited={true}
            onAddFavorites={onAddToFavorites}
            />
          ))
          }
        </div>
      </div>
    )
}

export default Favorites
