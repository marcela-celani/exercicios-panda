import React, { useState } from 'react'

const Exercicio02b = () => {
    
    const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const [array, setArray] = useState(arrayNumeros)

    const arrayFiltered = array.filter((item) => item > 5)

    console.log(array)
    console.log(arrayFiltered)
  
    return (
    <div>
      <h2>Exercicio 02b</h2>
      Os numeros maiores do que 5 são:
      {arrayFiltered.map((item, index) =>(
        <span key={index}>
            <span>{` ${item}`}</span>
        </span>
      ))}
    </div>
  )
}

export default Exercicio02b
