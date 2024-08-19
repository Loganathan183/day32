import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
    <Cart jsonData={jsonData} />
  </Provider>
  );
}

export default App;
