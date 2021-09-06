import React from 'react';
import Card from './components/Card';

function Home({ items, searchValue, onChangeSearchInput, setSearchValue, onAddToCart, onAddToFavorites }) {
    return (
        <div className="content">
        <div className="content-title">
          <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="search-block">
            <img src="/img/search-logo.svg" alt="Search-logo" />
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
            {searchValue && <img onClick={()=>setSearchValue('')} className="remove-btn input-remove" src="/img/remove.svg" alt="Remove" />}
          </div>
        </div>

        <div className="sneakers">
          {items
          .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
            {...item}
            key={index}
            onPlus={(obj)=>onAddToCart(item)}
            onAddFavorites = {(obj) =>onAddToFavorites(item)}
            />
          ))
          }
        </div>
      </div>
    )
}

export default Home;
