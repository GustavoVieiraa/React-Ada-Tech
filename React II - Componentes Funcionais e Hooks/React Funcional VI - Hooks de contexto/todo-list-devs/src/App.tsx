import { Header } from "./components/Header/Header";

import "./styles/global.css";
import { Tasks } from "./components/Tasks/Tasks";
import { Memoization } from "./components/Concepts/Memoization";

function App() {
  // O useEffect será disparado sempre que alguma variável do array de
  // dependências for alterada
  // Por padrão, sempre o useEffect será disparado após a montagem do componente
  // (componentDidMount)

  return (
    <>
      <Header />
      <Tasks />

      <Memoization
        financialData={{
          incomes: [50, 30, 100],
          outcomes: [5, 12, 4],
        }}
      />
    </>
  );
}

export default App;
