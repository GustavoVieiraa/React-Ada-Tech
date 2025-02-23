import { Provider } from "react-redux";
import { Header } from "./Components/Header/Header";
import { ProductList } from "./Components/ProductList/ProductList";
import { GlobalStyles } from "./styles/GlobalStyles";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <ProductList />
    </Provider>
  );
}

export default App;
