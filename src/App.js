import Drawer from './components/Drawer';
import Header from './components/Header';
import React from 'react';
import axios from 'axios';
import Home from './Home';
import { Route } from 'react-router';
import Favorites from './Favorites';
import AppContext from './context';
import Orders from './Orders';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [favorites, setFavorites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoriteResponse, itemsResponse ] = await Promise.all([
          axios.get('https://60d9d1c65f7bf1001754778d.mockapi.io/cart'),
          axios.get(
            'https://60d9d1c65f7bf1001754778d.mockapi.io/favorites'),
          await axios.get('https://60d9d1c65f7bf1001754778d.mockapi.io/items'),
        ]);
        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoriteResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных');
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async(obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://60d9d1c65f7bf1001754778d.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://60d9d1c65f7bf1001754778d.mockapi.io/cart', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error){
      alert('Ошибка при добавлении в корзину')
      console.error(error);
    }
  };
  const onRemoveCartItem = (id) => {
    try {
      axios.delete(`https://60d9d1c65f7bf1001754778d.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error){
      alert('Ошибка при удалении из корзины');
      console.error(error);
    }
    
  };

  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://60d9d1c65f7bf1001754778d.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post(
          'https://60d9d1c65f7bf1001754778d.mockapi.io/favorites',
          obj,
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в закладки');
      console.error(error);
    }
  };
   
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
 
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToCart, onAddToFavorites, setCartOpened, setCartItems }}>
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
            cartItems={cartItems}
            isLoading={isLoading}
          />
        </Route>

        <Route path="/favorites" exact>
          <Favorites
            onAddToCart={onAddToCart}
            onAddToFavorites={onAddToFavorites}
          />
        </Route>

        <Route path="/orders" exact>
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
