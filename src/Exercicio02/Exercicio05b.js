import React, { useState } from 'react'

const Exercicio05b = () => {
  
    const [list, setList] = useState([
        { nome: "Alice", idade: 25, cidade: "São Paulo" },
        { nome: "Bob", idade: 35, cidade: "Rio de Janeiro" },
        { nome: "Carol", idade: 40, cidade: "São Paulo" },
        { nome: "David", idade: 28, cidade: "São Paulo" },
        { nome: "Eve", idade: 32, cidade: "São Paulo" }
    ])

    const listFiltered = list.filter((item) => item.idade > 30 && item.cidade === 'São Paulo')

    console.log(listFiltered)
  
    return (
    <div>
      <h2>Exercicio 05b</h2>
      <div>
        Nome das pessoas que possuem mais de 30 anos e residem em São Paulo: 
        {listFiltered.map((item, index) => (
            <div key={index}>
                <li>{`${item.nome} (${item.idade} anos)`}</li>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Exercicio05b
