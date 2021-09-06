import Drawer from './components/Drawer';
import Header from './components/Header';
import React from 'react';
import axios from 'axios';
import Home from './Home';
import { Route } from 'react-router';
import Favorites from './Favorites';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://60d9d1c65f7bf1001754778d.mockapi.io/items')
      .then((res) => setItems(res.data));
    axios
      .get('https://60d9d1c65f7bf1001754778d.mockapi.io/cart')
      .then((res) => setCartItems(res.data));
    axios
      .get('https://60d9d1c65f7bf1001754778d.mockapi.io/favorites')
      .then((res) => setFavorites(res.data));
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://60d9d1c65f7bf1001754778d.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onAddToFavorites = async(obj) => {
    try {
      if(favorites.find((favObj) => favObj.id === obj.id)){
        axios.delete(`https://60d9d1c65f7bf1001754778d.mockapi.io/favorites/${obj.id}`)
      } else {
        const { data } = await axios.post('https://60d9d1c65f7bf1001754778d.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch(error){
      alert('Не удалось добавить в закладки')
    }
    
  }
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const onRemoveCartItem = (id) => {
    axios.delete(`https://60d9d1c65f7bf1001754778d.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveCartItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          onAddToCart={onAddToCart}
          onAddToFavorites={onAddToFavorites}
          onChangeSearchInput={onChangeSearchInput}
          setSearchValue={setSearchValue}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToCart={onAddToCart} onAddToFavorites={onAddToFavorites} />
      </Route>
    </div>
  );
}

export default App;
