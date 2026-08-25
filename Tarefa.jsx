import { useState, useEffect } from 'react'

const Tarefa = () => {

    //hook useState => manipula o estado da variável
    const [tarefas, setTarefas] = useState(() => {
        const salvarTarefas = localStorage.getItem("item-tarefa");
        return salvarTarefas ? JSON.parse(salvarTarefas) : [];
    });

    //HOOK useEffecr=> realiza o efeito colateral, nese exemplo vai mostrar a tarefa adicionada em tempo real
    const [campo, setCampo] = useState("");

    useEffect(() => {
        localStorage.setItem("item-tarefa", JSON.stringify(tarefas))
    }, [tarefas])
    return (
        <>

        </>
    )
}

export default Tarefa
