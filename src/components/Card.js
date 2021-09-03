import React from 'react';

function Card() {
  return (
    <div className="card">
      <div className="favourite">
        <img src="/img/unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src="/img/1.png" alt="1" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="card-descr">
        <div className="card-descr__price">
          <span>Цена:</span> <br />
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
