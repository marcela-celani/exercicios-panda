import React, { useState } from 'react'

const Exercicio08b = () => {
  
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [resultado, setResultado] = useState(null)

    const calcularIMC = (event) => {
        event.preventDefault()
        const calculo = peso / (altura * altura)
        const arredondado = calculo.toFixed(2)
        
        setResultado(arredondado)
    }
  
    return (
    <div>
      <h2>Exercicio 08b</h2>
      <form>
        <label>
            Altura (m):
            <input 
            type='number'
            
            onChange={(event) => setAltura(event.target.value)}
            />
        </label>
        <br />
        <label>
            Peso (kg):
            <input 
            type='number'
            onChange={(event) => setPeso(event.target.value)}
            />
        </label>
        <br />
        <button 
            type='submit'
            onClick = {calcularIMC}>Calcular IMC
        </button>

        <p>Parabéns, seu IMC é : {resultado}</p>
      </form>
    </div>
  )
}

export default Exercicio08b
