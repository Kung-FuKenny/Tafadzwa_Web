import { useCountUp } from 'use-count-up'
import './CountUp.css'

const CountUp = () => {
  const { value } = useCountUp({
    isCounting: true,
    end: 1320,
    duration: 14,
  })
  const { value2 } = useCountUp({
    isCounting: true,
    end: 1320,
    duration: 6,
  })
  const { value3 } = useCountUp({
    isCounting: true,
    end: 1320,
    duration: 6,
  })
  return (
    <div className="app">
      <h1 className="vh">Our Statistics</h1>
      <div className="value">{value}</div>
      <div className="value">{value2}</div>
      <div className="value">{value3}</div>
      <div className="notes">
        <p>
        </p>
      </div>
    </div>
  );
}

export default CountUp
