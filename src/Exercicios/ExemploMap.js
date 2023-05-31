import React from 'react'

const ExemploMap = () => {

  const Usuario = [
    {id: 1, name: 'Joãozinho', peso: 70, esporte: 'Futebol'},
    {id: 2, name: 'Marcela', peso: 50, esporte: 'Natação'},
    {id: 3, name: 'Laercio', peso: 70, esporte: 'Volei'}
  ];

  return (
    <div>
      <h2>Exemplo map</h2>
      {Usuario.map((item, index) => (
        <div key={index.id}>
          <li>{item.name}</li>
          <li>{item.peso}</li>
          <li>{item.esporte}</li>
        </div>
      ))}
    </div>
  )
}

export default ExemploMap
