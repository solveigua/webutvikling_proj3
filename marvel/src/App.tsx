import { useState } from "react";
import './App.css';
import Header from './components/Layout/Header';
import Movies from "./components/Movies/Movies";
import store from './store';
import { Provider } from 'react-redux';

function App() {
  const [searchIsShown, setSearchIsShown] = useState<Boolean>(false);

  const showSearchHandler = () => {
    setSearchIsShown(true);
  };

  const hideSearchHandler = () => {
    setSearchIsShown(false);
  }

  //FROM TUTORIAL: used searchprovider as wrapper as it affectrs everything - can use Fragments instead. Check how it works with redux/mobux
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <main>
          <Movies />
        </main>
      </div>
    </Provider>
  );
}

export default App;
