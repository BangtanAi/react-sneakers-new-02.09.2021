import React from 'react';
import Card from './components/Card';

function Home({
  items,
  searchValue,
  onChangeSearchInput,
  setSearchValue,
  onAddToCart,
  onAddToFavorites,
  cartItems,
  isLoading,
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading
      ? [...Array(12)]
      : filteredItems).map((item, index) => (
          <Card
            {...item}
            key={index}
            onPlus={(obj) => onAddToCart(item)}
            onAddFavorites={(obj) => onAddToFavorites(item)}
            added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
            loading={isLoading}
          />
        ));
  };

  return (
    <div className="content">
      <div className="content-title">
        <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block">
          <img src="/img/search-logo.svg" alt="Search-logo" />
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="remove-btn input-remove"
              src="/img/remove.svg"
              alt="Remove"
            />
          )}
        </div>
      </div>

      <div className="sneakers">{renderItems()}</div>
    </div>
  );
}

export default Home;
