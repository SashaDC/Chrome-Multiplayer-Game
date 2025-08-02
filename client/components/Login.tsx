import { useState } from 'react'

interface Props {
  value: (name: string) => void
}

export default function Login({ value }: Props) {
  const [userInput, setUserInput] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value)
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    value(userInput)
  }

  return (
    <div className="Login-Container">
      <h1>Login</h1>
      <h2>Enter a username:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  )
}
