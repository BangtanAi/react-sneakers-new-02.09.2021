import React from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '../context';

function Card({
  id,
  title,
  price,
  imageUrl,
  onPlus,
  onAddFavorites,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, parentId: id,  title, price, imageUrl });
  };
  const onClickFavorite = () => {
    onAddFavorites({ id, parentId: id, title, price, imageUrl });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={220}
          viewBox="0 0 150 220"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="203" y="237" rx="0" ry="0" width="3" height="3" />
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
          <rect x="0" y="117" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="137" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="175" rx="7" ry="7" width="80" height="24" />
          <rect x="104" y="168" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className="favourite">
            {onAddFavorites && <img
              onClick={onClickFavorite}
              src={isFavorite ? 'img/liked.svg' : 'img/unliked.svg'}
              alt="Unliked"
            />}
          </div>
          <img className="card-img" width={133} height={112} src={imageUrl} alt="1" />
          <h5>{title}</h5>
          <div className="card-descr">
            <div className="card-descr__price">
              <span>Цена:</span> <br />
              <b>{price} руб.</b>
            </div>
            {onPlus &&  <img
              width={32}
              height={32}
              onClick={onClickPlus}
              src={isItemAdded(id) ? 'img/btn-checked.svg' : 'img/btn-plus.svg'}
              alt="Plus"
            />}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
