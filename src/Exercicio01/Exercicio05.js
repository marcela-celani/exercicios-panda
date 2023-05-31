import React from 'react'

const Exercicio05 = () => {

    const produtos = [
        { id: 1, nome: 'Camiseta', preco: 30 },
        { id: 2, nome: 'Calça', preco: 70 },
        { id: 3, nome: 'Tênis', preco: 100 },
        { id: 4, nome: 'Boné', preco: 20 }
    ];

    const filteredProducts = produtos.filter((item) => item.preco > 30)

  return (
    <div>
      <h2>Exercicio 5</h2>
        {filteredProducts.map((item, index) =>(
            <div key={index}>
                <li>{`${item.nome}: ${item.preco} reais`}</li>
            </div>
        ))}
    </div>
  )
}

export default Exercicio05
