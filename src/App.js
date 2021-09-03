import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <Drawer />
      </div>
      
      <Header />

      <div className="content">
        <div className="content-title">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search-logo.svg" alt="Search-logo" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
           <Card /> 
        </div>
      </div>
    </div>
  );
}

export default App;
