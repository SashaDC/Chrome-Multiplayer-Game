import { useState } from 'react'

interface Name {
  displayName: string
}

interface Position {
  x: number
  y: number
}

export default function Game({ displayName }: Name) {
  /* Sets the positions to null by default so user spawns in the middle of the game */
  const [position, setPosition] = useState<Position | null>(null)

  /* This finds the x and y position of where the mouse clicked and sets the useState position to them */
  const handleClick = (event: React.PointerEvent<HTMLDivElement>) => {
    setPosition({ x: event.clientX, y: event.clientY })
  }

  {
    /*if a person clicks anywhere in the Game-Container div it triggers handleclick*/
  }
  return (
    <div className="Game-Container" onClick={handleClick}>
      <div
        className="Player"
        style={
          /* If the position of both x/y dont equal null use the useState positions otherwise undefined */
          position?.x != null && position?.y != null
            ? { left: position.x, top: position.y }
            : undefined
        }
      >
        <div className="Avatar">
          <img src="funny.png" alt="penguin" className="penguin" />
        </div>
        <div className="Display-Name">{displayName}</div>
      </div>
    </div>
  )
}
