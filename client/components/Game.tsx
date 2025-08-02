interface Props {
  displayName: string
}

export default function Game({ displayName }: Props) {
  return (
    <div>
      <h1>Game</h1>
      <p>{displayName}</p>
    </div>
  )
}
