import React from 'react'

const ExemploFilter = () => {

    const Product = [
        {id: 1, name: 'Joãozinho', peso: 70, esporte: 'Futebol'},
        {id: 2, name: 'Marcela', peso: 50, esporte: 'Natação'},
        {id: 3, name: 'Laercio', peso: 70, esporte: 'Volei'}
    ];

    // guardar o valor maior que 50 numa const

    const filteredProducts = Product.filter((item) => item.peso > 50)
    console.log(filteredProducts)

  return (
    <div>
      <h2>Exemplo filter</h2>
      {filteredProducts.map((item, index) => (
        <div key={index}>
          <li>{item.name}</li>
          <li>{item.peso}</li>
          <li>{item.esporte}</li>
        </div>
      ))}
    </div>
  )
}

export default ExemploFilter
