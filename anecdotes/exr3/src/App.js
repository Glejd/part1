import React from "react";
import { useState } from "react";

const Button = ({onClick , title}) => <button onClick={onClick}>{title}</button>


const App = () => {
    const anectodes = [
        '1.If it hurts, do it more often.',
        '2.Adding manpower to a late software project makes it later!',
        '3.The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        '4.Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        '5.Premature optimization is the root of all evil.',
        '6.Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        '7.Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
    ]

    var arr = new Uint8Array(6); 
    const [selected , setSelected] = useState(0)
    const [points , setPoint] = useState(arr)
   
    const anectodesVotes = () => {
        points[selected] += 1
        setPoint( [...points])
    }
    const findMax = () => {
        const maxPoints = Math.max(...points)
        let index = points.indexOf(maxPoints)
        return index
    }
    const nextAnectodes = () => setSelected(Math.floor(Math.random() * 6))
    
    return (
        <div>
            <h1>Anectode of the day</h1>
            <p>{anectodes[selected]}</p>
            <p>points for anectodes {selected + 1} are {points[selected]}</p> 
            <Button onClick={anectodesVotes} title={"vote"}/>
            <Button onClick={nextAnectodes} title={"next anectodes"}/>
            <h1>Anectode with most votes</h1>
            <p>{(anectodes[findMax()])}</p>
            <p>has {(points[findMax()])} votes</p>
        </div>
    )
}

export default App