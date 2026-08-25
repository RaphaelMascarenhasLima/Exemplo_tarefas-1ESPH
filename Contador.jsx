import { useState } from 'react'

const Contador = () => {

    //HOOK- useState => manipula o estado da variável
    const [contador, setContador] = useState(100);
    return (
        <>
            <h1>Contagem Inicial:{contador}</h1>
            <button onClick={() => setContador(contador +1)}>Aumentar </button>
        </>
    )
}

export default Contador
