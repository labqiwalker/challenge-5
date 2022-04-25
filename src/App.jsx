import Search from './components/pages/Search';
import { Provider } from "react-redux";
import store from './Redux/Store/Store';

function App() {
  return (
    <>
    <Provider store={store}>
      <Search />
      </Provider>
    </>
  );
}

export default App;
