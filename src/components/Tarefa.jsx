import { useState, useEffect } from 'react'
import "../css/estilo.css"

const Tarefa = () => {

    //hook useState => manipula o estado da variável
    const [tarefas, setTarefas] = useState(() => {
        const salvarTarefas = localStorage.getItem("item-tarefa");
        return salvarTarefas ? JSON.parse(salvarTarefas) : [];
    });

    //HOOK useEffect=> realiza o efeito colateral, nese exemplo vai mostrar a tarefa adicionada em tempo real
    const [campo, setCampo] = useState("");

    useEffect(() => {
        localStorage.setItem("item-tarefa", JSON.stringify(tarefas))
    }, [tarefas])


    const AdicionarTarefa = (e) => {
        //Previne que a página se recarregue automaticamente
        e.preventDefault();
        //Valida-se o campo se estiver vazio
        if (!campo.trim()) return;
        //Novo objeto
        const novaTarefa = {
            id: Date.now(),
            texto: campo,
        }
        setTarefas([...tarefas, novaTarefa]);
        setCampo("")
    }
    const RemoverTarefa = (id) => {
        //Verifica se o id da tarefa atual é diferente do id que deseja apagar
        //Se o ID for igual (tareda que deseja apagar) a condição retorna falso
        // e o item excluído
        const apagarTarefa = tarefas.filter((tarefa) => tarefa.id !== id)
        setTarefas(apagarTarefa);


    }
    return (
        <div className="todo-container">
            <h1>Minha Lista de Tarefas</h1>
            <form onSubmit={AdicionarTarefa}>
                <input
                    type="text"
                    value={campo}
                    onChange={(e) => setCampo(e.target.value)}
                    placeholder="Digite sua senha"
                    className="todo-input"
                />
                <button type="submit">Adicionar</button>
            </form>

            <ul>
                {tarefas.map((tarefa)=>(
                    <li key = {tarefa.id}>
                        <span>{tarefa.texto}</span>
                        <button Onclick={()=>RemoverTarefa(tarefa.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
            {tarefas.length === 0 && <p>Nenhuma tarefa salva</p>}
        </div>
    )
}

export default Tarefa
