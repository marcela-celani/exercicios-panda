import React, { useState } from 'react'

const Exercicio03b = () => {
  
    const lista = ["Dragão", "Cachorro", "Fada", "Panda"]

    const [animais, setAnimais] = useState(lista)

    const temPanda = [animais.includes('Panda')]
    console.log(temPanda)
  
    return (
    <div>
      <h2>Exercicio 03b</h2>
      {temPanda.map((item) => (
        <div>
            {`Panda está incluso na lista de animais? ${item}`}
        </div>
      ))}
      
    </div>
  )
}

export default Exercicio03b
