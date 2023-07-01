import { useState } from 'react'

const Heading = () => <h1>give feedback</h1>

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const StatisticsHeading = () => <h2>statistics</h2>

const StatisticsLine = ({text, value}) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td> 
        <td>{value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = (props) => {
  if (props.total === 0){
    return <div>No feedback given</div>
  }
  return(
    <table>
      <StatisticsLine text='good' value={props.good} />
      <StatisticsLine text='neutral' value={props.neutral} />
      <StatisticsLine text='bad' value={props.bad} />
      <StatisticsLine text='all' value={props.total} />
      <StatisticsLine text='average' value={props.average} />
      <StatisticsLine text='positive' value={props.posPerc} />
    </table>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [posPerc, setPosPerc] = useState(0)

  const goodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    const updatedTotal = updatedGood + neutral + bad
    setTotal(updatedTotal)
    const updatedAvg = (updatedGood-bad)/updatedTotal
    setAverage(updatedAvg)
    const updatedPositivePercent = (updatedGood/updatedTotal)*100
    setPosPerc(updatedPositivePercent)
  }

  const neutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const updatedTotal = good + updatedNeutral + bad
    setTotal(updatedTotal)
    const updatedAvg = (good-bad)/updatedTotal
    setAverage(updatedAvg)
    const updatedPositivePercent = (good/updatedTotal)*100
    setPosPerc(updatedPositivePercent)
  }

  const badClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const updatedTotal = good + neutral + updatedBad
    setTotal(updatedTotal)
    const updatedAvg = (good-updatedBad)/updatedTotal
    setAverage(updatedAvg)
    const updatedPositivePercent = (good/updatedTotal)*100
    setPosPerc(updatedPositivePercent)
  }

  return (
    <div>
      <Heading />
      <Button handleClick={goodClick} text='good'/>
      <Button handleClick={neutralClick} text='neutral'/>
      <Button handleClick={badClick} text='bad'/>
      <StatisticsHeading />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} posPerc={posPerc} />
    </div>
  )
}

export default App