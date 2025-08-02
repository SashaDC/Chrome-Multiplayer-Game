import { useState } from 'react'
import Login from './Login'
import Game from './Game'

export default function App() {
  const [username, setUsername] = useState<string | null>(null)

  if (username == null) {
    return <Login value={setUsername} />
  }
  {
    console.log(username)
  }
  return <Game displayName={username} />
}
