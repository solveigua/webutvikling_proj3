import './App.css';
import Header from './components/Layout/Header';
import Movies from "./components/Movies/Movies";
import store from './store';
import { Provider } from 'react-redux';


function App() {
 
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
          <Movies />
      </div>
    </Provider>
  );
}

export default App;
