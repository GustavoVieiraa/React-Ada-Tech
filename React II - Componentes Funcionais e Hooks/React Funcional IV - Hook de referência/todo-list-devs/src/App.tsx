import { Header } from "./components/Header/Header";

import "./styles/global.css";
import { Tasks } from "./components/Tasks/Tasks";
import { Refs } from "./components/Concepts/Resf";

function App() {
  // O useEffect será disparado sempre que alguma variável do array de
  // dependências for alterada
  // Por padrão, sempre o useEffect será disparado após a montagem do componente
  // (componentDidMount)

  return (
    <>
      <Header />
      <Tasks />

      <Refs />
    </>
  );
}

export default App;
