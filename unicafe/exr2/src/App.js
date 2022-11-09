import { useState } from 'react';



const Button = ({onClick , text }) => <button onClick={onClick}> {text}</button>
const StatiscticLine = ({text , value}) => <table><thead><tr><td>{text} {value}</td></tr></thead></table>

const Statistics = (props) => {

 
  if (props.allClicks === 0) {
   return(
    <div>
      <h1>Statistics</h1>
      No feedback given
    </div>
   ) 
  }
  return (
    <div>
    <h1>Statisctics</h1>
    <StatiscticLine text={"good"} value={props.good} />
    <StatiscticLine text={"neutral"} value={props.neutral} />
    <StatiscticLine text={"bad"} value={props.bad} />
    <StatiscticLine text={"all"} value={props.allClicks} />
    <StatiscticLine text={"avarage"} value={findAvarage(props.good, props.neutral,props.bad , props.allClicks)} />
    <StatiscticLine text={"positive"} value={findPositive(props.good , props.allClicks)} />
    </div>
  )
}


const findAvarage = (good , neutral , bad , allClicks ) => {
  good = good * 1
  neutral = neutral * 0
  bad = bad * -1
  if(allClicks != 0) {
   return(
     ( good + neutral + bad ) / allClicks
    )
  }
  return 0;
  
}
const findPositive = (good , allClicks) => allClicks == 0 ? 0 : (good / allClicks) * 100 + "%";

const App = () => {

const[good, setGood] = useState(0)
const[neutral ,setNeutral] = useState(0)
const[bad, setBad] = useState(0)
const[allClicks , setAll] = useState(0)




const goodValue =  () => {
  setGood(good + 1)
  setAll(allClicks + 1)
  
} 
const neutralValue = () => {
  setAll(allClicks + 1)
  setNeutral(neutral + 1)

} 
const badValue = () => {
  setAll(allClicks + 1)
  setBad(bad + 1)
}

 
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={goodValue} text='good' />
      <Button onClick={neutralValue} text='neutral' />
      <Button onClick={badValue} text='bad' />
      <Statistics good={good} bad={bad} neutral={neutral} allClicks={allClicks} />
    </div>
  )
   
}
export default App;






