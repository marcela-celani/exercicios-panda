import React from 'react'
import { useState } from 'react'

function Exercicio01b() {

    const [namesList] = useState(["Alice", "Bob", "Carol", "David", "Eve"])

    const namesFiltered = namesList.filter((item) => item.toLowerCase().includes('a'))

    console.log(namesList)
    console.log(namesFiltered)

  return (
    <div>
      <h3>LISTA 02</h3>
      <h2>Exercicio 01b</h2>
      {namesFiltered.map((item, index) => (
        <div key={index}>
          <li>{item}</li>
        </div>
      ))}
    </div>
  )
}

export default Exercicio01b
