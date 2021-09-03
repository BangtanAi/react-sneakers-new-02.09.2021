import React from 'react';

function Card({title, price, imageUrl, onPlus, onFavorite}) {
  const[isAdded, setIsAdded] = React.useState(false);
  
  const onClickPlus = () => {
    onPlus([title, price, imageUrl]);
    console.log([title, price, imageUrl])
    setIsAdded(!isAdded);
  }
  return (
    <div className="card">
      <div className="favourite">
        <img src="/img/unliked.svg" alt="Unliked" />
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
