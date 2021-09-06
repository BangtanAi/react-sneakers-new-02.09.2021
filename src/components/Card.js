import React from 'react';

function Card({id, title, price, imageUrl, onPlus, onAddFavorites, favorited=false}) {
  const[isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  
  const onClickPlus = () => {
    onPlus({id, title, price, imageUrl});
    setIsAdded(!isAdded);
  }
  const onClickFavorite = () => {
    onAddFavorites({id, title, price, imageUrl});
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="card">
      <div className="favourite">
        <img onClick={onClickFavorite} src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unliked" />
      </div>
      <img className="card-img" width={133} height={112} src={imageUrl} alt="1" />
      <h5>{title}</h5>
      <div className="card-descr">
        <div className="card-descr__price">
          <span>Цена:</span> <br />
          <b>{price} руб.</b>
        </div>
          <img width={32} height={32} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
      </div>
    </div>
  );
}

export default Card;
