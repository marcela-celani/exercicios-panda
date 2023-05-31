import React from 'react'

const Exercicio01 = () => {
    
    const nomes = ['Alice', 'Bob', 'Carol', 'David'];
    
    return (
    <div>
      <h2>Exercicio 1</h2>
      {nomes.map((item, index) => (
        <div key={index}>
          <li>{item}</li>
        </div>
      ))}
    </div>
  )
}

export default Exercicio01
