import React from 'react'

const Exercicio03 = () => {

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const numerosPares = numeros.filter(item => item % 2 === 0)

    console.log(numerosPares)
    
  return (
    <div>
      <h2>Exercicio 3</h2>
      <p>Resultados no console</p>
    </div>
  )
}

export default Exercicio03
