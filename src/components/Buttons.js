import { useState } from 'react';

export function Buttons() {
    const [count, setCount] = useState(0)
    function countMount(){
        setCount(count + 1)
    }
    return (
        <div className="info-container">
            <h3 style={{color: "black"}}>COUNTER</h3>
            <h1 style={{color: "black"}}>{count}</h1>
            <button onClick={()=> {setCount(count - 1)}}>lower count</button>
            <button onClick={countMount}>add count</button>
            <button onClick={()=> {setCount(0)}}>Reset</button>

        </div>
    )
}  
