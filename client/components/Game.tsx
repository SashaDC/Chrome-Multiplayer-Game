interface Props {
  displayName: string
}

export default function Game({ displayName }: Props) {
  return (
    <div className="Game-Container">
      <h1>Game</h1>
      <div className="Player">
        <div className="Avatar"></div>
        <div className="Display-Name">{displayName}</div>
      </div>
    </div>
  )
}
