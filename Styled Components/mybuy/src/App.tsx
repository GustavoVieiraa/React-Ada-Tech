import { Header } from "./Components/Header/Header";
import { ProductList } from "./Components/ProductList/ProductList";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <ProductList />
    </>
  );
}

export default App;
