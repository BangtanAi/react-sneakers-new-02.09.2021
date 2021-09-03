import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import React from 'react';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([])

  const onAddToCart = (obj) => {
    console.log(obj)
    setCartItems(prev=>[...prev, obj])
  }

  React.useEffect(() => {
    fetch('https://60d9d1c65f7bf1001754778d.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      })
  }, [])

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} 
      onClose={()=>setCartOpened(false)} />}
      <Header onClickCart={()=>setCartOpened(true)} />

      <div className="content">
        <div className="content-title">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search-logo.svg" alt="Search-logo" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          {items.map((item) => (
            <Card
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onFavorite={()=>console.log('Added to favorite')}
            onPlus={(obj)=>onAddToCart(item)}
            />
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
