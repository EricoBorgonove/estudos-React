import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0)

    function aumentar (){
        setContador(contador + 1)
    }

    function diminuir (){
        setContador(contador - 1)
    }
    
    return (
    <>
      <h2>Contador: {contador}</h2>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>
    </>
  )
}

export default Contador
