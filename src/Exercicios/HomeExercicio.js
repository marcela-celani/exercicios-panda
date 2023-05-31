import React from 'react'
import ExemploFilter from './ExemploFilter'
import ExemploMap from './ExemploMap'
import ExemploUseState from './ExemploUseState'
import Exercicio05 from '../Exercicio01/Exercicio05'
import Exercicio04 from '../Exercicio01/Exercicio04'
import Exercicio06 from '../Exercicio01/Exercicio06'
import Exercicio03 from '../Exercicio01/Exercicio03'
import Exercicio02 from '../Exercicio01/Exercicio02'
import Exercicio01 from '../Exercicio01/Exercicio01'
import Exercicio01b from '../Exercicio02/Exercicio01b'
import Exercicio02b from '../Exercicio02/Exercicio02b'
import Exercicio03b from '../Exercicio02/Exercicio03b'
import Exercicio04b from '../Exercicio02/Exercicio04b'
import Exercicio05b from '../Exercicio02/Exercicio05b'
import Exercicio06b from '../Exercicio02/Exercicio06b'
import Exercicio07b from '../Exercicio02/Exercicio07b'
import Exercicio08b from '../Exercicio02/Exercicio08b'

const HomeExercicio = () => {

  const posts = [
    { id: 1, title: 'Post 1', content: 'Conteúdo do post 1' },
    { id: 2, title: 'Post 2', content: 'Conteúdo do post 2' },
    { id: 3, title: 'Post 3', content: 'Conteúdo do post 3' }
  ];

  const name = "Marcela";

  return (
    <div>
      <ExemploFilter/>
      <hr />
      <ExemploMap/>
      <hr />
      <ExemploUseState/>
      <hr />
      <Exercicio01/>
      <hr />
      <Exercicio02 post = {posts} name = {name} />
      <hr /> 
      <Exercicio03/>
      <hr />
      <Exercicio04/>
      <hr />
      <Exercicio05/>
      <hr />
      <Exercicio06/>
      <hr/>
      <Exercicio01b/>
      <hr/>
      <Exercicio02b/>
      <hr/>
      <Exercicio03b/>
      <hr/>
      <Exercicio04b/>
      <hr/>
      <Exercicio05b/>
      <hr/>
      <Exercicio06b/>
      <hr/>
      <Exercicio07b/>
      <hr/>
      <Exercicio08b/>
    </div>
  )
}

export default HomeExercicio
