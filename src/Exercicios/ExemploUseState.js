import { useState } from "react";

const AlunoEstados = () => {
    const [numero, setNumero] = useState(50);
    const [inputNome, inputSetName] = useState("Bola");
    const [tarefa, SetTarefa] = useState([""]);
    const [novaTarefa, setNovaTarefa] = useState("");
  
    const newTarefaHandle = () => {
      SetTarefa([...tarefa, novaTarefa]);
      setNovaTarefa("");
    }; 
  
    const capturaEventoAcontecendo = (evento) => {
      setNovaTarefa(evento.target.value);
    };
  
    const numeromaismais = () => {
      setNumero(numero + 100);
    };
  
    const capturarOqueUsuarioDigita = (evento) => {
      inputSetName(evento.target.value);
    };
  
    console.log(tarefa);
  
    return (
      <div>
        <h1>{numero}</h1>
        <button onClick={numeromaismais}>++</button>
        <hr />
        <h1>Exemplo 2</h1>
        <input
          type="text"
          value={inputNome}
          onChange={capturarOqueUsuarioDigita}
        />
        {inputNome}
        <h1>Exemplo 3</h1>
        <input
          type="text"
          value={novaTarefa}
          onChange={capturaEventoAcontecendo}
        />
        <button onClick={newTarefaHandle}>CRIAR</button>
  
        <ul>
          {tarefa.map((tarefa, index) => (
            <div key={index}>
              <li>{tarefa}</li>
              <button>remover</button>
            </div>
          ))}
        </ul>
      </div>
    );
  };
  
  export default AlunoEstados;