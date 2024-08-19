import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cart from './components/Cart';
import product from './data/product.json';

function App() {
  return (
    <Provider store={store}>
    <Cart product={product.json} />
  </Provider>
  );
}

export default App;
