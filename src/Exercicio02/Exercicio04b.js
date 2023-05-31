import React, { useState } from 'react'

const Exercicio04b = () => {
  
    const [listaObjetos, setListaObjetos] = useState([
        { nome: "Alice", idade: 25 },
        { nome: "Bob", idade: 17 },
        { nome: "Carol", idade: 32 },
        { nome: "David", idade: 14 },
        { nome: "Eve", idade: 19 }
    ])

    const listaFiltered = listaObjetos.filter((item) => item.idade < 18)

    console.log(listaFiltered)
  
    return (
    <div>
      <h2>Exercicio 04b</h2>
      <div>
        Os cidadãos com idade inferior a 18 anos são:
        {listaFiltered.map((item, index) => (
            <div key={index}>
                <li> {`${item.nome}: ${item.idade} anos`}</li>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Exercicio04b
