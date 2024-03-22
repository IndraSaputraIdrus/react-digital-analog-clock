import { useEffect, useState } from "react"
import "./App.css"
import ClockHand from "./components/clock-hand"

const App = () => {

  const [second, setSecond] = useState(0)
  const [hour, setHour] = useState(0)
  const [minutes, setMinutes] = useState(0)

  function clock() {
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minutesRatio + currentDate.getHours()) / 12
    setSecond(secondRatio)
    setMinutes(minutesRatio)
    setHour(hourRatio)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      clock()
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])


  return (
    <main className="clock">
      <div className="clock__center__point" />
      <ClockHand zIndex={99} ratio={second} color="#f87171" />
      <ClockHand zIndex={50} ratio={minutes} length={4} />
      <ClockHand ratio={hour} color="#4ade80" type="hour" length={3} />
    </main>
  )
}

export default App
