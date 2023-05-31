import React, { useState } from 'react'

const Exercicio07b = () => {
  
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    
    console.log(nome, email)

    const handleForm = (event) => {
        event.preventDefault()
        if (nome === '' || email === ''){
            alert('Favor preencher os campos do formulário!')
        } else {
            alert(`As informações de nome: ${nome} e email: ${email} estão corretas!`)
        }
        setNome('')
        setEmail('')
    }

    return (
    <div>
      <h2>Exercicio 07b</h2>
      <form>
        <label>
            Nome:
            <input 
            type='text' 
            value = {nome} 
            onChange={(event) => setNome(event.target.value)}/>
        </label>
        <br/>
        <label>
            Email:
            <input 
            type='email'
            value = {email}
            onChange={(event) => setEmail(event.target.value)}/>
        </label>
        <br/>
        <button 
        type='submit'
        onClick={handleForm}>Enviar</button>
      </form>
    </div>
  )
}

export default Exercicio07b
