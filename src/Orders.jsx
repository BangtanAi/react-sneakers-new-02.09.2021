import axios from 'axios';
import React from 'react'
import Card from './components/Card'
// import AppContext from './context';

function Orders() {
    const[orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    // const {onAddToCart, onAddToFavorites} = React.useContext(AppContext)

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://60d9d1c65f7bf1001754778d.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            } catch(error){
                alert('Ошибка при запросе заказов');
            }
        })()
    }, [])
    return (
        <div className="content">
        <div className="content-title">
          <h1>Мои заказы</h1>
        </div>

        <div className="sneakers">
            {(isLoading ? [...Array(12)] : orders).map((item, index) => (
            <Card
            {...item}
            key={index}
            // onPlus={(obj)=>onAddToCart(item)}
            // onAddFavorites={onAddToFavorites}
            loading={isLoading}
            />
          ))}
        </div>
      </div>
    )
}

export default Orders
