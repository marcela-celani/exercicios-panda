import React from 'react'

const Exercicio06 = () => {

    const cores = ['vermelho', 'azul', 'amarelo', 'verde', 'roxo'];
    
    const coresPrimarias = [
    cores.filter((item) => ((item === 'vermelho'))), 
    cores.filter((item) => ((item === 'azul'))), 
    cores.filter((item) => ((item === 'amarelo')))
    ];

    if (coresPrimarias.includes('vermelho')) {
        console.log('Tem cores primarias')
    } else {
        console.log('errou')
    }


  return (
    <div>
      <h2>Exercicio 6</h2>
      {coresPrimarias.map((item, index) => (
        <div key={index}>
            <li>{item}</li>
        </div>
      ))}
    </div>
  )
}

export default Exercicio06
