import React, { useState } from 'react'

const Exercicio06b = () => {
  
    const [list, setList] = useState([2, 4, 6, 8, 10, 13, 15, 200])

    const todosPares = list.includes((item) => item % 2 === 0)

    const paresFiltered = list.filter((item) => item % 2 === 0)
  
    return (
    <div>
      <h2>Exercicio 06b</h2>
      <p>
        Os elementos pares da lista são:
        {todosPares ? list.map((item) => (
            <div>
                <li>{item}</li>
            </div>
            )) : paresFiltered.map((item) => (
            <div>
                <li>{item}</li>
            </div>))
        }
      </p>
    </div>
  )
}

export default Exercicio06b
