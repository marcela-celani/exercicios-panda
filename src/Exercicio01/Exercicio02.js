import React from 'react'

const Exercicio02 = ({name, post}) => {

    return (
    <div>
      <h2>Exercicio 2</h2>
      {name}
      {post.map((item) => (
        <div key={item.id}>
            <li>{item.id}</li>
            <li>{item.title}</li>
            <li>{item.content}</li>
        </div>
      ))}
    </div>
  )
}

export default Exercicio02
