import React, { useState } from "react";
import styles from "./styles.module.scss";

export function Counter() {
  const [contador, setContador] = useState(0);

  return (
    <div className={styles.container}>
      <h1>{contador}</h1>

      <div>
        <button
          onClick={() => {
            setContador(contador - 1);
          }}
        >
          Diminuir
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            setContador(contador + 1);
          }}
        >
          Aumentar
        </button>
      </div>
    </div>
  );
}
