interface Props {
  length?: number
  ratio: number
  type?: "hour"
  color?: string,
  zIndex?: number
}

const ClockHand = ({
  length = 5,
  ratio,
  type,
  color,
  zIndex
}: Props) => {
  return (
    <div style={{ transform: `rotate(${ratio * 360}deg)`, color, zIndex }} className="clock__hand">
      <p style={{ transform: `rotate(-90deg)` }} >{`>`}</p>
      {[...Array(length)].map(() => (
        <p style={{ transform: `rotate(-${ratio * 360}deg)` }} className="clock__second__item">
          {Math.floor(ratio * (type === "hour" ? 12 : 60))}
        </p>
      ))}
    </div>
  )
}

export default ClockHand
