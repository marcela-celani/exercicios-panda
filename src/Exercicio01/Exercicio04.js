import React from 'react'

const Exercicio04 = () => {

    const usuarios = [
        { id: 1, nome: 'Alice', idade: 25 },
        { id: 2, nome: 'Bob', idade: 17 },
        { id: 3, nome: 'Carol', idade: 20 },
        { id: 4, nome: 'David', idade: 16 }
    ];

    const filteredUsuarios = usuarios.filter((item) => item.idade >= 20)

  return (
    <div>
      <h2>Exercicio 4</h2>
      {filteredUsuarios.map((item, index) => (
        <div key={index}>
            <li>{`${item.nome}: ${item.idade} anos`}</li>
        </div>
      ))}
    </div>
  )
}

export default Exercicio04
